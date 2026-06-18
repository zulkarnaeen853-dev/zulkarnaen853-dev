import React from 'react';
import CharacterImg from '../assets/Zulkarnaeen.jpg'; 

export const Banner = () => {
  return (
    /* Change: Added id="about" and the scroll-margin utility class 'scroll-mt-24' */
    <div 
      id="about" 
      className="scroll-mt-24 relative w-full h-screen transition-colors duration-300 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 dark:from-[#03030c] dark:via-[#050b1a] dark:to-[#0a162e] text-slate-800 dark:text-white flex items-center px-6 md:px-16 py-12 mt-16 overflow-hidden"
    >
      
      {/* Soft blue glowing backdrops */}
      <div className="absolute top-[-10%] right-[-50px] w-[500px] h-[500px] bg-[#0072ff]/5 dark:bg-[#0072ff]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[350px] h-[350px] bg-[#00f0ff]/5 dark:bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT PANEL: TYPOGRAPHY */}
        <div className="md:col-span-7 space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#00a3cc] dark:from-[#00f0ff] dark:to-[#0072ff] drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Zulkarnaeen</span>{" "}
            <span className="inline-block animate-bounce origin-bottom">👋</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-sans">
            I am a full-stack developer specializing in building modern responsive web apps. I love turning complex logic into pixel-perfect React architectures with fast, clean user interfaces and smooth interactive setups.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Smooth Scrolls down to the projects module container */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-2.5 bg-[#0072ff] dark:bg-[#00f0ff] hover:bg-[#005ccc] dark:hover:bg-[#00d0e0] text-white dark:text-[#03030c] font-bold text-sm rounded-full shadow-[0_4px_15px_rgba(0,114,255,0.2)] dark:shadow-[0_4px_15px_rgba(0,240,255,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              See My Projects
            </button>
            
            <button className="px-5 py-2.5 border border-slate-300 dark:border-[#00f0ff]/40 hover:border-slate-500 dark:hover:border-[#00f0ff] text-slate-700 dark:text-[#00f0ff] font-semibold text-sm rounded-full bg-slate-100/50 dark:bg-transparent transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
              <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Let's Connect
            </button>
          </div>
        </div>

        {/* RIGHT PANEL: AVATAR FRAME */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-white dark:bg-[#050b1a]/90 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border-2 border-slate-200 dark:border-[#00f0ff] flex items-center justify-center p-4 shadow-md dark:shadow-[0_0_40px_rgba(0,114,255,0.25)] overflow-visible group hover:border-[#0052cc] dark:hover:border-[#0072ff] transition-all duration-500">
            <img 
              src={CharacterImg} 
              alt="Zulkarnaeen 3D illustration avatar" 
              className="w-full h-full object-contain rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
