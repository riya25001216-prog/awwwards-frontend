import React from 'react';
import { ArrowUpRight, GitBranch, Link2, AtSign, Mail, ExternalLink, Zap, Layers, Code2, Palette, ChevronRight, Star, Award, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import { sound } from './utils/audio';

const projects = [
  {
    title: 'BharatVerse',
    desc: 'Cinematic 3D cultural atlas of India — 28 states, 360° panoramas, interactive map, multilingual chatbot.',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind'],
    accent: 'from-purple-500 to-indigo-600',
    emoji: '🇮🇳',
    link: 'https://github.com/riya25001216-prog/BharatVerse',
  },
  {
    title: 'Snap-Cut',
    desc: 'AI-powered background remover with real-time preview and one-click export.',
    tags: ['React', 'AI/ML', 'Canvas API', 'Node.js'],
    accent: 'from-cyan-500 to-blue-600',
    emoji: '✂️',
    link: 'https://github.com/riya25001216-prog/snap-cut',
  },
  {
    title: 'SANJEEVAANI',
    desc: 'Healthcare platform preserving traditional medicine heritage — PS26214 Dharohar.',
    tags: ['Full-Stack', 'Database', 'API', 'UI/UX'],
    accent: 'from-emerald-500 to-teal-600',
    emoji: '🏥',
    link: 'https://github.com/rupesh0411/SANJEEVAANI-PS26214-DHAROHAR',
  },
  {
    title: 'Currency Converter',
    desc: 'Real-time exchange rates with Fetch API — clean, responsive, instant conversions.',
    tags: ['JavaScript', 'REST API', 'CSS3', 'HTML5'],
    accent: 'from-amber-500 to-orange-600',
    emoji: '💱',
    link: 'https://github.com/riya25001216-prog/currency_converter_js',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Deep-dive into vision, audience & goals', icon: <Sparkles className="w-5 h-5" /> },
  { num: '02', title: 'Architecture', desc: 'System design, component mapping & tech stack', icon: <Layers className="w-5 h-5" /> },
  { num: '03', title: 'Craft', desc: 'Pixel-perfect build with motion & interaction', icon: <Code2 className="w-5 h-5" /> },
  { num: '04', title: 'Launch', desc: 'Performance tuning, deploy & iterate', icon: <Zap className="w-5 h-5" /> },
];

const marqueeText = '  INTERACTIVE EXPERIENCES  ✦  WEBGL ARTISTRY  ✦  SPATIAL DESIGN  ✦  MOTION SYSTEMS  ✦  CREATIVE DEVELOPMENT  ✦  DIGITAL CRAFTSMANSHIP  ✦  UI ENGINEERING  ✦  PERFORMANT CODE  ✦';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050608]">
      <CustomCursor />
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleCanvas />
        </div>

        {/* Gradient mesh */}
        <div className="absolute inset-0 z-[1] glow-mesh opacity-60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              Available for Projects — 2027
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-[Syne] font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-6">
            <span className="text-gradient block">Crafting</span>
            <span className="text-gradient-accent block mt-2">Digital Aura</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10">
            Next-gen experiential studio building interactive artifacts, WebGL experiences,
            and spatial hyper-systems for pioneering brands worldwide.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#works"
              data-cursor="View"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm tracking-wider shadow-xl shadow-purple-900/40 hover:shadow-purple-600/50 hover:scale-[1.03] transition-all duration-300"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              <span>Explore Works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#estimator"
              data-cursor="Contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 text-zinc-300 font-medium text-sm tracking-wider hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              <span>Start a Project</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="relative py-5 border-y border-white/[0.06] bg-[#050608]/80 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee">
          <span className="font-[Syne] font-bold text-xl sm:text-2xl uppercase tracking-[0.2em] text-zinc-700 whitespace-nowrap">
            {marqueeText}{marqueeText}
          </span>
        </div>
      </div>

      {/* ═══════════ WORKS ═══════════ */}
      <section id="works" className="relative py-24 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple-400">Selected Works</span>
          </div>
          <h2 className="font-[Syne] font-extrabold text-4xl sm:text-5xl md:text-6xl text-gradient tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="group glass-card rounded-2xl p-8 relative overflow-hidden"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Project emoji */}
              <div className="text-4xl mb-4">{project.emoji}</div>

              {/* Project info */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-[Syne] font-bold text-xl sm:text-2xl text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════ MARQUEE 2 ═══════════ */}
      <div className="py-5 border-y border-white/[0.06] bg-[#050608]/80 overflow-hidden">
        <div className="animate-marquee">
          <span className="font-[Syne] font-bold text-xl sm:text-2xl uppercase tracking-[0.2em] text-zinc-700 whitespace-nowrap">
            ✦  REACT  ✦  THREE.JS  ✦  TYPESCRIPT  ✦  TAILWIND  ✦  NODE.JS  ✦  WEBGL  ✦  GSAP  ✦  FIGMA  ✦  VITE  ✦  CANVAS API  ✦
            ✦  REACT  ✦  THREE.JS  ✦  TYPESCRIPT  ✦  TAILWIND  ✦  NODE.JS  ✦  WEBGL  ✦  GSAP  ✦  FIGMA  ✦  VITE  ✦  CANVAS API  ✦
          </span>
        </div>
      </div>

      {/* ═══════════ LAB / INTERACTIVE ═══════════ */}
      <section id="lab" className="relative py-24 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Interactive Lab</span>
          </div>
          <h2 className="font-[Syne] font-extrabold text-4xl sm:text-5xl md:text-6xl text-gradient tracking-tight">
            Particle Physics
          </h2>
        </div>

        <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/[0.08] glass-panel">
          <ParticleCanvas />
          <div className="absolute top-6 left-6 z-20">
            <div className="glass-panel rounded-xl px-5 py-4 max-w-xs">
              <h3 className="font-[Syne] font-bold text-lg text-white mb-1">Interactive Canvas</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Move your cursor to repel particles. Click to create shockwaves. Switch shader modes in the bottom-right corner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section id="process" className="relative py-24 sm:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400">Architecture</span>
          </div>
          <h2 className="font-[Syne] font-extrabold text-4xl sm:text-5xl md:text-6xl text-gradient tracking-tight">
            The Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="group glass-card rounded-2xl p-7 relative" data-cursor="Read">
              {/* Step number */}
              <span className="font-mono text-5xl font-extrabold text-white/[0.04] absolute top-4 right-5 group-hover:text-purple-500/10 transition-colors duration-500">
                {step.num}
              </span>

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="font-[Syne] font-bold text-lg text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ ESTIMATOR / CTA ═══════════ */}
      <section id="estimator" className="relative py-24 sm:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            {/* Background gradient blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl" />

            <div className="relative z-10">
              <Star className="w-8 h-8 text-purple-400 mx-auto mb-6" />
              <h2 className="font-[Syne] font-extrabold text-3xl sm:text-5xl md:text-6xl text-gradient mb-4">
                Let's Build Something
              </h2>
              <h2 className="font-[Syne] font-extrabold text-3xl sm:text-5xl md:text-6xl text-gradient-accent mb-8">
                Extraordinary
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's create an experience that pushes boundaries.
              </p>

              <a
                href="mailto:riya.25001216@kiet.edu"
                data-cursor="Email"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm tracking-wider shadow-xl shadow-purple-900/40 hover:shadow-purple-600/60 hover:scale-[1.03] transition-all duration-300"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-white/[0.06] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#050608] rounded-[5px] flex items-center justify-center">
                <span className="font-[Syne] font-black text-[10px] text-white">A</span>
              </div>
            </div>
            <span className="font-mono text-xs text-zinc-600">
              © 2026 AURA Studio. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ), 
                href: 'https://github.com/riya25001216-prog', 
                label: 'GitHub' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ), 
                href: 'https://linkedin.com', 
                label: 'LinkedIn' 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ), 
                href: 'https://twitter.com', 
                label: 'Twitter' 
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                onMouseEnter={() => sound.playHover()}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
