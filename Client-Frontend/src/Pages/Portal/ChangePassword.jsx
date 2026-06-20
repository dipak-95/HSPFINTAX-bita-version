import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });

  const [show, setShow] = useState({
    password: false,
    confirm: false
  });

  const nav = useNavigate();

  /* ================= VALIDATION ================= */
  const validate = () => {
    const { password, confirmPassword } = form;

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least 1 uppercase letter");
      return false;
    }

    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least 1 number");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  /* ================= SUBMIT ================= */
  const submit = async () => {
    if (!validate()) return;

    try {
      await axios.post(
        window.API_BASE_URL + "/auth/change-password",
        { password: form.password },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      toast.success("Password updated successfully");

      setTimeout(() => {
        nav("/");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
            <Lock />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            Change Password
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Please set a new secure password
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-4">

          {/* NEW PASSWORD */}
          <div className="relative">
            <input
              type={show.password ? "text" : "password"}
              placeholder="New Password"
              className="w-full border rounded-lg px-4 py-3 pr-12
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={e =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() =>
                setShow({ ...show, password: !show.password })
              }
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-slate-500 hover:text-slate-700"
            >
              {show.password ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={show.confirm ? "text" : "password"}
              placeholder="Confirm New Password"
              className="w-full border rounded-lg px-4 py-3 pr-12
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.confirmPassword}
              onChange={e =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value
                })
              }
            />
            <button
              type="button"
              onClick={() =>
                setShow({ ...show, confirm: !show.confirm })
              }
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-slate-500 hover:text-slate-700"
            >
              {show.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={submit}
            className="w-full bg-blue-600 hover:bg-blue-700
                       text-white py-3 rounded-lg font-semibold transition"
          >
            Update Password
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-xs text-center text-slate-400 mt-6">
          © 2026 HPS FINTAX. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
