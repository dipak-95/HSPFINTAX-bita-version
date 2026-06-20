import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Mail, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EmployeeMyClient() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(window.API_BASE_URL + "/client/employee/clients", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        setClients(res.data || []);
      })
      .catch(err => {
        console.error(err);
        setClients([]);
      })
      .finally(() => {
        setLoading(false); // ✅ VERY IMPORTANT
      });
  }, []);

  /* ================= LOADER ================= */
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
          <div className="text-sm text-slate-600 tracking-wide">
            Processing financial data…
          </div>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-600">
          My Clients
        </h2>
        <div className="text-sm text-slate-500 mt-1">
          Clients assigned to you
        </div>
      </div>

      {/* CLIENT LIST */}
      {clients.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-6 text-slate-500">
          No clients assigned yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col"
            >
              {/* STATUS */}
              <span
                className={`self-end px-3 py-1 rounded-full text-xs font-medium
                  ${
                    client.overallStatus === "completed"
                      ? "bg-green-100 text-green-700"
                      : client.overallStatus === "processing"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {client.overallStatus}
              </span>

              {/* CLIENT INFO */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <User size={18} className="text-slate-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    {client.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail size={16} />
                  <span>{client.email}</span>
                </div>
              </div>

              {/* ACTION */}
              <Link
                to={`/employee/clients/${client._id}`}
                className="mt-auto inline-flex items-center justify-between text-sm font-medium text-blue-600 hover:underline"
              >
                View Client Work
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
