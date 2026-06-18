import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatus("Please fill out all transmission fields.");
      return;
    }
    setStatus("Message transmitting... [OK]");
    setTimeout(() => {
      setStatus("Transmission successful. I will reach out soon!");
      setFormData({ email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full py-16 transition-colors duration-300 bg-slate-50 dark:bg-[#03030c] text-slate-800 dark:text-white px-4 md:px-8"
    >
      {/* ==================== CENTERED HEADING BLOCK ==================== */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight inline-block relative">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072ff] to-[#00f0ff] dark:drop-shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            Connect.
          </span>
          <div className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0072ff]/20 -z-10 rounded"></div>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm md:text-base font-sans max-w-md mx-auto">
          Have an interesting project, job opportunity, or just want to chat
          about code architecture? Drop a line below.
        </p>
      </div>

      {/* ==================== CORE CONTENT MATRIX GRID ==================== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* LEFT PANEL: CONTACT INFO CHANNELS */}
        <div className="md:col-span-6 space-y-4 font-sans mt-2">
          {/* Email Channel */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0c1a2c]/80 border border-slate-200 dark:border-slate-800 text-[#0072ff] dark:text-[#00f0ff]">
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                Email
              </div>
              <a
                href="mailto:zulkarnaeen@example.com"
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0072ff] dark:hover:text-[#00f0ff] transition-colors"
              >
                zulkarnaeen853@gmail.com
              </a>
            </div>
          </div>

          {/* Fcebook Channel */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0c1a2c]/80 border border-slate-200 dark:border-slate-800 text-[#0072ff] dark:text-[#00f0ff]">
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </div>

            <div>
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                Facebook
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61584816848500"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0072ff] dark:hover:text-[#00f0ff] transition-colors"
              >
                Facebook.com
              </a>
            </div>
          </div>

          {/* Location Channel */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0c1a2c]/80 border border-slate-200 dark:border-slate-800 text-[#0072ff] dark:text-[#00f0ff]">
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                Location
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: INPUT FORM CONSOLE */}
        <div className="md:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="w-full p-6 md:p-8 bg-white dark:bg-[#0c1a2c]/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-5"
          >
            <div className="space-y-2 text-left">
              <label
                htmlFor="email"
                className="text-xs md:text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-[#050d1a] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0052cc] dark:focus:border-[#00f0ff] focus:ring-1 focus:ring-[#0052cc] dark:focus:ring-[#00f0ff]"
              />
            </div>

            <div className="space-y-2 text-left">
              <label
                htmlFor="message"
                className="text-xs md:text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300"
              >
                Message Description
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-[#050d1a] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#0052cc] dark:focus:border-[#00f0ff] focus:ring-1 focus:ring-[#0052cc] dark:focus:ring-[#00f0ff] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#0072ff] to-[#005ccc] dark:from-[#0072ff] dark:to-[#00f0ff] hover:from-[#005ccc] dark:hover:from-[#00d0e0] text-white dark:text-[#03030c] text-sm font-black font-mono tracking-wider rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              SEND_MESSAGE()
            </button>

            {status && (
              <div className="pt-2 font-mono text-[11px] text-[#0072ff] dark:text-[#00f0ff] text-center animate-pulse">
                &gt;&gt; {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
