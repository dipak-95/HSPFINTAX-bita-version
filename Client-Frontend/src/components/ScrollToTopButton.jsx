// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// /* 🔥 DESKTOP VALUES */
// const DESKTOP_RADIUS = 24;
// const DESKTOP_STROKE = 6;
// const DESKTOP_SIZE = 60;

// /* 🔥 MOBILE VALUES */
// const MOBILE_RADIUS = 18;
// const MOBILE_STROKE = 5;
// const MOBILE_SIZE = 46;

// export function ScrollToTopButton() {
//   const { scrollYProgress } = useScroll();
//   const [show, setShow] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     const unsub = scrollYProgress.on("change", (v) => {
//       setShow(v > 0.05);
//     });
//     return () => unsub();
//   }, [scrollYProgress]);

//   /* 🔥 Responsive values */
//   const RADIUS = isMobile ? MOBILE_RADIUS : DESKTOP_RADIUS;
//   const STROKE = isMobile ? MOBILE_STROKE : DESKTOP_STROKE;
//   const SIZE = isMobile ? MOBILE_SIZE : DESKTOP_SIZE;
//   const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

//   const strokeDashoffset = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [CIRCUMFERENCE, 0]
//   );

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (!show) return null;

//   return (
//     <motion.div
//       className="
//         fixed bottom-4 sm:bottom-6
//         right-4 sm:right-6
//         z-50 cursor-pointer
//       "
//       initial={{ opacity: 0, scale: 0.85 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{ scale: 1.12 }}
//       onClick={scrollToTop}
//     >
//       {/* ================= PROGRESS RING ================= */}
//       <svg
//         width={SIZE}
//         height={SIZE}
//         viewBox={`0 0 ${SIZE} ${SIZE}`}
//         className="-rotate-90"
//       >
//         {/* background ring */}
//         <circle
//           cx={SIZE / 2}
//           cy={SIZE / 2}
//           r={RADIUS}
//           stroke="#DBEAFE"   // blue-100
//           strokeWidth={STROKE}
//           fill="none"
//         />

//         {/* progress ring */}
//         <motion.circle
//           cx={SIZE / 2}
//           cy={SIZE / 2}
//           r={RADIUS}
//           stroke="#2563EB"   // ✅ blue-600
//           strokeWidth={STROKE}
//           fill="none"
//           strokeDasharray={CIRCUMFERENCE}
//           style={{ strokeDashoffset }}
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* ================= CENTER ICON ================= */}
//       <div
//         className="
//           absolute inset-[4px] sm:inset-[6px]
//           bg-white rounded-full shadow-lg
//           flex items-center justify-center
//           text-blue-600
//         "
//       >
//         <FaArrowUp className="text-sm sm:text-lg" />
//       </div>
//     </motion.div>
//   );
// }
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

/* ── Responsive sizing ── */
const DESKTOP = { radius: 24, stroke: 6, size: 60 };
const MOBILE   = { radius: 18, stroke: 5, size: 46 };

export function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const [show, setShow]         = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setShow(v > 0.05));
    return () => unsub();
  }, [scrollYProgress]);

  const { radius, stroke, size } = isMobile ? MOBILE : DESKTOP;
  const CIRCUMFERENCE = 2 * Math.PI * radius;

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [CIRCUMFERENCE, 0]
  );

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <motion.div
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 cursor-pointer"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.75 }}
      whileHover={{ scale: 1.13 }}
      whileTap={{ scale: 0.93 }}
      onClick={scrollToTop}
    >
      {/* ── PROGRESS RING ── */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {/* Track ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b0764"        /* violet-950 */
          strokeWidth={stroke}
          fill="none"
        />

        {/* Progress ring — violet → fuchsia gradient via linearGradient */}
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#7c3aed" /> {/* violet-600  */}
            <stop offset="100%" stopColor="#d946ef" /> {/* fuchsia-500 */}
          </linearGradient>
        </defs>

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />
      </svg>

      {/* ── CENTER BUTTON ── */}
      <div
        className="absolute inset-[4px] sm:inset-[6px] rounded-full
                   bg-gradient-to-br from-violet-600 to-purple-700
                   shadow-lg shadow-violet-900/50
                   flex items-center justify-center"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />

        <FaArrowUp className="relative text-white text-xs sm:text-sm" />
      </div>
    </motion.div>
  );
}