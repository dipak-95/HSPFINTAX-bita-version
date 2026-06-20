import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const SERVICE_LIST = [
  { key: "loanProcessing", label: "Loan Processing" },
  { key: "loanRenewal", label: "Loan Renewal" },
  { key: "subsidy", label: "Subsidy" }
];

export default function EmployeeCreateClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [startFrom, setStartFrom] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Client name is required");
      return false;
    }
    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      toast.error("Name can contain only letters");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }

    if (!startFrom) {
      toast.error("Please select a service");
      return false;
    }

    return true;
  };

  /* ================= SUBMIT ================= */
  const submit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        window.API_BASE_URL + "/client/employee/client-request", // ✅ FIXED
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone,
          startFrom
        },
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );

      toast.success(
        res.data.msg ||
          "Client request sent to admin successfully"
      );

      setForm({ name: "", email: "", phone: "" });
      setStartFrom("");
    } catch (err) {
      toast.error(
        err.response?.data?.msg ||
          "Request failed. Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

   if (loading) {
    return (
        <div className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        {/* Logo / Brand */}
        <div className="text-3xl font-bold tracking-wide text-slate-800">
          HPS <span className="text-blue-600">Fintax</span>
        </div>

        {/* Animated Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-blue-600 rounded-full animate-hps-loader" />
        </div>

        {/* Text */}
        <p className="text-sm text-slate-600 tracking-wide">
          Processing financial data…
        </p>
      </div>
    </div>
    );
  }


  return (
    <div className="max-sm:p-2 max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow p-5"
      >
        <h2 className="text-xl font-semibold mb-2 text-blue-600">
          Create Client Request
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          Client will be created after admin approval.
        </p>

        <input
          placeholder="Client Name"
          className="w-full border rounded-lg p-3 mb-3"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Client Email"
          className="w-full border rounded-lg p-3 mb-3"
          value={form.email}
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone (optional)"
          className="w-full border rounded-lg p-3 mb-5"
          value={form.phone}
          onChange={e =>
            setForm({
              ...form,
              phone: e.target.value.replace(/\D/g, "")
            })
          }
          maxLength={10}
        />

        <h3 className="font-medium mb-3">Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {SERVICE_LIST.map(s => (
            <label
              key={s.key}
              className={`border rounded-lg p-3 flex gap-3 cursor-pointer
                ${
                  startFrom === s.key
                    ? "border-blue-600 bg-blue-50"
                    : "hover:bg-slate-50"
                }`}
            >
              <input
                type="radio"
                checked={startFrom === s.key}
                onChange={() => setStartFrom(s.key)}
              />
              {s.label}
            </label>
          ))}
        </div>

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700
                     text-white py-3 rounded-lg font-medium transition
                     disabled:opacity-50"
        >
          {loading ? "Sending Request..." : "Send to Admin"}
        </button>
      </motion.div>
    </div>
  );
}
