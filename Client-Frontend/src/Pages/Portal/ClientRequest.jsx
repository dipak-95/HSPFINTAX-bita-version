import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Check, X, User, Mail, Briefcase } from "lucide-react";
import { toast } from "react-toastify";

export default function ClientRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH REQUESTS ================= */
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        window.API_BASE_URL + "/client/admin/client-requests",
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );
      setRequests(res.data);
    } catch {
      toast.error("Failed to load client requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  /* ================= APPROVE ================= */
  const approve = async (id) => {
    try {
      const res = await axios.post(
        `${window.API_BASE_URL}/client/admin/client-requests/${id}/approve`,
        {},
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );

      toast.success(
        `Client request approved.`
      );
      fetchRequests();
    } catch {
      toast.error("Approval failed");
    }
  };

  /* ================= REJECT ================= */
  const reject = async (id) => {
    try {
      await axios.patch(
        `${window.API_BASE_URL}/client/admin/client-requests/${id}/reject`,
        {},
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );

      toast.success("Client request rejected");
      fetchRequests();
    } catch {
      toast.error("Rejection failed");
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
    <div className="max-w-5xl mx-auto">
      {/* ================= HEADER ================= */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-slate-800">
          Client Requests
        </h2>
        <p className="text-sm text-slate-500">
          Review and approve client onboarding requests
        </p>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {requests.length === 0 && (
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <p className="text-slate-500">
            No pending client requests 🎉
          </p>
        </div>
      )}

      {/* ================= REQUEST LIST ================= */}
      <div className="space-y-5">
        {requests.map(req => (
          <motion.div
            key={req._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur
                       rounded-2xl shadow-lg 
                       p-5 flex flex-col lg:flex-row
                       lg:items-center lg:justify-between gap-5"
          >
            {/* ================= INFO ================= */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-600" />
                <p className="font-semibold text-slate-800">
                  {req.name}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail size={14} />
                {req.email}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Briefcase size={14} />
                Service:
                <span className="ml-1 px-2 py-0.5 rounded-full
                                 bg-blue-100 text-blue-700 text-xs">
                  {req.startFrom}
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Requested by: {req.createdBy?.name}
              </p>
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="flex gap-3">
              <button
                onClick={() => approve(req._id)}
                className="inline-flex items-center gap-2
                           px-5 py-2 rounded-xl
                           bg-green-600 hover:bg-green-700
                           text-white text-sm font-medium transition"
              >
                <Check size={16} />
                Approve
              </button>

              <button
                onClick={() => reject(req._id)}
                className="inline-flex items-center gap-2
                           px-5 py-2 rounded-xl
                           bg-red-600 hover:bg-red-700
                           text-white text-sm font-medium transition"
              >
                <X size={16} />
                Reject
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
