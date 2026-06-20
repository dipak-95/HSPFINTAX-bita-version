// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa6";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   FileText,
//   ShieldCheck,
//   Landmark,
//   CreditCard,
//   BadgeHelp,
//   Home,
//   Info,
//   Briefcase,
//   HelpCircle,
  
// } from "lucide-react";
// import { ScrollToTopButton } from "./ScrollToTopButton";

// export default function Footer() {

//   const whatsappMessage = encodeURIComponent(
//     "Hello, I am interested in your Services. Please share details."
//   );

//   return (
//     <footer className="bg-slate-100 text-slate-700 border-t border-slate-200">

//       {/* ================= MAIN ================= */}
//       <div className="max-w-6xl mx-auto px-6 py-14">

//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">

//           {/* ================= BRAND ================= */}
//           <div>
//             <img
//               src="/logo1.png"
//               alt="logo"
//               className="h-11 mb-4"
//             />

//             <p className="text-sm leading-relaxed text-slate-600 max-w-xs">
//               Professional Income Tax Audit, GST, Loan and Government Subsidy
//               consultancy services across India.
//             </p>
//           </div>

//           {/* ================= SERVICES ================= */}
//           <div>
//             <h4 className="text-slate-900 font-semibold mb-4 text-lg">
//               Services
//             </h4>

//             <ul className="space-y-2 text-sm">

//               <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
//                 <FileText size={16} />
//                 Income Tax Filing
//               </li>

//               <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
//                 <ShieldCheck size={16} />
//                 Income Tax Audit
//               </li>

//               <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
//                 <BadgeHelp size={16} />
//                 GST Compliance
//               </li>

//               <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
//                 <CreditCard size={16} />
//                 Bank Loan & CC / OD
//               </li>

//               <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
//                 <Landmark size={16} />
//                 Government Subsidy
//               </li>

//             </ul>
//           </div>

//        {/* ================= QUICK LINKS ================= */}
// <div>
//   <h4 className="text-slate-900 font-semibold mb-4 text-lg">
//     Quick Links
//   </h4>

//   <ul className="space-y-2 text-sm">

//     <li>
//       <Link
//         to="/"
//         className="flex items-center gap-2 hover:text-blue-600 transition"
//       >
//         <Home size={16} />
//         Home
//       </Link>
//     </li>

//     <li>
//       <Link
//         to="/about"
//         className="flex items-center gap-2 hover:text-blue-600 transition"
//       >
//         <Info size={16} />
//         About Us
//       </Link>
//     </li>

//     <li>
//       <Link
//         to="/service"
//         className="flex items-center gap-2 hover:text-blue-600 transition"
//       >
//         <Briefcase size={16} />
//         Services
//       </Link>
//     </li>

//     <li>
//       <Link
//         to="/faq"
//         className="flex items-center gap-2 hover:text-blue-600 transition"
//       >
//         <HelpCircle size={16} />
//         FAQ
//       </Link>
//     </li>

//     <li>
//       <Link
//         to="/contact"
//         className="flex items-center gap-2 hover:text-blue-600 transition"
//       >
//         <Phone size={16} />
//         Contact
//       </Link>
//     </li>

//   </ul>
// </div>


//           {/* ================= CONTACT ================= */}
//           <div>
//             <h4 className="text-slate-900 font-semibold mb-4 text-lg">
//               Contact Us
//             </h4>

//             <div className="space-y-3 text-sm text-slate-600">

//               <p className="flex items-center gap-2">
//                 <MapPin size={16} className="text-blue-600" />
//                 Ahmedabad, Gujarat – India
//               </p>

//               <p className="flex items-center gap-2">
//                 <Mail size={16} className="text-blue-600" />
//                 support@taxauditpro.com
//               </p>

//               <p className="flex items-center gap-2">
//                 <Phone size={16} className="text-blue-600" />
//                 +91 98765 43210
//               </p>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-600 bg-slate-100">
//         © {new Date().getFullYear()} TaxAuditPro. All rights reserved.
//       </div>

//       {/* ================= SCROLL TOP ================= */}
//       <ScrollToTopButton />

//       {/* ================= WHATSAPP ================= */}
//       <motion.a
//         href={`https://wa.me/919979922797?text=${whatsappMessage}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 left-6 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg overflow-hidden flex items-center gap-2"
//         whileHover={{ scale: 1.08 }}
//       >
//         {/* shine */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
//           initial={{ x: "-120%" }}
//           animate={{ x: "120%" }}
//           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
//         />

//         <FaWhatsapp className="text-xl relative z-10" />

//         <span className="hidden sm:block text-sm font-semibold relative z-10">
//           Discuss on WhatsApp
//         </span>
//       </motion.a>

//     </footer>
//   );
// }
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import {
  MapPin, Mail, Phone, FileText, ShieldCheck, Landmark,
  CreditCard, BadgeHelp, Home, Info, Briefcase, HelpCircle, Zap
} from "lucide-react";
import { ScrollToTopButton } from "./ScrollToTopButton";

const linkVariants = {
  hidden:  { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.07 },
  }),
};

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I am interested in your Services. Please share details."
  );

  const services = [
    { icon: FileText,   label: "Income Tax Filing"    },
    { icon: ShieldCheck,label: "Income Tax Audit"     },
    { icon: BadgeHelp,  label: "GST Compliance"       },
    { icon: CreditCard, label: "Bank Loan & CC / OD"  },
    { icon: Landmark,   label: "Government Subsidy"   },
  ];

  const quickLinks = [
    { icon: Home,       label: "Home",     to: "/"        },
    { icon: Info,       label: "About Us", to: "/about"   },
    { icon: Briefcase,  label: "Services", to: "/service" },
    { icon: HelpCircle, label: "FAQ",      to: "/faq"     },
    { icon: Phone,      label: "Contact",  to: "/contact" },
  ];

  return (
    <footer className="bg-[#0f0a1e] text-slate-400 border-t border-violet-900/40 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full
                      bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-56 h-56 rounded-full
                      bg-fuchsia-600/8 blur-3xl pointer-events-none" />

      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

      {/* ── TOP GLOW LINE ── */}
      <div className="relative h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-700" />
        <motion.span
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ═══════════ MAIN GRID ═══════════ */}
      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">

          {/* ── BRAND ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo + icon */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500
                              flex items-center justify-center shadow-lg shadow-violet-900/40 flex-shrink-0">
                <Zap size={16} className="text-white" />
              </div>
              <img
                src="/logo1.png"
                alt="logo"
                className="h-10 w-auto object-contain brightness-200"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Professional Income Tax Audit, GST, Loan and Government Subsidy
              consultancy services across India.
            </p>

            {/* Subtle divider */}
            <div className="mt-6 h-px bg-gradient-to-r from-violet-800/60 to-transparent" />
          </motion.div>

          {/* ── SERVICES ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-5 text-[15px] tracking-wide
                           flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 text-slate-500
                             hover:text-violet-300 transition-colors duration-200 cursor-pointer group"
                >
                  <item.icon size={15} className="text-violet-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── QUICK LINKS ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-5 text-[15px] tracking-wide
                           flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-2.5 text-slate-500
                               hover:text-violet-300 transition-colors duration-200 group"
                  >
                    <item.icon size={15} className="text-violet-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── CONTACT ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-5 text-[15px] tracking-wide
                           flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm">
              {[
                { icon: MapPin, text: "Ahmedabad, Gujarat – India" },
                { icon: Mail,   text: "support@taxauditpro.com"    },
                { icon: Phone,  text: "+91 98765 43210"            },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 text-slate-500 hover:text-violet-300
                             transition-colors duration-200 group cursor-default"
                >
                  <item.icon size={15} className="text-violet-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
                  {item.text}
                </motion.p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ═══════════ BOTTOM BAR ═══════════ */}
      <div className="relative border-t border-violet-900/40 py-4 text-center text-sm text-slate-600 bg-[#080614]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} TaxAuditPro. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-xs text-violet-800">
            <Zap size={11} className="text-violet-700" />
            Powered by HPS Consultancy
          </span>
        </div>
      </div>

      <ScrollToTopButton />

      {/* ═══════════ WHATSAPP BUTTON ═══════════ */}
      <motion.a
        href={`https://wa.me/919979922797?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, boxShadow: "0 8px 28px rgba(34,197,94,0.4)" }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white
                   px-4 py-3 rounded-full shadow-lg shadow-green-900/30
                   overflow-hidden flex items-center gap-2"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
        <FaWhatsapp className="text-xl relative z-10" />
        <span className="hidden sm:block text-sm font-semibold relative z-10">
          Discuss on WhatsApp
        </span>
      </motion.a>

    </footer>
  );
}