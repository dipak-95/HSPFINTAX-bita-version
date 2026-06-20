import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle,
  Clock,
  ArrowLeft
} from "lucide-react";
import { toast } from "react-toastify";

export default function EmployeeClientWork() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  /* ================= FETCH CLIENT ================= */
  const fetchClient = async () => {
    try {
      setLoading(true);
      setError("");

      const url =
        user?.role === "admin"
          ? `${window.API_BASE_URL}/client/admin/client/${clientId}`
          : `${window.API_BASE_URL}/client/employee/client/${clientId}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      setClient(res.data);
    } catch (err) {
      if (err.response?.status === 403) {
        setError("You are not allowed to access this client.");
      } else {
        setError("Failed to load client work.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClient();
  }, [clientId]);

  /* ================= OPTIMISTIC STATUS UPDATE ================= */
  const updateStatus = async (
    serviceKey,
    stepKey,
    subIndex,
    newStatus
  ) => {
    // 🔒 Backup current state for rollback
    const previousClient = JSON.parse(JSON.stringify(client));

    // ✅ Optimistic UI update
    setClient(prev => {
      const updated = { ...prev };

      updated.services = updated.services.map(service => {
        if (service.serviceKey !== serviceKey) return service;

        return {
          ...service,
          workflow: service.workflow.map(step => {
            if (step.key !== stepKey) return step;

            const updatedSubSteps = [...step.subSteps];
            updatedSubSteps[subIndex] = {
              ...updatedSubSteps[subIndex],
              status: newStatus
            };

            const allCompleted = updatedSubSteps.every(
              s => s.status === "completed"
            );

            return {
              ...step,
              subSteps: updatedSubSteps,
              status: allCompleted
                ? "completed"
                : newStatus === "in_progress"
                ? "in_progress"
                : step.status
            };
          })
        };
      });

      return updated;
    });

    const toastId = toast.loading("Updating status...");

    try {
      await axios.patch(
        window.API_BASE_URL + "/client/update-service-work",
        {
          clientId,
          serviceKey,
          stepKey,
          subIndex,
          status: newStatus
        },
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );

      toast.update(toastId, {
        render: "Status updated successfully ✅",
        type: "success",
        isLoading: false,
        autoClose: 2000
      });
    } catch (err) {
      // ❌ Rollback UI on error
      setClient(previousClient);

      toast.update(toastId, {
        render:
          err.response?.data?.msg ||
          "Update failed. Changes reverted ❌",
        type: "error",
        isLoading: false,
        autoClose: 2500
      });
    }
  };

  /* ================= STATES ================= */
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

  if (error)
    return (
      <div className="text-center space-y-3">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 text-sm hover:underline"
        >
          Go back
        </button>
      </div>
    );

  if (!client) return null;

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* ================= CLIENT HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-6 space-y-4"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              {client.name}
            </h2>

            <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
              <Mail size={16} />
              <span>{client.email}</span>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-medium
              ${
                client.overallStatus === "completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
          >
            {client.overallStatus === "completed" ? (
              <CheckCircle size={14} />
            ) : (
              <Clock size={14} />
            )}
            {client.overallStatus}
          </span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to clients
        </button>
      </motion.div>

      {/* ================= SERVICES ================= */}
      {!client.services?.length ? (
        <div className="bg-yellow-50 rounded-2xl p-5 text-yellow-800 shadow">
          No services assigned to this client yet.
        </div>
      ) : (
        client.services.map(service => (
          <div key={service.serviceKey} className="space-y-6">
            <h3 className="text-lg font-semibold">
              Service:{" "}
              <span className="text-blue-600">
                {service.serviceName}
              </span>
            </h3>

            {service.workflow.map((step, stepIndex) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stepIndex * 0.05 }}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                <div className="flex justify-between items-center mb-5">
                  <h4 className="font-semibold">
                    {stepIndex + 1}. {step.title}
                  </h4>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        step.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : step.status === "in_progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {step.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {step.subSteps.map((sub, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-xl p-4
                                 flex flex-col sm:flex-row
                                 sm:items-center sm:justify-between gap-3"
                    >
                      <span className="text-sm">
                        {sub.title}
                      </span>

                      <select
                        value={sub.status}
                        disabled={sub.status === "completed"}
                        onChange={e =>
                          updateStatus(
                            service.serviceKey,
                            step.key,
                            index,
                            e.target.value
                          )
                        }
                        className="w-full sm:w-44 text-sm rounded-lg px-3 py-2
                                   bg-white shadow-md
                                   focus:outline-none focus:ring-2
                                   focus:ring-blue-500"
                      >
                        <option value="pending">
                          Pending
                        </option>
                        <option value="in_progress">
                          In Progress
                        </option>
                        <option value="completed">
                          Completed
                        </option>
                      </select>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
