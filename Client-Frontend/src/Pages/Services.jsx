// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   FileText,
//   ShieldCheck,
//   Landmark,
//   Banknote,
//   Calculator,
//   Building2,
//   ClipboardCheck,
//   Briefcase,
//   CheckCircle2,
//   Factory,
//   Store,
//   Users,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// /* ================= HERO TEXT ================= */

// const title = "Our Professional Services";

// const subtitle =
//   "Comprehensive financial, taxation and compliance solutions designed to support individuals and growing businesses.";

// /* ================= COMPONENT ================= */

// export default function Services() {
//   const allServices = [...leftServices, ...rightServices];
//   const [openIndex, setOpenIndex] = useState(null);
//   const navigate=useNavigate()

//   const handleclick=()=>{
//     navigate("/contact")
//   }

//   return (
//     <div className="bg-white text-slate-800">

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">

//         <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />

//         <div className="absolute inset-0 pointer-events-none">
//           {["Income Tax", "Audit", "Loans", "Subsidy", "Accounting", "Compliance"].map(
//             (q, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute px-5 py-2 rounded-md bg-white/5 text-xs text-white/50 backdrop-blur-md"
//                 style={{
//                   top: `${15 + (i % 4) * 18}%`,
//                   left: `${10 + (i * 15) % 80}%`,
//                 }}
//                 animate={{ y: [0, -55, 0] }}
//                 transition={{ duration: 16 + i * 2, repeat: Infinity }}
//               >
//                 {q}
//               </motion.div>
//             )
//           )}
//         </div>

//        <div className="relative z-10 max-w-7xl mx-auto px-6
//                 py-20 sm:py-24 md:py-28 lg:py-32
//                 text-center">

//           <h1 className="text-4xl max-sm:text-[27px] md:text-5xl font-bold mb-6">{title}</h1>
//           <p className="text-slate-200 max-w-3xl mx-auto">{subtitle}</p>
//         </div>
//       </section>

//       {/* ================= SERVICE OVERVIEW ================= */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center max-sm:mb-10 mb-20">
//             <h2 className="text-3xl max-sm:text-[25px] md:text-4xl max-sm:mt-[-40px] font-bold mb-4">
//               Our Core Service Areas
//             </h2>
//             <p className="text-slate-600 max-w-3xl mx-auto">
//               Click on any service to explore detailed scope and inclusions.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {allServices.map((item, index) => (
//               <ServiceAccordion
//                 key={index}
//                 item={item}
//                 isOpen={openIndex === index}
//                 onToggle={() =>
//                   setOpenIndex(openIndex === index ? null : index)
//                 }
//               />
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-18 max-sm:py-10 bg-white">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-3xl max-sm:text-[24px] font-bold text-center mb-16">
//             Why Choose Our Services
//           </h2>

//           <div className="grid max-sm:mt-[-20px] md:grid-cols-4 gap-8">
//             {[
//               "Experienced professionals",
//               "100% compliance accuracy",
//               "Dedicated service manager",
//               "Clear pricing & transparency",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl"
//               >
//                 <CheckCircle2 className="text-blue-600 mb-4" />
//                 <p className="font-medium">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= INDUSTRIES ================= */}
//       <section className="py-12 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">

//           <h2 className="text-3xl max-sm:text-[24px] font-bold mb-16">
//             Industries We Support
//           </h2>

//           <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mt-[-20px] md:grid-cols-5 gap-10">
//             <Industry icon={Factory} name="Manufacturing" />
//             <Industry icon={Store} name="Retail & Trading" />
//             <Industry icon={Users} name="Startups" />
//             <Industry icon={Building2} name="Corporate" />
//             <Industry icon={Briefcase} name="Professionals" />
//           </div>
//         </div>
//       </section>
// {/* ================= SERVICES PAGE CTA ================= */}
// <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-700 via-blue-800 to-blue-900 overflow-hidden">

//   {/* Decorative blur */}
//   <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl" />
//   <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

//     <motion.h2
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
//     >
//       Need Expert Help With Tax, Loan or Subsidy?
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 }}
//       viewport={{ once: true }}
//       className="text-slate-200 max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed"
//     >
//       Our specialists ensure accurate documentation, faster processing and
//       complete compliance for Income Tax Returns, Audits, Bank Loans,
//       Accounting and Government Subsidy services.
//     </motion.p>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       viewport={{ once: true }}
//       className="flex flex-col sm:flex-row justify-center gap-4"
//     >
//       <button onClick={handleclick} className="px-9 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:shadow-xl transition">
//         Get Service Consultation
//       </button>

//       <button onClick={handleclick} className="px-9 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition">
//         View All Services
//       </button>
//     </motion.div>

//   </div>
// </section>

//     </div>
//   );
// }

// /* ================= ACCORDION ================= */

// function ServiceAccordion({ item, isOpen, onToggle }) {
//   return (
//    <motion.div
//   layout
//   transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
//   className="
//     bg-white
//     rounded-2xl
//     shadow-md
//     hover:shadow-xl
//     overflow-hidden
//     self-start
//   "
// >

//       <button
//         onClick={onToggle}
//         className="
//           w-full flex items-start gap-5 p-6 text-left
//           focus:outline-none focus:ring-0
//         "
//       >
//         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 
//                         text-white flex items-center justify-center shrink-0">
//           <item.icon size={26} />
//         </div>

//         <div className="flex-1">
//           <h3 className="font-semibold text-lg">{item.title}</h3>
//           <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
//         </div>

//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           className="text-blue-600 text-2xl font-medium mt-1"
//         >
//           {isOpen ? "−" : "+"}
//         </motion.span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35 }}
//             className="overflow-hidden"
//           >
//             <div className="px-6 pb-6">
//               <ul className="space-y-3 text-sm text-slate-700">
//                 {item.points.map((p, i) => (
//                   <li key={i} className="flex gap-3">
//                     <span className="text-emerald-600 mt-[2px]">✔</span>
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// /* ================= INDUSTRY CARD ================= */

// function Industry({ icon: Icon, name }) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition flex flex-col items-center"
//     >
//       <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center">
//         <Icon size={28} />
//       </div>
//       <p className="font-semibold">{name}</p>
//     </motion.div>
//   );
// }

// /* ================= DATA ================= */

// const leftServices = [
//   {
//     title: "Income Tax Return Filing",
//     desc: "Accurate ITR filing with statutory compliance.",
//     icon: FileText,
//     points: [
//       "Salary, business and capital gains returns",
//       "TDS reconciliation",
//       "Form 26AS verification",
//       "Final acknowledgement delivery",
//     ],
//   },
//   {
//     title: "Income Tax Audit",
//     desc: "Audit under section 44AB with documentation.",
//     icon: ShieldCheck,
//     points: [
//       "Form 3CA / 3CB / 3CD preparation",
//       "Audit report filing",
//       "Compliance verification",
//       "Department submission",
//     ],
//   },
// ];

// const rightServices = [
//   {
//     title: "Bank Loan Assistance",
//     desc: "Complete loan documentation support.",
//     icon: Banknote,
//     points: [
//       "Project & CMA reports",
//       "Bank coordination",
//       "Limit enhancement & renewal",
//       "Sanction assistance",
//     ],
//   },
//   {
//     title: "Government Subsidy",
//     desc: "End-to-end subsidy claim handling.",
//     icon: Landmark,
//     points: [
//       "DIC documentation",
//       "Plant & machinery valuation",
//       "Inspection coordination",
//       "Subsidy disbursement follow-up",
//     ],
//   },
// ];
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FileText, ShieldCheck, Landmark, Banknote, Calculator,
  Building2, ClipboardCheck, Briefcase, CheckCircle2,
  Factory, Store, Users, Sparkles, ArrowRight, Zap, Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Floating Orbs ─── */
function Orbs({ dark = true }) {
  const orbs = dark
    ? [
        { w: 400, h: 400, top: "-10%", left: "-8%",  from: "#7c3aed", to: "#4f46e5", op: 0.18, dur: 14 },
        { w: 300, h: 300, top: "55%",  left: "72%",  from: "#a855f7", to: "#7c3aed", op: 0.13, dur: 18 },
        { w: 220, h: 220, top: "28%",  left: "42%",  from: "#6d28d9", to: "#8b5cf6", op: 0.08, dur: 12 },
      ]
    : [
        { w: 360, h: 360, top: "-5%",  left: "-5%",  from: "#c4b5fd", to: "#ddd6fe", op: 0.55, dur: 14 },
        { w: 260, h: 260, top: "60%",  left: "68%",  from: "#e9d5ff", to: "#c4b5fd", op: 0.45, dur: 18 },
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

/* ─── Glow Divider ─── */
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
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const floatingKeywords = ["Income Tax", "Audit", "Loans", "Subsidy", "Accounting", "Compliance"];

export default function Services() {
  const allServices = [...leftServices, ...rightServices];
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const handleclick = () => navigate("/contact");

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
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .card-glow-dark:hover  { box-shadow: 0 0 0 1px #7c3aed55, 0 20px 48px rgba(124,58,237,0.22); }
        .card-glow-light:hover { box-shadow: 0 0 0 1px #7c3aed33, 0 20px 48px rgba(124,58,237,0.10); }
      `}</style>

      {/* ══════════════════════════════════════
          1. HERO — DARK (#0f0a1e)
      ══════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0f0a1e]">
        <Orbs dark />
        <DotGrid dark />
        <GlowDivider />

        {/* Floating keywords */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingKeywords.map((word, i) => (
            <motion.div key={i}
              className="absolute px-4 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20
                         text-xs text-violet-300/60 backdrop-blur-sm font-medium"
              style={{ top: `${18 + (i % 4) * 17}%`, left: `${8 + (i * 14) % 82}%` }}
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 16 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30
                       text-violet-300 text-xs font-semibold tracking-widest uppercase
                       px-4 py-2 rounded-full mb-7"
          >
            <Star size={11} className="fill-violet-400 text-violet-400" />
            Professional Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            className="playfair text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white
                       leading-[1.12] mb-6 max-w-3xl mx-auto"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Professional
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Comprehensive financial, taxation and compliance solutions designed to
            support individuals and growing businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {["Tax Filing", "Audit Support", "Loan Assistance", "Govt Subsidy"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 size={13} className="text-violet-400" />{t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. SERVICE OVERVIEW — LIGHT (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading dark={false} badge="What We Offer" title="Our Core Service Areas"
            sub="Click on any service to explore detailed scope and inclusions." />

          <div className="grid lg:grid-cols-2 gap-6">
            {allServices.map((item, index) => (
              <ServiceAccordion
                key={index}
                index={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                dark={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. WHY CHOOSE US — DARK (#13102b)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#13102b] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading dark badge="Why Us" title="Why Choose Our Services"
            sub="What sets us apart from the rest" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, boxShadow: "0 0 0 1px #7c3aed66, 0 20px 40px rgba(124,58,237,0.2)" }}
                className="relative group text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 hover:border-violet-500/30
                           transition-all duration-300"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl
                             bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20
                             border border-violet-400/20 flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-violet-300" />
                </motion.div>
                <p className="font-bold text-white text-[14px] leading-snug">{item}</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-violet-700
                                group-hover:bg-violet-400 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. INDUSTRIES — LIGHT (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading dark={false} badge="Who We Help" title="Industries We Support"
            sub="Serving diverse sectors with tailored financial solutions" />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {industries.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -7 }}
                className="group bg-white p-7 rounded-3xl border border-violet-100
                           shadow-sm hover:border-violet-300 text-center
                           transition-all duration-300 card-glow-light"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl
                             bg-gradient-to-br from-violet-100 to-fuchsia-100
                             border border-violet-200 flex items-center justify-center">
                  <item.icon size={24} className="text-violet-600" />
                </motion.div>
                <p className="font-bold text-slate-800 text-[14px]">{item.name}</p>
                <div className="mt-3 h-0.5 w-0 group-hover:w-10 mx-auto
                                bg-gradient-to-r from-violet-500 to-fuchsia-500
                                rounded-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CTA — DARK (violet gradient)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-violet-800 via-[#13102b] to-indigo-900 relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 border border-white/10" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-200 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
              <Zap size={11} /> Get Expert Help
            </span>

            <h2 className="playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Need Expert Help With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
                Tax, Loan or Subsidy?
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Our specialists ensure accurate documentation, faster processing and
              complete compliance for ITR, Audits, Bank Loans and Government Subsidy services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(124,58,237,0.45)" }}
                whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="relative px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600
                           text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-violet-950/50
                           flex items-center justify-center gap-2 text-[15px]"
              >
                <span className="absolute inset-0 shimmer-dark" />
                <span className="relative">Get Service Consultation</span>
                <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="px-10 py-4 border-2 border-slate-700 text-slate-300 font-semibold
                           rounded-2xl hover:border-violet-500 hover:text-violet-300
                           hover:bg-violet-500/10 transition-all text-[15px]">
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ═══ SERVICE ACCORDION ═══ */
function ServiceAccordion({ item, isOpen, onToggle, index, dark }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      layout
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
      className={`rounded-3xl overflow-hidden self-start border transition-all duration-300
        ${dark
          ? "bg-white/5 border-white/10 hover:border-violet-500/30 card-glow-dark"
          : "bg-white border-slate-100 hover:border-violet-200 shadow-sm card-glow-light"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 p-6 text-left focus:outline-none"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all
            ${dark
              ? "bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20 border border-violet-400/20"
              : "bg-gradient-to-br from-violet-50 to-purple-100 border border-violet-100"
            }`}
        >
          <item.icon size={24} className={dark ? "text-violet-300" : "text-violet-600"} />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-[16px] ${dark ? "text-white" : "text-slate-800"}`}>
            {item.title}
          </h3>
          <p className={`text-sm mt-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            {item.desc}
          </p>
        </div>

        {/* Toggle icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-lg font-bold
            transition-colors duration-200
            ${isOpen
              ? "bg-violet-600 text-white"
              : dark
                ? "bg-white/10 text-violet-300"
                : "bg-violet-50 text-violet-600"
            }`}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 border-t ${dark ? "border-white/10" : "border-violet-50"}`}>
              <ul className="space-y-3 pt-4">
                {item.points.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`flex gap-3 text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500
                                     flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-white" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══ DATA ═══ */
const whyChoose = [
  "Experienced professionals",
  "100% compliance accuracy",
  "Dedicated service manager",
  "Clear pricing & transparency",
];

const industries = [
  { name: "Manufacturing",   icon: Factory   },
  { name: "Retail & Trading",icon: Store     },
  { name: "Startups",        icon: Users     },
  { name: "Corporate",       icon: Building2 },
  { name: "Professionals",   icon: Briefcase },
];

const leftServices = [
  {
    title: "Income Tax Return Filing",
    desc: "Accurate ITR filing with statutory compliance.",
    icon: FileText,
    points: [
      "Salary, business and capital gains returns",
      "TDS reconciliation",
      "Form 26AS verification",
      "Final acknowledgement delivery",
    ],
  },
  {
    title: "Income Tax Audit",
    desc: "Audit under section 44AB with documentation.",
    icon: ShieldCheck,
    points: [
      "Form 3CA / 3CB / 3CD preparation",
      "Audit report filing",
      "Compliance verification",
      "Department submission",
    ],
  },
];

const rightServices = [
  {
    title: "Bank Loan Assistance",
    desc: "Complete loan documentation support.",
    icon: Banknote,
    points: [
      "Project & CMA reports",
      "Bank coordination",
      "Limit enhancement & renewal",
      "Sanction assistance",
    ],
  },
  {
    title: "Government Subsidy",
    desc: "End-to-end subsidy claim handling.",
    icon: Landmark,
    points: [
      "DIC documentation",
      "Plant & machinery valuation",
      "Inspection coordination",
      "Subsidy disbursement follow-up",
    ],
  },
];