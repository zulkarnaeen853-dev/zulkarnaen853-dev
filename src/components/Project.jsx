import React from "react";
import WeatherImg from "../assets/Weather.jpg";

export const Project = () => {
  const projectsList = [
    {
      title: "Weather App",
      desc: "An application that displays real-time weather metrics, local temperatures, and forecast conditions.",
      img: WeatherImg,
      tags: ["React", "Tailwind CSS", "HTML"],
      codeLink: "https://github.com/zulkarnaeen853-dev/Weather",
      demoLink: "https://zulkarnaeen853-dev.github.io/Weather/",
    }
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 w-full py-16 transition-colors duration-300 bg-slate-50 dark:bg-[#03030c] text-slate-800 dark:text-white px-4 md:px-8"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072ff] to-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,114,255,0.3)]">
            Projects
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base font-sans">
          A showcase of my recent work
        </p>
      </div>

      {/* Responsive Cards Grid Matrix */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white dark:bg-[#0c1a2c]/60 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-[#0052cc] dark:hover:border-[#00f0ff]/40 hover:shadow-lg group"
          >
            <div className="relative w-full pt-[56.25%] bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
              <img
                src={project.img}
                alt={`${project.title} screenshot preview`}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col justify-between flex-1 p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#0052cc] dark:group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] md:text-xs font-mono font-medium px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg font-mono transition-all border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <svg
                    xmlns="http://w3.org"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Code
                </a>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-lg font-mono transition-all bg-[#0072ff] hover:bg-[#005ccc] dark:bg-gradient-to-r dark:from-[#0072ff] dark:to-[#005ccc] text-white shadow-sm hover:shadow-[0_4px_12px_rgba(0,114,255,0.3)]"
                >
                  <svg
                    xmlns="http://w3.org"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
};
