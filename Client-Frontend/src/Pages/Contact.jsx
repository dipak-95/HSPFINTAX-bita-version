// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { motion } from "framer-motion";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // ================= HANDLE CHANGE =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ================= VALIDATION =================
//   const validate = () => {
//     let err = {};

//     if (!form.name.trim()) err.name = "Full name is required";

//     if (!form.email) {
//       err.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       err.email = "Invalid email format";
//     }

//     if (!form.mobile) {
//       err.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(form.mobile)) {
//       err.mobile = "Mobile number must be 10 digits";
//     }

//     if (!form.message.trim()) err.message = "Message is required";

//     return err;
//   };

//   // ================= SUBMIT =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length !== 0) {
//       toast.warning("Please fix form errors");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(window.API_BASE_URL + "/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success("Message sent successfully!");

//         setForm({
//           name: "",
//           email: "",
//           mobile: "",
//           message: "",
//         });

//         setErrors({});
//       } else {
//         toast.error("Submission failed");
//       }
//     } catch (error) {
//       toast.error("Server error. Please try again");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* ✅ Toast */}
//       <ToastContainer position="top-right" autoClose={3000} theme="light" />

//       <div className="bg-slate-50 min-h-screen">

//         {/* ================= HEADER ================= */}
//        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">

//       {/* ===== background glow ===== */}
//       <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />

//       {/* ===== floating contact keywords ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[
//           "Call Us",
//           "Email Support",
//           "Free Consultation",
//           "Office Visit",
//           "Quick Response",
//           "Expert Advice",
//         ].map((text, i) => (
//           <motion.div
//             key={i}
//             className="
//               absolute px-5 py-2
//               rounded-[5px]
//               bg-white/5
//               text-xs
//               text-white/50
//               backdrop-blur-md
//             "
//             style={{
//               top: `${18 + (i % 4) * 18}%`,
//               left: `${12 + (i * 16) % 80}%`,
//             }}
//             animate={{ y: [0, -55, 0] }}
//             transition={{
//               duration: 18 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             {text}
//           </motion.div>
//         ))}
//       </div>

//       {/* ===== CONTENT ===== */}
//        <div className="relative z-10 max-w-7xl mx-auto px-6
//                 py-20 sm:py-24 md:py-28 lg:py-32
//                 text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl max-sm:text-[27px] md:text-5xl font-bold mb-6"
//         >
//           Contact Us
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-slate-200 max-w-2xl mx-auto text-base"
//         >
//           Get in touch with our financial experts for personalized guidance
//           on taxation, audit, loans and government subsidy services.
//         </motion.p>

//       </div>
//     </section>

//         {/* ================= FORM ================= */}
//         <section className="py-16 max-sm:py-10 px-4">
//           <div
//             className="
//               max-w-7xl mx-auto
//               bg-white shadow-xl rounded-2xl overflow-hidden
//               grid grid-cols-1
//               md:grid-cols-[1.2fr_1fr]
//             "
//           >
//             {/* LEFT SIDE (INCREASED) */}
//             <div className="bg-gradient-to-br from-blue-700 to-emerald-600 text-white p-12 md:p-16">
//               <h2 className="text-3xl font-bold mb-6">
//                 Get in Touch
//               </h2>

//               <p className="text-blue-100 mb-12 leading-relaxed text-lg">
//                 Submit your details and our professional tax consulting team
//                 will contact you within <b>24 working hours</b>.
//               </p>

//               <div className="space-y-6 text-base">
//                 <p>📍 Ahmedabad, Gujarat – India</p>
//                 <p>📞 +91 98765 43210</p>
//                 <p>📧 support@taxauditpro.com</p>
//               </div>

//               <div className="mt-14 border-t border-white/30 pt-6 text-blue-100 text-sm">
//                 Trusted by <b>5,000+</b> clients across India
//               </div>
//             </div>

//             {/* RIGHT FORM */}
//             <form
//               onSubmit={handleSubmit}
//               className="p-8 md:p-12 space-y-6"
//               noValidate
//             >
//               {/* NAME */}
//               <div>
//                 <label className="block mb-1 font-medium">Full Name</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500
//                     ${errors.name ? "border-red-500" : "border-slate-300"}`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="example@email.com"
//                   className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500
//                     ${errors.email ? "border-red-500" : "border-slate-300"}`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {/* MOBILE */}
//               <div>
//                 <label className="block mb-1 font-medium">Mobile</label>
//                 <input
//                   name="mobile"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   placeholder="10-digit mobile number"
//                   className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500
//                     ${errors.mobile ? "border-red-500" : "border-slate-300"}`}
//                 />
//                 {errors.mobile && (
//                   <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
//                 )}
//               </div>

//               {/* MESSAGE */}
//               <div>
//                 <label className="block mb-1 font-medium">Message</label>
//                 <textarea
//                   rows="4"
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Write your message..."
//                   className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500
//                     ${errors.message ? "border-red-500" : "border-slate-300"}`}
//                 />
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                 )}
//               </div>

//               {/* BUTTON */}
//               <button
//                 disabled={loading}
//                 className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
//               >
//                 {loading ? "Sending..." : "Submit Inquiry"}
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import {
  MapPin, Phone, Mail, Send, Star, CheckCircle2,
  Sparkles, ArrowRight, Zap, User, MessageSquare,
  Smartphone, Clock, Shield, Users
} from "lucide-react";

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

const floatingWords = ["Call Us", "Email Support", "Free Consultation", "Office Visit", "Quick Response", "Expert Advice"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let err = {};
    if (!form.name.trim())    err.name    = "Full name is required";
    if (!form.email)          err.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Invalid email format";
    if (!form.mobile)         err.mobile  = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.mobile)) err.mobile = "Must be 10 digits";
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) {
      toast.warning("Please fix form errors");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(window.API_BASE_URL + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", mobile: "", message: "" });
        setErrors({});
      } else {
        toast.error("Submission failed");
      }
    } catch {
      toast.error("Server error. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name",    label: "Full Name",    placeholder: "Enter your full name",       type: "text",  icon: User,          rows: null },
    { name: "email",   label: "Email",        placeholder: "example@email.com",          type: "email", icon: Mail,          rows: null },
    { name: "mobile",  label: "Mobile",       placeholder: "10-digit mobile number",     type: "tel",   icon: Smartphone,    rows: null },
    { name: "message", label: "Message",      placeholder: "Write your message here...", type: "text",  icon: MessageSquare, rows: 4    },
  ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark"
        toastStyle={{ background: "#13102b", border: "1px solid #7c3aed44", color: "#e2e8f0" }} />

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
          input:-webkit-autofill,
          textarea:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px #1a1130 inset !important;
            -webkit-text-fill-color: #e2e8f0 !important;
          }
        `}</style>

        {/* ══════════════════════════════════════
            1. HERO — DARK (#0f0a1e)
        ══════════════════════════════════════ */}
        <section className="relative min-h-[58vh] flex items-center overflow-hidden bg-[#0f0a1e]">
          <Orbs dark />
          <DotGrid dark />
          <GlowDivider />

          {/* Floating keyword pills */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingWords.map((word, i) => (
              <motion.div key={i}
                className="absolute px-4 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20
                           text-xs text-violet-300/60 backdrop-blur-sm font-medium"
                style={{ top: `${18 + (i % 4) * 16}%`, left: `${10 + (i * 14) % 82}%` }}
                animate={{ y: [0, -50, 0] }}
                transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
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
              Get In Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8 }}
              className="playfair text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white
                         leading-[1.12] mb-6 max-w-3xl mx-auto"
            >
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Connect
              </span>{" "}
              & Solve Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Get in touch with our financial experts for personalized guidance
              on taxation, audit, loans and government subsidy services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 justify-center"
            >
              {["Free Consultation", "24hr Response", "Expert Guidance", "100% Confidential"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 size={13} className="text-violet-400" />{t}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. CONTACT FORM — LIGHT (#f5f3ff)
        ══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-[#f5f3ff] relative overflow-hidden">
          <GlowDivider />
          <Orbs dark={false} />
          <DotGrid dark={false} />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
                               text-violet-600 bg-violet-50 border border-violet-200 px-3 py-1.5 rounded-full mb-4">
                <Sparkles size={11} /> Contact Form
              </span>
              <h2 className="playfair text-3xl md:text-4xl font-bold text-slate-800 mb-3">Send Us a Message</h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Fill in the form and we'll get back to you within 24 working hours
              </p>
            </motion.div>

            {/* Card grid */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-violet-100
                            grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">

              {/* ── LEFT INFO PANEL (dark) ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#13102b] p-10 md:p-14 flex flex-col justify-between overflow-hidden"
              >
                {/* inner orbs */}
                <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-fuchsia-600/15 blur-3xl pointer-events-none" />
                <DotGrid dark />

                <div className="relative z-10">
                  {/* Zap icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500
                                  flex items-center justify-center shadow-lg shadow-violet-900/50 mb-8">
                    <Zap size={22} className="text-white" />
                  </div>

                  <h2 className="playfair text-2xl md:text-3xl font-bold text-white mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-10 text-[15px]">
                    Submit your details and our professional tax consulting team
                    will contact you within{" "}
                    <span className="text-violet-300 font-semibold">24 working hours</span>.
                  </p>

                  {/* Contact info */}
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, text: "Ahmedabad, Gujarat – India" },
                      { icon: Phone,  text: "+91 98765 43210"            },
                      { icon: Mail,   text: "support@taxauditpro.com"    },
                    ].map((item, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 group cursor-default"
                      >
                        <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/30
                                        flex items-center justify-center shrink-0
                                        group-hover:bg-violet-500/30 transition-colors">
                          <item.icon size={15} className="text-violet-400" />
                        </div>
                        <span className="text-slate-400 text-sm group-hover:text-violet-300 transition-colors">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trust badge */}
                <div className="relative z-10 mt-12 pt-6 border-t border-violet-900/50">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500
                                                border-2 border-[#13102b] flex items-center justify-center">
                          <Users size={11} className="text-white" />
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-sm">
                      Trusted by <span className="text-violet-300 font-bold">5,000+</span> clients across India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── RIGHT FORM ── */}
              <motion.form
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                onSubmit={handleSubmit}
                noValidate
                className="p-8 md:p-12 space-y-6 bg-white"
              >
                {fields.map((field, i) => (
                  <motion.div key={field.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                      {field.label}
                    </label>

                    <div className="relative">
                      {/* Icon */}
                      <div className={`absolute left-3.5 flex items-center pointer-events-none transition-colors duration-200
                        ${focused === field.name ? "text-violet-500" : "text-slate-400"}
                        ${field.rows ? "top-3.5" : "top-1/2 -translate-y-1/2"}`}>
                        <field.icon size={16} />
                      </div>

                      {field.rows ? (
                        <textarea
                          rows={field.rows}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800
                            placeholder:text-slate-400 outline-none transition-all duration-200 resize-none
                            ${errors[field.name]
                              ? "border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200"
                              : focused === field.name
                                ? "border-violet-400 bg-violet-50/30 ring-2 ring-violet-100"
                                : "border-slate-200 bg-slate-50/50 hover:border-violet-300"
                            }`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800
                            placeholder:text-slate-400 outline-none transition-all duration-200
                            ${errors[field.name]
                              ? "border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200"
                              : focused === field.name
                                ? "border-violet-400 bg-violet-50/30 ring-2 ring-violet-100"
                                : "border-slate-200 bg-slate-50/50 hover:border-violet-300"
                            }`}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {errors[field.name] && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                        >
                          <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-[10px] font-bold shrink-0">!</span>
                          {errors[field.name]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? "none" : "0 12px 32px rgba(124,58,237,0.35)" }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="relative w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600
                             text-white font-bold rounded-2xl overflow-hidden
                             flex items-center justify-center gap-2 text-[15px]
                             shadow-lg shadow-violet-200/50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 shimmer-dark" />
                  {loading ? (
                    <span className="relative flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} className="relative" />
                      <span className="relative">Submit Inquiry</span>
                      <motion.span className="relative" animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity }}>
                        <ArrowRight size={16} />
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. TRUST BADGES — DARK (#13102b)
        ══════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-[#13102b] relative overflow-hidden">
          <GlowDivider />
          <Orbs dark />
          <DotGrid dark />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-3 gap-6">
              {trustItems.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 0 0 1px #7c3aed55, 0 16px 36px rgba(124,58,237,0.2)" }}
                  className="group text-center p-7 rounded-3xl bg-white/5 border border-white/10
                             hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-2xl
                               bg-gradient-to-br from-violet-500/30 to-fuchsia-600/20
                               border border-violet-400/20 flex items-center justify-center">
                    <item.icon size={22} className="text-violet-300" />
                  </motion.div>
                  <p className="font-bold text-white text-[15px] mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

/* ═══ DATA ═══ */
const trustItems = [
  { icon: Clock,  title: "24hr Response",     desc: "We reply to every inquiry within one business day" },
  { icon: Shield, title: "100% Confidential", desc: "Your data and documents are fully secure with us"  },
  { icon: Users,  title: "5,000+ Clients",    desc: "Trusted by individuals and businesses across India" },
];