import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

/* REGISTER CHART.JS */
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

/* ================= STAT CARD ================= */
const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-sm text-slate-500">{title}</p>
    <h3 className="text-2xl font-bold text-slate-800 mt-2">
      {value}
    </h3>
  </div>
);

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalClients: 0,
    monthlyClients: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          window.API_BASE_URL + "/dashboard/stats",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        );
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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

  /* ================= CHART DATA ================= */
  const chartData = {
    labels: stats.monthlyClients.map(item => item.month),
    datasets: [
      {
        label: "Clients",
        data: stats.monthlyClients.map(item => item.count),
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
        pointRadius: 5
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 }
      }
    }
  };

  return (
    <div className="space-y-10">

      {/* WELCOME */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-1">
          Welcome to HPS FINTAX Admin Panel 👋
        </h2>
        <p className="text-sm text-slate-600">
          Manage employees, clients, loans and financial services securely.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <StatCard
          title="Total Employees"
          value={stats.totalEmployees}
        />
        <StatCard
          title="Total Clients"
          value={stats.totalClients}
        />
      </div>

      {/* CHART */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Monthly Client Growth
        </h2>

        {stats.monthlyClients.length > 0 ? (
          <div className="h-[320px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        ) : (
          <p className="text-sm text-slate-500 text-center py-20">
            No chart data available
          </p>
        )}
      </div>
    </div>
  );
}
