import { useEffect, useState } from "react";
import axios from "axios";

/* ================= STAT CARD ================= */
const StatCard = ({ title, value, note }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-sm text-slate-500">{title}</p>
    <h3 className="text-3xl font-bold text-slate-800 mt-2">
      {value}
    </h3>
    {note && (
      <p className="text-xs text-slate-500 mt-2">
        {note}
      </p>
    )}
  </div>
);

/* ================= INFO CARD ================= */
const InfoCard = () => (
  <div className="bg-white rounded-xl shadow p-5">
    <p className="text-sm text-slate-500 mb-2">
      Work Overview
    </p>
    <ul className="text-sm text-slate-700 space-y-2">
      <li>• Review clients assigned by admin</li>
      <li>• Update service progress after each step</li>
      <li>• Coordinate with admin for approvals</li>
    </ul>
  </div>
);

export default function EmployeeDashboard() {
  const [totalClients, setTotalClients] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DASHBOARD DATA ================= */
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          window.API_BASE_URL + "/dashboard/employee",
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("token")
            }
          }
        );

        setTotalClients(res.data.totalClients || 0);
      } catch (err) {
        console.error("Employee dashboard fetch error");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-slate-500">
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
      </p>
    );
  }

  return (
    <div className="space-y-8">

      {/* ================= WELCOME ================= */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome to Employee Panel 👋
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          This panel allows you to view and assist with all client
          records created by the admin. You are responsible for
          documentation support, verification, and service processing.
        </p>
      </div>

      {/* ================= STATS + INFO ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <StatCard
          title="Total Clients"
          value={totalClients}
          note="Clients available in the system"
        />

        <InfoCard />
      </div>

      {/* ================= RESPONSIBILITIES ================= */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-3">
          Your Responsibilities
        </h3>

        <ul className="list-disc ml-5 text-sm text-slate-600 space-y-2">
          <li>Assist clients with required documentation</li>
          <li>Verify client details and uploaded files</li>
          <li>Coordinate with admin for approvals</li>
          <li>Update service progress when assigned</li>
          <li>Maintain confidentiality of client data</li>
        </ul>
      </div>

      {/* ================= INFO NOTE ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="text-sm text-blue-800">
          ℹ️ All clients shown here are created by the admin.
          Your role is to support verification and service execution
          based on assigned work.
        </p>
      </div>

    </div>
  );
}
