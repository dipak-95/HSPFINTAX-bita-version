import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";

export default function ClientServices({ workflow }) {
  const { serviceKey } = useParams();

  // Find selected service from workflow passed by Client.jsx
  const service = workflow.find(w => w.key === serviceKey);

  if (!service) {
    return (
      <div className="p-6 bg-white rounded-xl shadow">
        <p className="text-red-600 font-medium">Service not found</p>
        <Link to="/client" className="text-blue-600 underline mt-2 inline-block">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <Link
          to="/client"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      {/* SERVICE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700
                   rounded-xl p-6 text-white shadow"
      >
        <h2 className="text-xl font-semibold">{service.title}</h2>
        <p className="text-sm text-blue-100 mt-1">
          Track progress of each step below
        </p>
      </motion.div>

      {/* MAIN STATUS */}
      <div className="flex gap-3">
        <StatusBadge status={service.status} />
      </div>

      {/* SUB STEPS */}
      <div className="space-y-3">
        {service.subSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow p-4
                       flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-slate-800">
                {index + 1}. {step.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Status: {step.status.replace("_", " ")}
              </p>
            </div>

            <SubStepStatus status={step.status} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================= STATUS COMPONENTS ================= */

const StatusBadge = ({ status }) => {
  const map = {
    completed: "bg-green-100 text-green-700",
    in_progress: "bg-blue-100 text-blue-700",
    pending: "bg-slate-200 text-slate-700"
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-medium ${map[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
};

const SubStepStatus = ({ status }) => {
  if (status === "completed") {
    return (
      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
        <CheckCircle size={16} />
        Completed
      </span>
    );
  }

  if (status === "in_progress") {
    return (
      <span className="flex items-center gap-1 text-blue-600 text-sm font-medium">
        <Clock size={16} />
        In Progress
      </span>
    );
  }

  return (
    <span className="text-slate-500 text-sm font-medium">
      Pending
    </span>
  );
};
