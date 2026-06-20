import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  UserPlus,
  Key,
  LogOut,
  Menu,
  X
} from "lucide-react";
import {
  Link,
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";

export default function Employee() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role") || "employee";
  const name=localStorage.getItem("name")
  const email = localStorage.getItem("email") || "";
  const mustChangePassword =
    localStorage.getItem("mustChangePassword") === "true";

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* ================= MOBILE OVERLAY ================= */}
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

      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <aside className="hidden md:flex md:flex-col w-64 min-h-screen
                        bg-slate-900 text-white fixed left-0 top-0 z-40">
        <SidebarContent
          isActive={isActive}
          logout={logout}
        />
      </aside>

      {/* ================= SIDEBAR (MOBILE) ================= */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 w-64 min-h-screen
                       bg-slate-900 text-white z-40 md:hidden"
          >
            {/* MOBILE HEADER */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700 md:hidden">
              <span
                className="text-[22px] font-semibold tracking-wide text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HPS <span className="text-blue-400">Fintax</span>
              </span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <SidebarContent
              isActive={isActive}
              logout={logout}
              close={() => setOpen(false)}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64">

        {/* ================= TOPBAR ================= */}
        <div className="h-16 bg-white shadow sticky top-0 z-20
                        flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded hover:bg-slate-200"
            >
              <Menu />
            </button>
            <h1 className="text-lg font-semibold">
              {name}'s <span>Panel</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold capitalize">
                {name}
              </p>
              <p className="text-xs text-slate-500">
                {email}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white
                            flex items-center justify-center font-semibold">
              {email.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <main className="p-4 sm:p-6">
          {mustChangePassword && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-yellow-100 text-yellow-800"
            >
              ⚠️ Temporary password in use.
              <Link
                to="/change-password"
                className="ml-2 underline text-blue-600"
              >
                Change password
              </Link>
            </motion.div>
          )}

          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR CONTENT ================= */

const SidebarContent = ({ isActive, logout, close }) => (
  <>
    {/* DESKTOP BRAND ONLY */}
    <div className="h-16 hidden md:flex items-center justify-center border-b border-slate-700">
      <span
        className="text-[22px] font-semibold tracking-wide text-white"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        HPS <span className="text-blue-400">Fintax</span>
      </span>
    </div>

    <nav className="mt-6 space-y-1 px-4">
      <MenuItem
        icon={<Home size={18} />}
        label="Dashboard"
        to="/employee"
        active={isActive("/employee")}
        close={close}
      />

      <p className="px-4 mt-4 mb-2 text-xs text-slate-400 uppercase">
        Client Management
      </p>

      <MenuItem
        icon={<UserPlus size={18} />}
        label="Create Client"
        to="/employee/create-client"
        active={isActive("/employee/create-client")}
        close={close}
      />

      <MenuItem
        icon={<Users size={18} />}
        label="My Clients"
        to="/employee/clients"
        active={isActive("/employee/clients")}
        close={close}
      />

      <p className="px-4 mt-4 mb-2 text-xs text-slate-400 uppercase">
        Account
      </p>

      <MenuItem
        icon={<Key size={18} />}
        label="Change Password"
        to="/change-password"
        active={isActive("/change-password")}
        close={close}
      />
    </nav>

    <button
      onClick={logout}
      className="absolute bottom-6 left-4 right-4 flex items-center gap-3
                 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
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
      ${active ? "bg-slate-800" : "hover:bg-slate-800"}`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);
