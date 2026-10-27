import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight, Award, Compass, Cpu } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar() {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAudio = () => {
    const active = sound.toggle();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'Works', href: '#works' },
    { label: 'Lab & Physics', href: '#lab' },
    { label: 'Architecture', href: '#process' },
    { label: 'Estimator', href: '#estimator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#050608]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl shadow-black/80'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-3"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050608] rounded-[7px] flex items-center justify-center">
              <span className="font-heading font-black text-white text-sm tracking-wider">A</span>
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base tracking-widest text-white group-hover:text-purple-300 transition-colors">
              AURA<span className="text-purple-400 font-mono text-xs ml-1">/27</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 hidden sm:block">
              Interactive Lab
            </span>
          </div>
        </a>

        {/* Center navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right tools & CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Real-time studio clock */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-zinc-500">UTC:</span>
            <span className="text-zinc-300 font-medium tabular-nums">{timeString || '12:00:00'}</span>
          </div>

          {/* Procedural Audio Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sound.playHover()}
            title={isAudioActive ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-mono ${
              isAudioActive
                ? 'bg-purple-950/40 border-purple-500/50 text-purple-300 shadow-sm shadow-purple-500/30'
                : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span className="hidden md:inline text-[11px]">AUDIO ON</span>
                {/* Animated equalizers */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-purple-400 animate-[bounce_1s_infinite_100ms] h-2 rounded-full" />
                  <span className="w-0.5 bg-purple-400 animate-[bounce_1s_infinite_250ms] h-3 rounded-full" />
                  <span className="w-0.5 bg-purple-400 animate-[bounce_1s_infinite_150ms] h-1.5 rounded-full" />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#estimator"
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium text-xs tracking-wider shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            <span className="font-mono text-xs">INITIATE</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}
