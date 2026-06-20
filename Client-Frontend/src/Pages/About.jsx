// import { motion } from "framer-motion";
// import {
//   Target,
//   Eye,
//   Building2,
//   Factory,
//   Store,
//   Users,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// /* ================= HERO TEXT ================= */

// const title = "About Our Consultancy";

// const subtitle =
//   "Building trust through transparency, compliance and professional financial expertise.";

// /* ================= COMPONENT ================= */

// export default function About() {

//   const navigate=useNavigate()

//   const handleclick=()=>{
//     navigate("/contact")
//   }
//   return (
//     <div className="bg-white text-slate-800">

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">

//         {/* background glow */}
//         <div className="absolute -top-32 -left-32 w-[500px] h-[500px]  bg-blue-500/20 rounded-full blur-[140px]" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />

//         {/* floating keywords */}
//         <div className="absolute inset-0 pointer-events-none">
//           {["Trust", "Compliance", "Loans", "Audit", "Subsidy", "Tax"].map(
//             (q, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute px-5 py-2 rounded-[5px] bg-white/5 text-xs text-white/50 backdrop-blur-md"
//                 style={{
//                   top: `${15 + (i % 4) * 18}%`,
//                   left: `${10 + (i * 15) % 80}%`,
//                 }}
//                 animate={{ y: [0, -55, 0] }}
//                 transition={{
//                   duration: 16 + i * 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {q}
//               </motion.div>
//             )
//           )}
//         </div>

//         {/* hero content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6
//                 py-20 max-sm:py-22 md:py-28 lg:py-32
//                 text-center">

//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl max-sm:text-[27px] md:text-5xl font-bold mb-6"
//           >
//             {title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-200 max-sm:mt-[-5px] max-w-2xl mx-auto"
//           >
//             {subtitle}
//           </motion.p>
//         </div>
//       </section>

//       {/* ================= OUR STORY ================= */}
//       <section className="py-18 max-sm:py-10">
//   <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

//     {/* IMAGE — FIRST ON MOBILE */}
//     <motion.div
//       className="order-1 md:order-2 relative overflow-hidden rounded-2xl shadow-xl group
//                  ring-1 ring-transparent
//                  hover:ring-2 hover:ring-blue-500/80 transition"
//     >
//       <motion.img
//         src="/about.jpg"
//         alt="Our Story"
//         className="w-full h-full object-cover rounded-2xl
//                    transition-all duration-500
//                    group-hover:scale-110
//                    group-hover:blur-[2px]"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

//       <div
//         className="absolute inset-0 flex flex-col items-center justify-center text-center px-6
//                    opacity-0 translate-y-6
//                    group-hover:opacity-100 group-hover:translate-y-0
//                    transition-all duration-500"
//       >
//         <h3 className="text-blue-500 text-2xl font-bold mb-2">
//           Our Story
//         </h3>
//         <p className="text-blue-100 text-sm max-w-sm">
//           From a small advisory practice to a trusted financial
//           consultancy built on integrity and expertise.
//         </p>
//       </div>
//     </motion.div>

//     {/* CONTENT — SECOND ON MOBILE */}
//     <motion.div
//       className="order-2 md:order-1"
//       initial={{ opacity: 0, x: -40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl font-bold mb-6 max-sm:mt-[-20px] text-blue-600">
//         Our Story
//       </h2>

//       <p className="text-slate-600 mb-4 leading-relaxed">
//         Our consultancy was founded with a clear objective — to simplify
//         complex financial processes and make compliance accessible for
//         businesses of all sizes.
//       </p>

//       <p className="text-slate-600 mb-4 leading-relaxed">
//         What started as a small advisory practice has grown into a
//         full-service financial consultancy serving individuals, MSMEs,
//         startups and corporate clients.
//       </p>

//       <p className="text-slate-600 leading-relaxed">
//         Today, we are trusted for our professional ethics, transparent
//         workflow and long-term client relationships.
//       </p>
//     </motion.div>

//   </div>
// </section>


//       {/* ================= VISION & MISSION ================= */}
//       <section className="bg-slate-50 py-18 max-sm:py-12">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
//           {visionMission.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15 }}
//               viewport={{ once: true }}
//               className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
//             >
//               <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center">
//                 <item.icon />
//               </div>

//               <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//               <p className="text-slate-600 leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= INDUSTRIES ================= */}
//       <section className="bg-slate-50 py-8 max-sm:py-10">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-16">Industries We Serve</h2>

//           <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 gap-10">
//             {industries.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white p-7 rounded-2xl shadow hover:shadow-xl"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
//                   <item.icon />
//                 </div>
//                 <p className="font-medium">{item.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
// {/* ================= ABOUT PAGE CTA ================= */}
// <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-700 overflow-hidden">

//   {/* Decorative blur */}
//   <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
//   <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

//     <motion.h2
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
//     >
//       Trusted Financial Advisors You Can Rely On
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 }}
//       viewport={{ once: true }}
//       className="text-slate-200 max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed"
//     >
//       With years of professional experience, we help individuals, startups,
//       and businesses stay compliant, financially secure, and growth-ready
//       through transparent advisory and end-to-end support.
//     </motion.p>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       viewport={{ once: true }}
//       className="flex flex-col sm:flex-row justify-center gap-4"
//     >
//       <button onClick={handleclick} className="px-9 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow hover:shadow-xl transition">
//         Know More About Us
//       </button>

//       <button onClick={handleclick} className="px-9 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition">
//         Talk to Our Advisor
//       </button>
//     </motion.div>

//   </div>
// </section>

//     </div>
//   );
// }

// /* ================= DATA ================= */

// const visionMission = [
//   {
//     title: "Our Vision",
//     desc:
//       "To become a trusted financial advisory partner for businesses across India through reliable and ethical consultancy.",
//     icon: Eye,
//   },
//   {
//     title: "Our Mission",
//     desc:
//       "To simplify taxation, compliance and funding processes using structured workflows and professional expertise.",
//     icon: Target,
//   },
// ];

// const industries = [
//   { name: "Manufacturing", icon: Factory },
//   { name: "Retail & Trading", icon: Store },
//   { name: "Startups", icon: Users },
//   { name: "Corporate Firms", icon: Building2 },
// ];
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target, Eye, Building2, Factory, Store, Users,
  Sparkles, ArrowRight, Zap, Star, CheckCircle2, Award
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

/* ─── Card variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const floatingKeywords = ["Trust", "Compliance", "Loans", "Audit", "Subsidy", "Tax"];

export default function About() {
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
              style={{
                top:  `${18 + (i % 4) * 17}%`,
                left: `${8  + (i * 14) % 82}%`,
              }}
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
            About Our Consultancy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            className="playfair text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white
                       leading-[1.12] mb-6 max-w-3xl mx-auto"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Trust
            </span>{" "}
            Through Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Building trust through transparency, compliance and professional financial expertise.
          </motion.p>

          {/* Trust chips */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {["Trusted Since 2014", "1500+ Clients", "100% Transparent"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 size={13} className="text-violet-400" />{t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. OUR STORY — LIGHT (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-violet-200 to-fuchsia-100 rounded-3xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-violet-100">
              <img src="/about.jpg" alt="Our Story"
                className="w-full h-[340px] md:h-[420px] object-cover
                           group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b69]/70 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6
                              opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-500">
                <h3 className="text-white font-bold text-2xl mb-2 playfair">Our Story</h3>
                <p className="text-violet-200 text-sm max-w-xs">
                  From a small advisory practice to a trusted financial
                  consultancy built on integrity and expertise.
                </p>
              </div>
            </div>

            {/* floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white shadow-lg rounded-2xl px-4 py-2.5
                         border border-violet-200 flex items-center gap-2">
              <Award size={16} className="text-violet-500" />
              <span className="text-sm font-semibold text-slate-700">Since 2014</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 md:order-1"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-600 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-5">
              <Sparkles size={11} /> Our Story
            </span>

            <h2 className="playfair text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
              A Journey Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Trust & Integrity
              </span>
            </h2>

            {[
              "Our consultancy was founded with a clear objective — to simplify complex financial processes and make compliance accessible for businesses of all sizes.",
              "What started as a small advisory practice has grown into a full-service financial consultancy serving individuals, MSMEs, startups and corporate clients.",
              "Today, we are trusted for our professional ethics, transparent workflow and long-term client relationships.",
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.12 }}
                className="text-slate-500 mb-4 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. VISION & MISSION — DARK (#13102b)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#13102b] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading dark badge="Our Purpose" title="Vision & Mission"
            sub="The principles that guide everything we do" />

          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                className="card-glow-dark group relative bg-white/5 backdrop-blur-sm p-10 rounded-3xl
                           border border-white/10 hover:bg-white/10 hover:border-violet-500/30
                           transition-all duration-300"
              >
                {/* icon */}
                <motion.div
                  whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20
                             border border-violet-400/20 flex items-center justify-center"
                >
                  <item.icon size={26} className="text-violet-300" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white playfair">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>

                {/* corner dot */}
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-violet-700
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading dark={false} badge="Who We Help" title="Industries We Serve"
            sub="Comprehensive consultancy across diverse sectors" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {industries.map((item, i) => (
              <motion.div key={i} custom={i} variants={cardVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -7 }}
                className="card-glow-light group bg-white p-7 rounded-3xl border border-violet-100
                           shadow-sm hover:border-violet-300 text-center transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl
                             bg-gradient-to-br from-violet-100 to-fuchsia-100
                             border border-violet-200 flex items-center justify-center"
                >
                  <item.icon size={24} className="text-violet-600" />
                </motion.div>
                <p className="font-bold text-slate-800 text-[15px]">{item.name}</p>

                {/* hover underline */}
                <div className="mt-3 h-0.5 w-0 group-hover:w-10 mx-auto
                                bg-gradient-to-r from-violet-500 to-fuchsia-500
                                rounded-full transition-all duration-400" />
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
        <div className="absolute bottom-0 right-0  w-80 h-80 rounded-full bg-white/5 border border-white/10" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                             text-violet-200 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
              <Zap size={11} /> Work With Us
            </span>

            <h2 className="playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Trusted Financial Advisors{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
                You Can Rely On
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              With years of professional experience, we help individuals, startups,
              and businesses stay compliant, financially secure, and growth-ready
              through transparent advisory and end-to-end support.
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
                <span className="relative">Know More About Us</span>
                <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="px-10 py-4 border-2 border-slate-700 text-slate-300 font-semibold
                           rounded-2xl hover:border-violet-500 hover:text-violet-300
                           hover:bg-violet-500/10 transition-all text-[15px]"
              >
                Talk to Our Advisor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ═══ DATA ═══ */
const visionMission = [
  {
    title: "Our Vision",
    desc: "To become a trusted financial advisory partner for businesses across India through reliable and ethical consultancy.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    desc: "To simplify taxation, compliance and funding processes using structured workflows and professional expertise.",
    icon: Target,
  },
];

const industries = [
  { name: "Manufacturing",   icon: Factory   },
  { name: "Retail & Trading",icon: Store     },
  { name: "Startups",        icon: Users     },
  { name: "Corporate Firms", icon: Building2 },
];