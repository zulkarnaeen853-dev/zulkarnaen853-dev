import React from "react";

export const Skill = () => {
  // Array expanded to all 9 technical competence nodes
  const technicalSkills = [
    {
      name: "React",
      desc: "Component-based architecture & modern hooks ecosystem",
      rating: "90%",
    },
    {
      name: "JavaScript",
      desc: "ES6+, asynchronous programming, and DOM manipulation",
      rating: "85%",
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first rapid prototyping & responsive styling configurations",
      rating: "95%",
    },
    {
      name: "TypeScript",
      desc: "Strong static typing, interface modeling, and type-safe systems",
      rating: "80%",
    },
    {
      name: "HTML",
      desc: "Semantic structural formatting & modern web accessibility standards",
      rating: "95%",
    },
    {
      name: "CSS",
      desc: "Advanced keyframe layouts, flexbox structures, and custom gradients",
      rating: "90%",
    },
    /* Added Skills */
    {
      name: "Node.js",
      desc: "Server-side JavaScript runtime environments, REST APIs, and npm architectures",
      rating: "75%",
    },
    {
      name: "Vite",
      desc: "Next-generation ultra-fast frontend build tooling and hot module replacement",
      rating: "90%",
    },
    {
      name: "Bootstrap",
      desc: "Responsive component framework layout setups and grid structures",
      rating: "85%",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 w-full py-16 transition-colors duration-300 bg-slate-100/80 dark:bg-[#0f223a]/30 border border-slate-200 dark:border-[#00f0ff]/10 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Behind-the-scenes subtle glowing accent bulb */}
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-[#0072ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Section Header Modules */}
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#00a3cc] dark:from-[#00f0ff] dark:to-[#0072ff] drop-shadow-[0_0_15px_rgba(240,255,255,0.2)]">
            Skills
          </span>
        </h2>
      </div>

      {/* The 9-Card Grid Layout Matrix */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative transition-all duration-300 bg-white dark:bg-[#0c1a2c]/90 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-[#0052cc] dark:hover:border-[#00f0ff]/40 hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(240,255,255,0.1)] hover:-translate-y-1"
          >
            {/* Top-Right Decorative Code Terminal Dot Indicator */}
            <div className="absolute top-4 right-4 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-800 group-hover:bg-[#0052cc] dark:group-hover:bg-[#00f0ff] transition-colors"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-800 group-hover:bg-[#0072ff] transition-colors"></span>
            </div>

            {/* Tech Name Headline */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-[#0052cc] dark:group-hover:text-[#00f0ff] transition-colors font-sans">
              {skill.name}
            </h3>

            {/* Tech Description Block */}
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-2 leading-relaxed font-sans min-h-[40px]">
              {skill.desc}
            </p>

            {/* Custom Interactive Linear Loading Progress Status Metric */}
            <div className="mt-5 space-y-2">
              <div className="flex justify-between items-center font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <span>System Cap</span>
                <span className="text-[#0052cc] dark:text-[#00f0ff]/80 group-hover:text-[#0052cc] dark:group-hover:text-[#00f0ff] transition-colors font-bold">
                  {skill.rating}
                </span>
              </div>
              <div className="w-full h-1 bg-slate-200 dark:bg-[#0f223a] rounded-full overflow-hidden">
                <div
                  style={{ width: skill.rating }}
                  className="h-full bg-gradient-to-r from-[#0072ff] to-[#00f0ff] rounded-full transition-all duration-1000 origin-left"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
