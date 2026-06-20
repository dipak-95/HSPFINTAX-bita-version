import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  User,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function EmployeeWork() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployeeWork();
  }, []);

  const fetchEmployeeWork = async () => {
    try {
      const res = await axios.get(
        window.API_BASE_URL + "/auth/employee-work",
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token")
          }
        }
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
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
    <div className="max-w-6xl mx-auto space-y-6 px-3 sm:px-0">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-blue-700">
          Employee Work Report
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Track employee activity and workflow updates
        </p>
      </div>

      {data.length === 0 ? (
        <p className="text-slate-500">
          No employee work found.
        </p>
      ) : (
        <div className=" max-w-6xl mx-auto space-y-6 px-0">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white rounded-xl p-4 max-sm:p-4
                         shadow-sm hover:shadow-md transition"
            >
              {/* STATUS — ALWAYS TOP RIGHT */}
              <div
                className={`absolute top-4 right-4
                  inline-flex items-center gap-1 px-3 py-1 rounded-full
                  text-xs font-medium
                  ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "in_progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
              >
                {item.status === "completed" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <Clock size={14} />
                )}
                {item.status.replace("_", " ")}
              </div>

              {/* MAIN CONTENT (RIGHT PADDING TO AVOID OVERLAP) */}
              <div className="space-y-1 pr-25">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <User size={16} className="text-blue-600" />
                  {item.clientName}
                </div>

                <p className="text-sm text-slate-600 leading-snug">
                  {item.stepTitle} →{" "}
                  <span className="font-medium text-slate-700">
                    {item.subStepTitle}
                  </span>
                </p>
              </div>

              {/* META */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                {/* EMPLOYEE */}
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-blue-600 font-medium">
                    Employee:
                  </span>
                  <span className="font-medium text-slate-700">
                    {item.employee.name}
                  </span>
                  <span className="text-slate-500">
                    ({item.employee.email})
                  </span>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock size={14} />
                  {new Date(item.updatedAt).toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
