import { useEffect, useState } from "react";

/* ======================================================
   🔒 DISABLE INSPECT + MODERN TOAST
====================================================== */

/* ✅ custom hook */
export function useDisableInspect() {
  const [toast, setToast] = useState({
    show: false,
    message: ""
  });

  useEffect(() => {
    let lastTime = 0;

    const showMessage = (msg) => {
      const now = Date.now();
      if (now - lastTime < 1500) return;

      lastTime = now;

      setToast({ show: true, message: msg });

      setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 2000);
    };

    /* ================= RIGHT CLICK ================= */
    const contextHandler = (e) => {
      e.preventDefault();
      showMessage("🔒 This action is restricted for security reasons.");
    };

    /* ================= KEY HANDLER ================= */
    const keyHandler = (e) => {

      /* CTRL + U */
      if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "u") {
        e.preventDefault();
        showMessage("🔒 Source view is disabled.");
      }

      /* CTRL + S — BEST POSSIBLE BLOCK */
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "S" || e.keyCode === 83)
      ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        showMessage("⚠️ Saving page is disabled.");
        return false;
      }

      /* CTRL + I */
      if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "i") {
        e.preventDefault();
        showMessage("⚠️ Developer tools are disabled.");
      }

      /* CTRL + SHIFT + I / J / C */
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ["i", "j", "c"].includes(e.key?.toLowerCase())
      ) {
        e.preventDefault();
        showMessage("⚠️ Developer tools are disabled.");
      }

      /* F12 */
      if (e.key === "F12") {
        e.preventDefault();
        showMessage("⚠️ Developer tools are disabled.");
      }
    };

    document.addEventListener("contextmenu", contextHandler);
    document.addEventListener("keydown", keyHandler, true); // ✅ CAPTURE MODE

    return () => {
      document.removeEventListener("contextmenu", contextHandler);
      document.removeEventListener("keydown", keyHandler, true);
    };
  }, []);

  return toast;
}

/* ======================================================
   🔔 MODERN TOAST UI
====================================================== */

export function SecurityToast({ message, show }) {
  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[9999]
        px-5 py-3 rounded-xl
        backdrop-blur-xl
        bg-slate-900/90
        text-slate-100 text-sm font-medium
        border border-blue-500/40
        shadow-[0_10px_40px_rgba(37,99,235,0.35)]
        transition-all duration-300 ease-out
        ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }
      `}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-emerald-400" />
        <span>{message}</span>
      </div>
    </div>
  );
}
