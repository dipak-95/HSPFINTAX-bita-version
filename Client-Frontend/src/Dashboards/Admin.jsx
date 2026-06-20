import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  UserPlus,
  LogOut,
  Menu,
  X,
  Phone
} from "lucide-react";
import {
  Link,
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Admin() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  /* ================= ACTIVE HELPERS ================= */
  const isExact = (path) => location.pathname === path;
  const isStartsWith = (path) => location.pathname.startsWith(path);

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
      <aside className="hidden md:flex md:flex-col w-64 min-h-screen bg-slate-900 text-white fixed left-0 top-0 z-40">
        <SidebarContent
          logout={logout}
          isExact={isExact}
          isStartsWith={isStartsWith}
        />
      </aside>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 w-64 min-h-screen bg-slate-900 text-white z-40 md:hidden"
          >
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
              <span className="font-semibold text-lg">
                HPS <span className="text-blue-400">Fintax</span>
              </span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <SidebarContent
              logout={logout}
              close={() => setOpen(false)}
              isExact={isExact}
              isStartsWith={isStartsWith}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64 min-w-0">

        {/* TOPBAR */}
        <div className="h-16 bg-white shadow sticky top-0 z-20 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded hover:bg-slate-200"
            >
              <Menu />
            </button>
            <h1 className="text-lg font-semibold text-slate-800">
              Hardik's Panel
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">Hardik</p>
              <p className="text-xs text-slate-500">
                admin@hpsfintax.com
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              H
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <main className="p-4 sm:p-6 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR CONTENT ================= */

const SidebarContent = ({
  isExact,
  isStartsWith,
  logout,
  close
}) => (
  <>
    <div className="h-16 flex items-center justify-center border-b border-slate-700 max-sm:hidden">
      <span className="text-[22px] font-semibold tracking-wide">
        HPS <span className="text-blue-400">Fintax</span>
      </span>
    </div>

    <nav className="mt-6 space-y-1 px-4">

      {/* DASHBOARD */}
      <MenuItem
        icon={<Home size={18} />}
        label="Dashboard"
        to="/admin"
        active={isExact("/admin")}
        close={close}
      />

      <p className="px-4 mt-4 mb-2 text-xs text-slate-400 uppercase">
        Employee Management
      </p>

      <MenuItem
        icon={<UserPlus size={18} />}
        label="Create Employee"
        to="/admin/create-employee"
        active={isExact("/admin/create-employee")}
        close={close}
      />

      <MenuItem
        icon={<Users size={18} />}
        label="Employees"
        to="/admin/employee"
        active={isStartsWith("/admin/employee")}
        close={close}
      />

      <MenuItem
        icon={<Users size={18} />}
        label="Employee Work"
        to="/admin/employee-work"
        active={isStartsWith("/admin/employee-work")}
        close={close}
      />

      <p className="px-4 mt-4 mb-2 text-xs text-slate-400 uppercase">
        Client Management
      </p>

      <MenuItem
        icon={<UserPlus size={18} />}
        label="Create Client"
        to="/admin/create-client"
        active={isExact("/admin/create-client")}
        close={close}
      />

      <MenuItem
        icon={<Users size={18} />}
        label="Client Requests"
        to="/admin/client-requests"
        active={isStartsWith("/admin/client-requests")}
        close={close}
      />

      <MenuItem
        icon={<Users size={18} />}
        label="Clients"
        to="/admin/clients"
        active={isStartsWith("/admin/clients")}
        close={close}
      />

       <MenuItem
        icon={<Phone size={18} />}
        label="ContactEnquiry"
        to="/admin/contact"
        active={isStartsWith("/admin/contact")}
        close={close}
      />
    </nav>

    <button
      onClick={logout}
      className="absolute bottom-6 left-4 right-4 flex items-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  </>
);

/* ================= MENU ITEM ================= */

const MenuItem = ({ icon, label, to, active, close }) => (
  <Link
    to={to}
    onClick={close}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
      ${active ? "bg-slate-800 text-white" : "hover:bg-slate-800 text-slate-200"}
    `}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);
