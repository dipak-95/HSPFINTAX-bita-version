import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function CreateEmployee() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Employee name is required");
      return false;
    }

    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Employee email is required");
      return false;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      toast.error("Invalid email address");
      return false;
    }

    return true;
  };

  /* ================= SUBMIT ================= */
  const submit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        window.API_BASE_URL + "/auth/create-user",
        { ...form, role: "employee" },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );

      toast.success("Employee created successfully");

      if (res.data?.tempPassword) {
        toast.info(
          `Temporary Password: ${res.data.tempPassword}`,
          { autoClose: false }
        );
      }

      setForm({ name: "", email: "" });
    } catch (err) {
      toast.error(
        err.response?.data?.msg || "Failed to create employee"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-sm:p-2 max-w-xl mx-auto my-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow p-6"
      >
        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-6 text-blue-600">
          Create Employee
        </h2>

        {/* NAME */}
        <input
          className="w-full border p-3 mb-3 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Employee Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          className="w-full border p-3 mb-6 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Employee Email"
          value={form.email}
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* BUTTON */}
        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium transition
            ${
              loading
                ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          {loading ? "Creating..." : "Create Employee"}
        </button>
      </motion.div>
    </div>
  );
}
