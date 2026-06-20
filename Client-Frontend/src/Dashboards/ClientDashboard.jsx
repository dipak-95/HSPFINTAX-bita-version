import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Mail, Phone, Clock } from "lucide-react";

/* ================= STATUS BADGE ================= */
const StatusBadge = ({ status }) => {
  const map = {
    pending: { text: "Pending", color: "bg-yellow-100 text-yellow-700", emoji: "🟡" },
    in_progress: { text: "In Progress", color: "bg-blue-100 text-blue-700", emoji: "🔵" },
    documents_required: { text: "Documents Required", color: "bg-red-100 text-red-700", emoji: "🔴" },
    submitted: { text: "Submitted", color: "bg-purple-100 text-purple-700", emoji: "📤" },
    completed: { text: "Completed", color: "bg-green-100 text-green-700", emoji: "🟢" }
  };

  const s = map[status] || map.pending;

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${s.color}`}>
      {s.emoji} {s.text}
    </span>
  );
};

export default function ClientDashboard() {
  const { serviceKey, stepKey } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    /* ================= FETCH DATA ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // 🔐 AUTH CHECK
    if (!token || role !== "client") {
      navigate("/login");
      return;
    }

    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          window.API_BASE_URL + "/dashboard/client",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setData(res.data);
      } catch (err) {
        console.error("CLIENT DASHBOARD ERROR:", err);
        navigate("/login");
      } finally {
        setLoading(false); // ✅ THIS WAS MISSING
      }
    };

    fetchDashboard();
  }, [navigate]);
  if (!data) {
    return <p className="text-center mt-20 text-slate-500">Loading...</p>;
  }

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


  const service = data.service;
  const workflow = service.workflow || [];
  const activeStep = workflow.find(s => s.key === stepKey);
  const name = data.name || "Client";

  /* ================================================= */
  /* 🔥 STEP PAGE */
  /* ================================================= */
  if (serviceKey && stepKey && activeStep) {
    return (
      <div className="space-y-6">

        {/* STEP HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-xl font-semibold">
            {service.serviceName} → {activeStep.title}
          </h2>
          <p className="text-sm text-blue-100">
            Track progress of each step
          </p>
        </div>

        {/* SUB STEPS */}
        <div className="space-y-4">
          {activeStep.subSteps.map(sub => (
            <div
              key={sub._id || sub.key}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex justify-between items-center"
            >
              <p className="font-medium">{sub.title}</p>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    sub.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : sub.status === "in_progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-200 text-slate-600"
                  }`}
              >
                {sub.status}
              </span>
            </div>
          ))}
        </div>

        {/* NEED HELP */}
        <NeedHelp />
      </div>
    );
  }

  /* ================================================= */
  /* 🔥 DASHBOARD VIEW */
  /* ================================================= */
  return (
    <div className="space-y-8">

      {/* WELCOME */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-xl font-semibold">
          Welcome, {name} 👋
        </h2>
        <p className="text-sm text-blue-100">
          Select a service to view progress and updates
        </p>
      </div>

      {/* SERVICE INFO */}
      <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="text-xs text-slate-500 mb-1">Service</p>
          <p className="font-semibold text-lg">{service.serviceName}</p>
        </div>

        <div>
          <p className="text-xs text-slate-500 mb-1">Started On</p>
          <p className="font-semibold">
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500 mb-1">Current Status</p>
          <StatusBadge status={data.status} />
        </div>
      </div>

      {/* PROGRESS */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Progress</h3>

        <ul className="space-y-4">
          {workflow.map((step, index) => (
            <li
              key={`${service.serviceKey}-${step.key}`}
              onClick={() =>
                navigate(`/client/service/${service.serviceKey}/step/${step.key}`)
              }
              className="flex items-center justify-between p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer bg-white"
            >
              <span className="font-medium">
                {index + 1}. {step.title}
              </span>
              <span className="text-xs capitalize text-slate-500">
                {step.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* NEED HELP */}
      <NeedHelp />
    </div>
  );
}

/* ================= NEED HELP ================= */

const NeedHelp = () => (
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100">
    
    {/* Gradient Accent */}
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

    <div className="p-6 sm:p-7">
      <h3 className="text-lg font-semibold text-slate-800 mb-1">
        Need Assistance?
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Our support team is here to help you with any questions.
      </p>

      <div className="space-y-4 text-sm">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Mail size={16} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Email Support</p>
            <p className="font-medium text-slate-800">
              support@hpsfintax.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <Phone size={16} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Phone Support</p>
            <p className="font-medium text-slate-800">
              +91 98765 43210
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
            <Clock size={16} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Working Hours</p>
            <p className="font-medium text-slate-800">
              Mon – Sat · 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="mailto:support@hpsfintax.com"
          className="flex-1 text-center rounded-lg bg-blue-600 text-white py-2.5 text-sm font-medium hover:bg-blue-700 transition"
        >
          Email Support
        </a>

        <a
          href="tel:+919876543210"
          className="flex-1 text-center rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          Call Now
        </a>
      </div>
    </div>
  </div>
);
