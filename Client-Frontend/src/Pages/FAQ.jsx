// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FAQ() {
//   const [open, setOpen] = useState(null);

//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* HEADER */}
// <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">

//   {/* ===== soft background glow ===== */}
//   <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
//   <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />

//   {/* ===== floating questions (background only) ===== */}
//   <div className="absolute inset-0 pointer-events-none">

//     {[
//       "ITR Filing?",
//       "Audit Process?",
//       "Loan Documents?",
//       "Subsidy Claim?",
//       "GST?",
//       "Fees Structure?",
//       "Processing Time?",
//       "Eligibility?",
//       "Renewal?",
//     ].map((q, i) => (
//       <motion.div
//         key={i}
//         className="
//           absolute
//           px-5 py-2
//           rounded-[5px]
//           bg-white/5
//           text-xs
//           text-white/50
//           backdrop-blur-md
//         "
//         style={{
//           top: `${15 + (i % 5) * 15}%`,
//           left: `${10 + (i * 13) % 80}%`,
//         }}
//         animate={{
//           y: [0, -55, 0],
//         }}
//         transition={{
//           duration: 14 + i * 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         {q}
//       </motion.div>
//     ))}

//   </div>

//   {/* ===== CONTENT ===== */}
//   <div className="relative z-10 max-w-7xl mx-auto px-6
//                 py-20 sm:py-24 md:py-28 lg:py-32
//                 text-center">

//     <motion.h1
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-4xl max-sm:text-[27px] md:text-5xl font-bold mb-6"
//     >
//       Frequently Asked Questions
//     </motion.h1>

//     <motion.p
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       className="text-slate-200 max-w-2xl mx-auto text-base"
//     >
//       Clear answers to common questions related to income tax,
//       audits, loans, subsidies and documentation.
//     </motion.p>

//   </div>
// </section>






//       {/* FAQ */}
//       <section className="py-16 max-sm:py-12 px-4">
//         <div className="max-w-4xl mx-auto space-y-4">

//           {faqData.map((item, i) => {
//             const isOpen = open === i;

//             return (
//               <div
//                 key={i}
//                 className={`bg-white rounded-xl shadow-sm transition
//                 ${isOpen ? "ring-2 ring-blue-600" : ""}`}
//               >
//                 {/* QUESTION */}
//                 <button
//                   onClick={() => setOpen(isOpen ? null : i)}
//                   className="w-full flex justify-between items-center px-6 py-5 text-left"
//                 >
//                   <span className="text-base md:text-lg font-semibold text-slate-800">
//                     {item.question}
//                   </span>

//                   <motion.span
//                     animate={{ rotate: isOpen ? 180 : 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="text-blue-600 text-xl"
//                   >
//                     ▼
//                   </motion.span>
//                 </button>

//                 {/* ANSWER */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.35 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100">
//                         {item.answer}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}

//         </div>
//       </section>
//     </div>
//   );
// }

// /* ================= DATA ================= */

// const faqData = [
//   {
//     question: "Who is required to get Income Tax Audit?",
//     answer:
//       "Any business or professional whose turnover exceeds the prescribed limits under Section 44AB of the Income Tax Act is required to get a tax audit done.",
//   },
//   {
//     question: "What is the tax audit turnover limit?",
//     answer:
//       "The tax audit limit is ₹1 crore for business and ₹50 lakhs for professionals. In specified digital transaction cases, the business limit may extend to ₹10 crore.",
//   },
//   {
//     question: "What documents are required for tax audit?",
//     answer:
//       "Books of accounts, bank statements, GST returns, invoices, purchase and sales registers and previous audit reports are required.",
//   },
//   {
//     question: "Do you handle income tax notices?",
//     answer:
//       "Yes, we provide end-to-end support for handling income tax notices, replies, rectifications and compliance submissions.",
//   },
//   {
//     question: "Do you provide loan and subsidy services?",
//     answer:
//       "Yes, we assist with bank loan documentation, CC/OD renewal, project reports and government subsidy claim processing.",
//   },
// ];
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Sparkles, Star, CheckCircle2, ArrowRight, Zap,
  HelpCircle, MessageCircle, PhoneCall
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

const floatingQuestions = [
  "ITR Filing?", "Audit Process?", "Loan Documents?",
  "Subsidy Claim?", "GST?", "Fees Structure?",
  "Processing Time?", "Eligibility?", "Renewal?",
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
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
      `}</style>

      {/* ══════════════════════════════════════
          1. HERO — DARK (#0f0a1e)
      ══════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0f0a1e]">
        <Orbs dark />
        <DotGrid dark />
        <GlowDivider />

        {/* Floating question pills */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingQuestions.map((q, i) => (
            <motion.div key={i}
              className="absolute px-4 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20
                         text-xs text-violet-300/60 backdrop-blur-sm font-medium"
              style={{ top: `${15 + (i % 5) * 14}%`, left: `${8 + (i * 11) % 82}%` }}
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 14 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
            >
              {q}
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
            Help Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            className="playfair text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white
                       leading-[1.12] mb-6 max-w-3xl mx-auto"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Questions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Clear answers to common questions related to income tax,
            audits, loans, subsidies and documentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {["Tax Audit", "ITR Filing", "Bank Loans", "Govt Subsidy"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 size={13} className="text-violet-400" />{t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. FAQ ITEMS — LIGHT (#f5f3ff)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark={false} />
        <DotGrid dark={false} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading dark={false} badge="Got Questions?" title="All You Need to Know"
            sub="Find quick answers to the most common questions we receive" />

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. CONTACT NUDGE — DARK (#13102b)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#13102b] relative overflow-hidden">
        <GlowDivider />
        <Orbs dark />
        <DotGrid dark />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading dark badge="Still Confused?" title="Didn't Find Your Answer?"
            sub="Our experts are ready to help you with any specific questions" />

          <div className="grid sm:grid-cols-3 gap-6">
            {contactOptions.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 0 0 1px #7c3aed66, 0 20px 40px rgba(124,58,237,0.2)" }}
                className="group relative text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 hover:border-violet-500/30
                           transition-all duration-300 cursor-pointer"
                onClick={handleclick}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl
                             bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20
                             border border-violet-400/20 flex items-center justify-center">
                  <item.icon size={24} className="text-violet-300" />
                </motion.div>
                <h3 className="font-bold text-white text-[15px] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-violet-700
                                group-hover:bg-violet-400 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CTA — LIGHT (#f5f3ff)
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
              <Zap size={11} /> Talk to an Expert
            </span>

            <h2 className="playfair text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-5 leading-tight">
              Still Have{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
                Questions?
              </span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Can't find what you're looking for? Our consultants are happy to
              answer any specific tax, audit, loan or subsidy queries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(124,58,237,0.35)" }}
                whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="relative px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600
                           text-white font-bold rounded-2xl shadow-lg shadow-violet-300/40 overflow-hidden
                           flex items-center justify-center gap-2 text-[15px]"
              >
                <span className="absolute inset-0 shimmer-dark" />
                <span className="relative">Ask a Question</span>
                <motion.span className="relative" animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleclick}
                className="px-10 py-4 border-2 border-slate-300 text-slate-700 font-semibold
                           rounded-2xl hover:text-violet-700 hover:bg-violet-50
                           hover:border-violet-400 transition-all text-[15px]">
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ═══ FAQ ITEM ═══ */
function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className={`rounded-2xl overflow-hidden border transition-all duration-300
        ${isOpen
          ? "bg-white border-violet-300 shadow-lg shadow-violet-100"
          : "bg-white border-slate-100 shadow-sm hover:border-violet-200 hover:shadow-md"
        }`}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none group"
      >
        {/* Number badge */}
        <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold
          transition-all duration-300
          ${isOpen
            ? "bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-200"
            : "bg-violet-50 text-violet-500 group-hover:bg-violet-100"
          }`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={`flex-1 text-[15px] md:text-base font-semibold transition-colors duration-200
          ${isOpen ? "text-violet-700" : "text-slate-800 group-hover:text-violet-700"}`}>
          {item.question}
        </span>

        {/* Arrow icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
            ${isOpen ? "bg-violet-600 text-white" : "bg-violet-50 text-violet-500 group-hover:bg-violet-100"}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6 pt-1 border-t border-violet-100"
            >
              {/* Left accent bar */}
              <div className="flex gap-4">
                <div className="w-0.5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 self-stretch shrink-0" />
                <p className="text-slate-600 leading-relaxed text-[15px]">{item.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══ DATA ═══ */
const contactOptions = [
  {
    icon: MessageCircle,
    title: "Chat With Us",
    desc: "Send us a message and get a reply within 24 hours",
  },
  {
    icon: PhoneCall,
    title: "Call Our Experts",
    desc: "Speak directly with our financial consultants",
  },
  {
    icon: HelpCircle,
    title: "Submit a Query",
    desc: "Fill our contact form for detailed assistance",
  },
];

const faqData = [
  {
    question: "Who is required to get Income Tax Audit?",
    answer:
      "Any business or professional whose turnover exceeds the prescribed limits under Section 44AB of the Income Tax Act is required to get a tax audit done.",
  },
  {
    question: "What is the tax audit turnover limit?",
    answer:
      "The tax audit limit is ₹1 crore for business and ₹50 lakhs for professionals. In specified digital transaction cases, the business limit may extend to ₹10 crore.",
  },
  {
    question: "What documents are required for tax audit?",
    answer:
      "Books of accounts, bank statements, GST returns, invoices, purchase and sales registers and previous audit reports are required.",
  },
  {
    question: "Do you handle income tax notices?",
    answer:
      "Yes, we provide end-to-end support for handling income tax notices, replies, rectifications and compliance submissions.",
  },
  {
    question: "Do you provide loan and subsidy services?",
    answer:
      "Yes, we assist with bank loan documentation, CC/OD renewal, project reports and government subsidy claim processing.",
  },
  {
    question: "How long does ITR filing take?",
    answer:
      "ITR filing typically takes 1–3 working days after receiving all required documents and details from the client.",
  },
  {
    question: "Is GST registration mandatory for all businesses?",
    answer:
      "GST registration is mandatory for businesses with turnover above ₹40 lakhs (goods) or ₹20 lakhs (services). Certain categories require mandatory registration regardless of turnover.",
  },
];