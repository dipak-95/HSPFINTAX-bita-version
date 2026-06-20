// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Home,
//   Info,
//   Briefcase,
//   HelpCircle,
//   Phone,
//   LogIn
// } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "About Us", path: "/about", icon: Info },
//     { name: "Services", path: "/service", icon: Briefcase },
//     { name: "FAQ", path: "/faq", icon: HelpCircle },
//     { name: "Contact", path: "/contact", icon: Phone }
//   ];

//   return (
//     <>
//       {/* ================= STICKY NAVBAR ================= */}
//       <nav
//         className={`fixed top-0 w-full z-50 bg-white transition-all duration-500
//         ${scrolled
//             ? "translate-y-0 opacity-100 shadow-lg"
//             : "-translate-y-full opacity-0"
//           }`}
//       >
//         <NavbarUI
//           navItems={navItems}
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />

//         <div className="relative h-[2px] overflow-hidden">
//           <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-emerald-200 to-blue-600 animate-[slide_4s_linear_infinite]" />
//         </div>
//       </nav>

//       {/* ================= NORMAL NAVBAR ================= */}
//       <nav className="bg-white border-b">
//         <NavbarUI
//           navItems={navItems}
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />

//         <div className="relative h-[2px] overflow-hidden">
//           <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-300 to-blue-500 animate-[slide_3s_linear_infinite]" />
//         </div>
//       </nav>

//       <style>{`
//         @keyframes slide {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </>
//   );
// }

// /* ===================================================== */

// function NavbarUI({
//   navItems,
//   menuOpen,
//   setMenuOpen
// }) {
//   return (
//     <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

//       {/* LOGO */}
//       <div className="flex items-center">
//         <img
//           src="/logo1.png"
//           alt="HPS Logo"
//           className="h-10 md:h-14 lg:h-16 w-auto object-contain"
//         />
//       </div>

//       {/* ================= DESKTOP MENU ================= */}
//       <div className="hidden md:flex items-center gap-2 lg:gap-3">
//         {navItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `relative group px-4 lg:px-5 py-2.5 text-[15px] lg:text-[16px]
//                  font-semibold transition rounded-lg flex items-center gap-2
//         ${isActive
//                   ? "text-blue-700 bg-blue-50 border border-blue-300"
//                   : "text-slate-700 hover:text-blue-700"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   {/* hover bg */}
//                   <span className="absolute inset-0 bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 rounded-lg transition" />

//                   {/* hover border */}
//                   <span className="absolute inset-0 border border-blue-400/40 rounded-lg opacity-0 group-hover:opacity-100 transition" />

//                   {/* content */}
//                   <span className="relative z-10 flex items-center gap-2">
//                     <Icon size={18} />
//                     {item.name}
//                   </span>
//                 </>
//               )}
//             </NavLink>
//           );
//         })}
//       </div>

//       {/* ================= LOGIN BUTTON ================= */}
//       <div className="hidden md:flex">
//         <button
//           onClick={() => {
//             window.location.href = "http://localhost:5173/";
//           }}
//           className="
//             relative overflow-hidden
//             px-6 py-2.5 text-[15px]
//             bg-blue-600 text-white
//             rounded-lg font-semibold
//             shadow transition-all duration-300
//             flex items-center gap-2

//             before:absolute before:inset-0
//             before:bg-blue-800
//             before:translate-x-[-100%]
//             before:transition-transform before:duration-300
//             hover:before:translate-x-0

//             hover:scale-[1.04]
//           "
//         >
//           <span className="relative z-10 flex items-center gap-2">
//             <LogIn size={18} />
//             Login
//           </span>
//         </button>
//       </div>

//       {/* ================= MOBILE MENU BUTTON ================= */}
//       <button
//         onClick={() => setMenuOpen(true)}
//         className="md:hidden p-2 rounded-lg hover:bg-blue-50"
//       >
//         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center">

//           <div className="w-[85%] max-w-sm bg-white rounded-2xl shadow-2xl p-6 animate-[menuIn_0.35s_ease-out]">

//             <div className="flex justify-between items-center mb-6">
//               <h2 className="font-bold text-blue-700 text-xl">Menu</h2>
//               <button onClick={() => setMenuOpen(false)}>
//                 ✕
//               </button>
//             </div>

//             <div className="flex flex-col gap-4 text-center">
//               {navItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <NavLink
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `flex items-center justify-center gap-2 py-3 text-lg font-medium rounded-xl transition
//                       ${isActive
//                         ? "text-blue-700 bg-blue-50 border border-blue-300"
//                         : "text-slate-800 hover:bg-slate-100"
//                       }`
//                     }
//                   >
//                     <Icon size={20} />
//                     {item.name}
//                   </NavLink>
//                 );
//               })}
//             </div>

//             <button
//               onClick={() => {
//                 window.location.href = "http://localhost:5173/";
//               }}
//               className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold
//                          flex items-center justify-center gap-2 hover:bg-blue-700 transition"
//             >
//               <LogIn size={20} />
//               Login
//             </button>
//           </div>

//           <style>{`
//             @keyframes menuIn {
//               0% {
//                 opacity: 0;
//                 transform: scale(0.9) translateY(25px);
//               }
//               100% {
//                 opacity: 1;
//                 transform: scale(1) translateY(0);
//               }
//             }
//           `}</style>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Info, Briefcase, HelpCircle, Phone, LogIn, Menu, X, Zap
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/service", icon: Briefcase },
  { name: "FAQ", path: "/faq", icon: HelpCircle },
  { name: "Contact", path: "/contact", icon: Phone },
];

/* ── Variants ── */
const navSlide = {
  hidden: { y: -72, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { y: -72, opacity: 0, transition: { duration: 0.28, ease: "easeIn" } },
};

const logoVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut", delay: 0.1 } },
};

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.18 + i * 0.07 },
  }),
};

const btnVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.6 } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { x: "100%", transition: { duration: 0.28, ease: "easeIn" } },
};

const mobileItemVariants = {
  hidden: { x: 36, opacity: 0 },
  visible: (i) => ({
    x: 0, opacity: 1,
    transition: { duration: 0.32, ease: "easeOut", delay: 0.08 + i * 0.07 },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @keyframes slideGlow {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%);  }
        }
        .nav-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.13) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: slideGlow 2.8s linear infinite;
        }
      `}</style>

      {/* ══════════ STICKY NAVBAR (on scroll) ══════════ */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            key="sticky"
            variants={navSlide}
            initial="hidden" animate="visible" exit="hidden"
            className="fixed top-0 left-0 right-0 z-50
                       bg-[#0f0a1e]/92 backdrop-blur-xl
                       border-b border-violet-900/50
                       shadow-lg shadow-violet-950/30"
          >
            <NavbarInner navItems={navItems} setMenuOpen={setMenuOpen} navigate={navigate} />
            <GlowLine />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ══════════ NORMAL NAVBAR ══════════ */}
      <nav className="relative bg-[#0f0a1e] border-b border-violet-900/40">
        <NavbarInner navItems={navItems} setMenuOpen={setMenuOpen} navigate={navigate} />
        <GlowLine />
      </nav>

      {/* ══════════ MOBILE DRAWER ══════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              variants={drawerVariants}
              initial="hidden" animate="visible" exit="exit"
              className="fixed top-0 right-0 bottom-0 z-[999] w-[78vw] max-w-sm
                         bg-[#13102b] border-l border-violet-800/40 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-violet-900/40">

                <span className="text-white font-semibold text-lg">
                  Menu
                </span>

                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition
               text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </motion.button>

              </div>

              {/* Drawer Nav Items */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.name} custom={i}
                      variants={mobileItemVariants} initial="hidden" animate="visible">
                      <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all
                          ${isActive
                            ? "bg-gradient-to-r from-violet-600/30 to-fuchsia-600/10 text-violet-300 border border-violet-500/30"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className={`p-1.5 rounded-lg transition-colors
                              ${isActive ? "bg-violet-500/20 text-violet-400" : "bg-white/5 text-slate-500"}`}>
                              <Icon size={16} />
                            </span>
                            {item.name}
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Login */}
              <div className="px-4 pb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                     navigate("/login");
                     setMenuOpen(false);
                  }}
                  className="relative w-full py-3.5 rounded-xl font-semibold text-white text-[15px]
             bg-gradient-to-r from-violet-600 to-purple-600 overflow-hidden
             flex items-center justify-center gap-2 shadow-lg shadow-violet-950/40"
                >
                  <LogIn size={18} />
                  Login to Portal
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Shared glow line ── */
function GlowLine() {
  return (
    <div className="relative h-[2px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700" />
      <span className="absolute inset-0 nav-shimmer" />
    </div>
  );
}

/* ── Shared Navbar Inner ── */
function NavbarInner({ navItems, setMenuOpen, navigate }) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">

      {/* LOGO */}
      <motion.div variants={logoVariants} initial="hidden" animate="visible"
        className="flex items-center gap-2.5">

        <img
          src="/logo1.png"
          alt="HPS Logo"
          className="h-12 md:h-14 lg:h-16 w-auto object-contain brightness-200"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </motion.div>

      {/* ── DESKTOP LINKS ── */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.name} custom={i} variants={itemVariants} initial="hidden" animate="visible">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative group px-4 lg:px-5 py-2.5 text-[14px] lg:text-[15px] font-semibold
                   rounded-xl flex items-center gap-2 transition-colors duration-200 overflow-hidden
                  ${isActive ? "text-violet-300" : "text-slate-400 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active sliding pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-xl
                                   bg-gradient-to-r from-violet-600/30 to-fuchsia-600/15
                                   border border-violet-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover bg */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-white/0
                                       group-hover:bg-white/[0.05] transition-colors duration-200" />
                    )}

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={15} className={
                        isActive
                          ? "text-violet-400"
                          : "text-slate-500 group-hover:text-slate-300 transition-colors"
                      } />
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </div>

      {/* ── LOGIN BUTTON ── */}
      <motion.div variants={btnVariants} initial="hidden" animate="visible"
        className="hidden md:flex items-center gap-3">
        {/* divider */}
        {/* <div className="w-px h-6 bg-violet-900" /> */}

        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(124,58,237,0.45)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/login")}
          className="relative px-5 py-2.5 rounded-xl text-[14px] font-semibold
                     bg-gradient-to-r from-violet-600 to-purple-600
                     text-white flex items-center gap-2 overflow-hidden
                     shadow-md shadow-violet-950/50"
        >
          <span className="absolute inset-0 nav-shimmer" />
          <LogIn size={16} className="relative" />
          <span className="relative">Login</span>
        </motion.button>
      </motion.div>

      {/* ── MOBILE HAMBURGER ── */}
      <motion.button
        whileTap={{ scale: 0.88 }}
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10
                   transition text-slate-300"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </motion.button>

      {/* inner bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
    </div>
  );
}