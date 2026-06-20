// import { motion } from "framer-motion";
// import {
//   FileText,
//   ShieldCheck,
//   Banknote,
//   Landmark,
//   Calculator,
//   Building2,
//   Users,
//   BadgeCheck,
//   Timer,
//   CheckCircle2,
//   Award,
//   FileCheck2
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {

//   const navigate=useNavigate()

//   const handleclick=()=>{
//     navigate("/contact")
//   }

//   const stats = [
//     { num: "1500+", text: "ITR Filed", icon: FileCheck2 },
//     { num: "600+", text: "Loans Processed", icon: Banknote },
//     { num: "350+", text: "Subsidy Claims", icon: Landmark },
//     { num: "10+", text: "Years Experience", icon: Award }
//   ];

//   return (
//     <div className="w-full overflow-hidden bg-slate-50 text-slate-800">

//       {/* ================= HERO ================= */}
//       <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">

//           {/* IMAGE FIRST ON MOBILE */}
//           <motion.div
//             className="order-1 lg:order-2 relative overflow-hidden rounded-2xl shadow-xl"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.img
//               src="/home.jpg"
//               alt="Home"
//               className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-full object-cover rounded-2xl"
//               whileHover={{ scale: 1.12 }}
//               transition={{ duration: 0.6 }}
//             />
//           </motion.div>

//           {/* CONTENT */}
//           <motion.div
//             className="order-2 lg:order-1 text-center lg:text-left"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
//               Complete Income Tax, Loan & Subsidy Consulting Solutions
//             </h1>

//             <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-7">
//               Trusted financial consultancy providing tax, audit, banking and
//               government subsidy services with complete transparency.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button onClick={handleclick}  className="px-7 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:shadow-lg transition">
//                 Get Free Consultation
//               </button>

//               <button onClick={handleclick} className="px-7 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition">
//                 Contact Expert
//               </button>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//            {/* ================= ABOUT US ================= */}
//    <section className="py-18 max-sm:py-10 bg-white">
//   <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
// <motion.div
//   className="relative overflow-hidden rounded-2xl shadow-xl group
//              ring-1 ring-transparent
//              hover:ring-2 hover:ring-blue-500/80
//              transition"
// >

//   {/* IMAGE */}
//   <motion.img
//     src="/homeAbout.jpg"
//     alt="About"
//     className="w-full h-full object-cover rounded-2xl
//                transition-all duration-500
//                group-hover:scale-110
//                group-hover:blur-[2px]"
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//   />

//   {/* GRADIENT OVERLAY */}
//   <div className="
//     absolute inset-0
//     bg-gradient-to-t from-black/70 via-black/30 to-transparent
//     opacity-0 group-hover:opacity-100
//     transition duration-500
//   " />

//   {/* TEXT */}
//   <div className="
//     absolute inset-0 flex flex-col items-center justify-center text-center px-6
//     opacity-0 translate-y-6
//     group-hover:opacity-100 group-hover:translate-y-0
//     transition-all duration-500
//   ">
//     <h3 className="text-blue-500 text-2xl font-bold mb-2">
//       Trusted Financial Experts
//     </h3>

//     <p className="text-blue-100 text-sm max-w-sm">
//       Delivering professional tax, audit, loan and subsidy consulting services
//       with transparency and reliability.
//     </p>
//   </div>

// </motion.div>


//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl max-sm:text-2xl max-sm:text-center max-sm:mt-[-30px] font-bold mb-5 text-blue-600">
//         About Our Consultancy
//       </h2>

//       <p className="text-slate-600 mb-4 leading-relaxed">
//         We are a professional financial consultancy firm offering comprehensive
//         solutions in Income Tax, Audit, Bank Loans, Accounting and Government
//         Subsidy services. Our goal is to deliver accurate guidance, timely
//         execution and complete compliance support to individuals, startups,
//         SMEs and corporate clients.
//       </p>

//       <p className="text-slate-600 mb-4 leading-relaxed">
//         With years of hands-on industry experience, we work closely with banks,
//         financial institutions and government departments to ensure smooth
//         processing, transparent documentation and faster approvals for our
//         clients.
//       </p>

    

//       <div className="flex flex-wrap gap-6">
//         <div className="flex items-center gap-2 text-blue-700 font-medium">
//           <CheckCircle2 size={18} />
//           Trusted Advisors
//         </div>

//         <div className="flex items-center gap-2 text-blue-700 font-medium">
//           <CheckCircle2 size={18} />
//           Transparent Process
//         </div>

//         <div className="flex items-center gap-2 text-blue-700 font-medium">
//           <CheckCircle2 size={18} />
//           End-to-End Support
//         </div>

        
//       </div>
//     </motion.div>
//   </div>
// </section>

//       {/* ================= SERVICES ================= */}
//       <section className="py-16 md:py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">

//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               Our Professional Services
//             </h2>
//             <p className="text-slate-600 text-sm md:text-base">
//               Complete financial and compliance solutions
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white p-7 rounded-2xl shadow hover:shadow-2xl transition"
//               >
//                 <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white">
//                   <item.icon />
//                 </div>
//                 <h3 className="font-semibold mb-2">{item.title}</h3>
//                 <p className="text-slate-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//             {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
//             <p className="text-slate-600">
//               Professional expertise you can trust
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {whyChoose.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="bg-slate-50 p-7 rounded-2xl shadow hover:shadow-xl text-center"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
//                   <item.icon />
//                 </div>
//                 <p className="font-medium">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* ================= ACHIEVEMENTS ================= */}
//       <section className="py-16 md:py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">

//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               Our Achievements
//             </h2>
//             <p className="text-slate-600 text-sm md:text-base">
//               Numbers that reflect our experience and trust
//             </p>
//           </div>

//           <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 gap-6">
//             {stats.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white p-6 rounded-2xl shadow text-center"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white">
//                   <item.icon size={26} />
//                 </div>
//                 <div className="text-2xl font-bold mb-1">{item.num}</div>
//                 <div className="text-slate-600 text-sm">{item.text}</div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
// <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 overflow-hidden">

//   {/* glow circles */}
//   <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
//   <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

//     <motion.h2
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
//     >
//       Looking for Reliable Financial Support?
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 }}
//       viewport={{ once: true }}
//       className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base"
//     >
//       Get expert guidance for Income Tax, Audit, Bank Loan and Government
//       Subsidy services with complete transparency and fast processing.
//     </motion.p>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       viewport={{ once: true }}
//       className="flex flex-col sm:flex-row justify-center gap-4"
//     >
//       <button onClick={handleclick} className="px-9 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:shadow-xl transition">
//         Book Free Consultation
//       </button>

//       <button onClick={handleclick} className="px-9 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition">
//         Contact Expert
//       </button>
//     </motion.div>

//   </div>
// </section>


//     </div>
//   );
// }

// /* ================= DATA ================= */

// const services = [
//   { title: "Income Tax Return", desc: "Individual, firm and company ITR filing.", icon: FileText },
//   { title: "Income Tax Audit", desc: "Audit under section 44AB with full compliance.", icon: ShieldCheck },
//   { title: "Bank Loan Services", desc: "Fresh loans, CC/OD and renewals.", icon: Banknote },
//   { title: "Government Subsidy", desc: "DIC subsidy claims and inspections.", icon: Landmark },
//   { title: "Accounting Services", desc: "Bookkeeping, MIS and balance sheet.", icon: Calculator },
//   { title: "Compliance Management", desc: "Notices, inspections and support.", icon: Building2 }
// ];
// const whyChoose = [
//   { text: "10+ Years Experience", icon: Award },
//   { text: "Expert Professionals", icon: Users },
//   { text: "Fast Processing", icon: Timer },
//   { text: "100% Transparency", icon: BadgeCheck },
// ];
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FileText, ShieldCheck, Banknote, Landmark,
  Calculator, Building2, Users, BadgeCheck,
  Timer, CheckCircle2, Award, FileCheck2,
  ArrowRight, Sparkles, TrendingUp, Star, Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Animated Counter ─── */
function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""));
    let start = 0;
    const step = Math.ceil(num / 55);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 28);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Floating Orbs ─── */
function Orbs({ dark = true }) {
  const orbs = dark
    ? [
        { w: 420, h: 420, top: "-10%", left: "-8%",  from: "#7c3aed", to: "#4f46e5", op: 0.18, dur: 14 },
        { w: 300, h: 300, top: "55%",  left: "75%",  from: "#a855f7", to: "#7c3aed", op: 0.13, dur: 18 },
        { w: 220, h: 220, top: "30%",  left: "42%",  from: "#6d28d9", to: "#8b5cf6", op: 0.08, dur: 12 },
      ]
    : [
        { w: 360, h: 360, top: "-5%",  left: "-5%",  from: "#c4b5fd", to: "#ddd6fe", op: 0.55, dur: 14 },
        { w: 260, h: 260, top: "60%",  left: "70%",  from: "#e9d5ff", to: "#c4b5fd", op: 0.45, dur: 18 },
      ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o, i) => (
        <motion.div key={i}
          style={{ width: o.w, height: o.h, top: o.top, left: o.left,
                   background: `radial-gradient(circle, ${o.from}, ${o.to})`,
                   opacity: o.op, borderRadius: "50%", filter: "blur(80px)", position: "absolute" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 25, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
        />
      ))}
    </div>
  );
}

/* ─── Dot Grid ─── */
function DotGrid({ dark = true }) {
  return (
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, ${dark ? "#7c3aed22" : "#7c3aed14"} 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }} />
  );
}

/* ─── Section divider line ─── */
function GlowDivider() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px
                    bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
  );
}

/* ─── Section Heading ─── */
function SectionHeading({ badge, title, sub, dark = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14"
    >
      {badge && (
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
          px-3 py-1.5 rounded-full mb-4 border
          ${dark
            ? "text-violet-200 bg-white/10 border-violet-300/30"
            : "text-violet-600 bg-violet-50 border-violet-200"}`}>
          <Sparkles size={11} />{badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 leading-tight playfair
        ${dark ? "text-white" : "text-slate-800"}`}>{title}</h2>
      {sub && (
        <p className={`text-base max-w-xl mx-auto ${dark ? "text-violet-200" : "text-slate-500"}`}>{sub}</p>
      )}
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

export default function Home() {
  const navigate = useNavigate();
  const handleclick = () => navigate("/contact");
  const { scrollYProgress } = useScroll();
  const heroY       = useTransform(scrollYProgress, [0, 0.25], [0, -55]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.5]);

  const stats = [
    { num: "1500", suffix: "+", text: "ITR Filed",        icon: FileCheck2, color: "from-violet-500 to-purple-600"  },
    { num: "600",  suffix: "+", text: "Loans Processed",  icon: Banknote,   color: "from-purple-500 to-indigo-600"  },
    { num: "350",  suffix: "+", text: "Subsidy Claims",   icon: Landmark,   color: "from-fuchsia-500 to-violet-600" },
    { num: "10",   suffix: "+", text: "Years Experience", icon: Award,      color: "from-indigo-500 to-violet-700"  },
  ];

  return (
    <div className="w-full overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .shimmer-dark {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2.6s infinite;
        }
        .shimmer-light {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.30) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2.6s infinite;
        }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .card-glow-dark:hover  { box-shadow: 0 0 0 1px #7c3aed55, 0 20px 48px rgba(124,58,237,0.22); }
        .card-glow-light:hover { box-shadow: 0 0 0 1px #7c3aed33, 0 20px 48px rgba(124,58,237,0.10); }
      `}</style>

      {/* ══════════════════════════════════════
          1. HERO — DARK  (#0f0a1e)
      ══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0f0a1e]">
        <Orbs dark />
        <DotGrid dark />
        <GlowDivider />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20
                        grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Text */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30
                         text-violet-300 text-xs font-semibold tracking-widest uppercase
                         px-4 py-2 rounded-full mb-7">
              <Star size={11} className="fill-violet-400 text-violet-400" />
              Trusted Financial Consultancy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="playfair text-4xl sm:text-5xl md:text-[3.6rem] font-bold leading-[1.12] mb-6 text-white"
            >
              Complete Tax,{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Loan & Subsidy
                </span>
                <motion.span
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-violet-500/20 -z-10 origin-left rounded"
                />
              </span>{" "}Solutions
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Trusted financial consultancy providing tax, audit, banking and
              government subsidy services with complete transparency.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(139,92,246,0.45)" }}
                whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600
                           text-white font-semibold rounded-2xl overflow-hidden shadow-lg shadow-violet-900/50
                           flex items-center justify-center gap-2 text-[15px]">
                <span className="absolute inset-0 shimmer-dark" />
                <span className="relative">Get Free Consultation</span>
                <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="px-8 py-3.5 border-2 border-slate-700 text-slate-300 font-semibold
                           rounded-2xl hover:border-violet-500 hover:text-violet-300
                           hover:bg-violet-500/10 transition-all text-[15px]">
                Contact Expert
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
              className="flex flex-wrap items-center gap-5 mt-8 justify-center lg:justify-start">
              {["1500+ ITR Filed", "10+ Yrs Experience", "100% Transparent"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 size={13} className="text-violet-400" />{t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/25 to-purple-800/20 rounded-3xl blur-xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-violet-500/20">
              <motion.img src="/home.jpg" alt="Hero"
                className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[480px] object-cover"
                whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e]/50 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="absolute bottom-5 left-5 bg-[#1a1130]/90 backdrop-blur-md rounded-2xl px-4 py-3
                           shadow-xl border border-violet-500/25 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Clients Served</p>
                  <p className="text-lg font-bold text-white">2,450+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. ABOUT — LIGHT  (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-violet-200 to-purple-100 rounded-3xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-violet-100">
              <img src="/homeAbout.jpg" alt="About"
                className="w-full h-[340px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b69]/70 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100
                              translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Trusted Financial Experts</h3>
                  <p className="text-violet-200 text-sm">Transparency & reliability since 2014</p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-2.5
                         border border-violet-200 flex items-center gap-2">
              <Award size={16} className="text-violet-500" />
              <span className="text-sm font-semibold text-slate-700">10+ Yrs</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-600 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-5">
              <Sparkles size={11} /> About Our Firm
            </span>
            <h2 className="playfair text-3xl md:text-4xl font-bold mb-5 text-slate-800 leading-tight">
              Your Trusted Financial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Consultancy Partner
              </span>
            </h2>
            <p className="text-slate-500 mb-4 leading-relaxed">
              We are a professional financial consultancy firm offering comprehensive
              solutions in Income Tax, Audit, Bank Loans, Accounting and Government Subsidy services.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              With years of hands-on experience, we work closely with banks and
              government departments to ensure smooth processing and faster approvals.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Trusted Advisors",    icon: BadgeCheck   },
                { label: "Transparent Process", icon: ShieldCheck  },
                { label: "End-to-End Support",  icon: CheckCircle2 },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl
                             bg-white border border-violet-100 text-center shadow-sm">
                  <item.icon size={20} className="text-violet-600" />
                  <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES — DARK  (#13102b)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#13102b] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading dark badge="What We Do" title="Our Professional Services"
            sub="Complete financial and compliance solutions for individuals and businesses" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -7 }}
                className="card-glow-dark group bg-white/5 backdrop-blur-sm p-7 rounded-3xl
                           border border-white/10 hover:bg-white/10 hover:border-violet-500/30
                           transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20
                                border border-violet-400/20 flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-violet-300" />
                </div>
                <h3 className="font-bold text-white mb-2 text-[16px]">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-violet-400 text-xs font-semibold
                                 opacity-0 group-hover:opacity-100 translate-x-[-4px]
                                 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight size={13} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHY CHOOSE US — LIGHT  (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading dark={false} badge="Why Us" title="Why Choose Our Firm"
            sub="Professional expertise you can rely on every step of the way" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                className="card-glow-light relative group text-center p-8 rounded-3xl
                           bg-white border border-violet-100 shadow-sm
                           hover:border-violet-300 transition-all duration-300">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl
                             bg-gradient-to-br from-violet-100 to-fuchsia-100
                             border border-violet-200 flex items-center justify-center">
                  <item.icon size={26} className="text-violet-600" />
                </motion.div>
                <p className="font-bold text-slate-800 text-[15px]">{item.text}</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-violet-200
                                group-hover:bg-violet-500 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. STATS — DARK  (violet gradient)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-violet-800 via-[#13102b] to-indigo-900 relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 border border-white/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-200 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
              <TrendingUp size={11} /> Our Achievements
            </span>
            <h2 className="playfair text-3xl md:text-4xl font-bold text-white mb-2">Numbers That Speak for Us</h2>
            <p className="text-violet-300 text-base">Reflecting our experience and client trust</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-7 text-center
                           hover:bg-white/15 transition-all duration-300">
                <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color}
                                flex items-center justify-center shadow-lg`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  <CountUp target={item.num} suffix={item.suffix} />
                </div>
                <div className="text-violet-300 text-sm font-medium">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CTA — LIGHT  (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />
        <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-violet-200/50 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-700 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-6">
              <Zap size={11} /> Get Started Today
            </span>

            <h2 className="playfair text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-5 leading-tight">
              Looking for Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Financial Support?
              </span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get expert guidance for Income Tax, Audit, Bank Loan and Government Subsidy
              services with complete transparency and fast processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(124,58,237,0.35)" }}
                whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="relative px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600
                           text-white font-bold rounded-2xl shadow-lg shadow-violet-300/40 overflow-hidden
                           flex items-center justify-center gap-2 text-[15px]">
                <span className="absolute inset-0 shimmer-dark" />
                <span className="relative">Book Free Consultation</span>
                <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="px-10 py-4 border-2 border-slate-300 text-slate-700 font-semibold
                           rounded-2xl hover:text-violet-700 hover:bg-violet-50
                           hover:border-violet-400 transition-all text-[15px]">
                Contact Expert
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ═══ DATA ═══ */
const services = [
  { title: "Income Tax Return",     desc: "Individual, firm and company ITR filing with full accuracy.",       icon: FileText    },
  { title: "Income Tax Audit",      desc: "Audit under section 44AB with full compliance support.",            icon: ShieldCheck },
  { title: "Bank Loan Services",    desc: "Fresh loans, CC/OD facilities and timely renewals.",                icon: Banknote    },
  { title: "Government Subsidy",    desc: "DIC subsidy claims, inspections and documentation.",                icon: Landmark    },
  { title: "Accounting Services",   desc: "Bookkeeping, MIS reporting and balance sheet preparation.",         icon: Calculator  },
  { title: "Compliance Management", desc: "Notices, inspections, government compliance and advisory support.", icon: Building2   },
];

const whyChoose = [
  { text: "10+ Years Experience", icon: Award      },
  { text: "Expert Professionals", icon: Users      },
  { text: "Fast Processing",      icon: Timer      },
  { text: "100% Transparency",    icon: BadgeCheck },
];