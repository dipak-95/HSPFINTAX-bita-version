import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FileText,
  Key,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

export default function Client() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  /* ================= AUTH GUARD ================= */
  useEffect(() => {
    if (!token || role !== "client") {
      localStorage.clear();
      navigate("/");
    }
  }, [token, role, navigate]);

  /* ================= FETCH CLIENT PANEL ================= */
  useEffect(() => {
    const fetchPanel = async () => {
      try {
        const res = await axios.get(
          window.API_BASE_URL + "/client/client-panel",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setServices(res.data.services || []);
      } catch (err) {
        localStorage.clear();
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchPanel();
  }, [token, navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loading) {
    return <p className="p-6">Loading panel...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR DESKTOP */}
      <aside className="hidden md:flex md:flex-col w-64 min-h-screen
                        bg-gradient-to-b from-blue-800 to-slate-900
                        text-white fixed left-0 top-0 z-40">
        <SidebarHeader />
        <Sidebar services={services} logout={logout} />
      </aside>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            className="fixed left-0 top-0 w-64 min-h-screen
                       bg-gradient-to-b from-blue-800 to-slate-900
                       text-white z-40 md:hidden"
          >
            <SidebarHeader close={() => setOpen(false)} />
            <Sidebar
              services={services}
              logout={logout}
              close={() => setOpen(false)}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64">

        {/* TOPBAR */}
        <div className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded hover:bg-slate-200"
            >
              <Menu />
            </button>
            <h1 className="text-lg font-semibold">
              {name}'s Panel
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-slate-500">{email}</p>
            </div>

            <div className="w-9 h-9 rounded-full bg-blue-700 text-white
                            flex items-center justify-center font-semibold">
              {email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* ROUTED CONTENT */}
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR ================= */

const Sidebar = ({ services, logout, close }) => (
  <>
    <nav className="mt-6 space-y-1 px-4">

      {/* DASHBOARD (IMPORTANT: end=true) */}
      <MenuItem
        icon={<Home size={18} />}
        label="Dashboard"
        to="/client"
        end
        close={close}
      />

      {services.map(service => (
        <div key={service.serviceKey}>
          <p className="px-4 mt-4 mb-2 text-xs text-white/60 uppercase">
            {service.serviceName}
          </p>

          {service.workflow.map(step => (
            <MenuItem
              key={`${service.serviceKey}-${step.key}`}
              icon={<FileText size={18} />}
              label={step.title}
              to={`/client/service/${service.serviceKey}/step/${step.key}`}
              close={close}
            />
          ))}
        </div>
      ))}

      <p className="px-4 mt-4 mb-2 text-xs text-white/60 uppercase">
        Account
      </p>

      <MenuItem
        icon={<Key size={18} />}
        label="Change Password"
        to="/change-password"
        close={close}
      />
    </nav>

    <button
      onClick={logout}
      className="absolute bottom-6 left-4 right-4 flex items-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
    >
      <LogOut size={18} />
      Logout
    </button>
  </>
);


/* ================= MENU ITEM (ACTIVE) ================= */

const MenuItem = ({ icon, label, to, close, end = false }) => (
  <NavLink
    to={to}
    end={end}
    onClick={close}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition
       ${
         isActive
           ? "bg-white/20 text-white font-medium"
           : "text-white/80 hover:bg-white/10 hover:text-white"
       }`
    }
  >
    {icon}
    <span className="text-sm">{label}</span>
  </NavLink>
);

const SidebarHeader = ({ close }) => (
  <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
    <span className="text-[23px] font-bold tracking-wide ml-8">
      HPS <span className="text-blue-300">Fintax</span>
    </span>
    {close && (
      <button onClick={close} className="md:hidden">
        <X />
      </button>
    )}
  </div>
);
