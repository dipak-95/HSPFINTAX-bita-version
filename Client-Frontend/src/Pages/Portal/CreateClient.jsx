import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const SERVICE_LIST = [
  { key: "loanProcessing", label: "Loan Processing" },
  { key: "loanRenewal", label: "Loan Renewal" },
  { key: "subsidy", label: "Subsidy" }
];

export default function CreateClient() {
  const [searchParams] = useSearchParams();
  const clientId = searchParams.get("id");
  const isEdit = Boolean(clientId);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});
  const [startFrom, setStartFrom] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH CLIENT (EDIT MODE) ================= */
  useEffect(() => {
    if (!clientId) return;

    const fetchClient = async () => {
      try {
        const res = await axios.get(
          `${window.API_BASE_URL}/client/admin/client/${clientId}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        const c = res.data;
        setForm({
          name: c.name || "",
          email: c.email || "",
          phone: c.phone || ""
        });
      } catch {
        toast.error("Failed to load client details");
      }
    };

    fetchClient();
  }, [clientId]);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (form.phone) {
      if (!/^\d{10}$/.test(form.phone)) {
        newErrors.phone = "Phone must be 10 digits";
      }
    }

    if (!isEdit && !startFrom) {
      newErrors.startFrom = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const submit = async () => {
    setGeneratedPassword("");

    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    try {
      setLoading(true);

      if (isEdit) {
        await axios.patch(
          `${window.API_BASE_URL}/client/admin/client/${clientId}`,
          form,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        toast.success("Client updated successfully");
      } else {
        const res = await axios.post(
          window.API_BASE_URL + "/client/create",
          {
            ...form,
            startFrom
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );

        toast.success("Client created successfully");

        if (res.data?.tempPassword) {
          setGeneratedPassword(res.data.tempPassword);
          toast.info("Client password generated. Please copy it now.");
        }

        setForm({ name: "", email: "", phone: "" });
        setStartFrom("");
        setErrors({});
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "Action failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl m-3 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow p-6"
      >
        <h2 className="text-xl font-semibold mb-4">
          {isEdit ? "Edit Client" : "Create Client"}
        </h2>

        {/* NAME */}
        <input
          className={`w-full border p-3 rounded-lg mb-4 ${
            errors.name ? "border-red-500" : ""
          }`}
          placeholder="Client Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-3">
            {errors.name}
          </p>
        )}

        {/* EMAIL */}
        <input
          className={`w-full border p-3 rounded-lg mb-4 ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Client Email"
          value={form.email}
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">
            {errors.email}
          </p>
        )}

        {/* PHONE */}
        <input
          className={`w-full border p-3 rounded-lg mb-4 ${
            errors.phone ? "border-red-500" : ""
          }`}
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={e =>
            setForm({
              ...form,
              phone: e.target.value.replace(/\D/g, "")
            })
          }
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mb-4">
            {errors.phone}
          </p>
        )}

        {/* SERVICE */}
        {!isEdit && (
          <>
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
            {errors.startFrom && (
              <p className="text-red-500 text-sm mb-4">
                {errors.startFrom}
              </p>
            )}
          </>
        )}

        {/* PASSWORD */}
        {generatedPassword && (
          <div className="bg-yellow-50 border border-yellow-400 p-3 rounded-lg mb-4">
            <p className="text-sm font-semibold text-yellow-800 mb-2">
              Client Login Password (shown only once)
            </p>
            <p className="font-mono text-lg select-all">
              {generatedPassword}
            </p>
          </div>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg
                     hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : isEdit
            ? "Update Client"
            : "Create Client"}
        </button>
      </motion.div>
    </div>
  );
}
