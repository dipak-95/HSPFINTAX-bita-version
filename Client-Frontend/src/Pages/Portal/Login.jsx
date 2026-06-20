import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

const submit = async () => {
  setError("");
  setLoading(true);

  try {
    const res = await axios.post(
      window.API_BASE_URL + "/auth/login",
      {
        email: form.email.trim(),
        password: form.password
      }
    );

    console.log("LOGIN RESPONSE:", res.data);

    // ✅ SAVE DATA (MATCH BACKEND RESPONSE)
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    localStorage.setItem("email", res.data.email);
    localStorage.setItem("name", res.data.name);
    localStorage.setItem(
      "mustChangePassword",
      String(res.data.mustChangePassword)
    );

    // ✅ ROLE BASED REDIRECT
    if (res.data.role === "admin") {
      navigate("/admin");
    } else if (res.data.role === "employee") {
      navigate("/employee");
    } else {
      navigate("/client");
    }

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    setError(err.response?.data?.msg || "Login failed");
  } finally {
    setLoading(false);
  }
};


  /* ================= LOADER ================= */
  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">

          <div className="text-3xl font-bold tracking-wide text-slate-800">
            HPS <span className="text-blue-600">Fintax</span>
          </div>

          <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-blue-600 rounded-full animate-hps-loader" />
          </div>

          <p className="text-sm text-slate-600 tracking-wide">
            Processing financial data…
          </p>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3">
            <img src="/logo.png" alt="HPS Fintax" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            HPS <span className="text-blue-700">FINTAX</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Secure Login Portal
          </p>
        </div>

        {/* FORM */}
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault();
            submit();
          }}
        >
          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full border rounded-lg px-10 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={e =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full border rounded-lg px-10 pr-12 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={e =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-slate-500 hover:text-slate-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800
                       text-white py-3 rounded-lg font-semibold transition
                       disabled:opacity-50"
          >
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-xs text-center text-slate-400 mt-6">
          © {new Date().getFullYear()} HPS FINTAX. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
