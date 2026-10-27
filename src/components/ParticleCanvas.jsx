import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Sliders, RefreshCw } from 'lucide-react';

const PRESETS = {
  Cosmos: {
    particleColor: 'rgba(167, 139, 250, 0.7)',
    lineColor: 'rgba(139, 92, 246, 0.15)',
    accentColor: 'rgba(56, 189, 248, 0.8)',
  },
  Cyber: {
    particleColor: 'rgba(52, 211, 153, 0.7)',
    lineColor: 'rgba(16, 185, 129, 0.15)',
    accentColor: 'rgba(250, 204, 21, 0.8)',
  },
  Solar: {
    particleColor: 'rgba(251, 146, 60, 0.7)',
    lineColor: 'rgba(244, 63, 94, 0.15)',
    accentColor: 'rgba(244, 114, 182, 0.8)',
  },
};

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const [activePreset, setActivePreset] = useState('Cosmos');
  const [particleCount, setParticleCount] = useState(65);
  const [isInteractive, setIsInteractive] = useState(true);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9;
        this.radius = Math.random() * 2.2 + 0.8;
        this.baseRadius = this.radius;
      }

      update(mouse) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (isInteractive && mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 3;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force;
            this.y -= Math.sin(angle) * force;
            this.radius = this.baseRadius * 1.8;
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw(context, colors) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = colors.particleColor;
        context.shadowBlur = 12;
        context.shadowColor = colors.accentColor;
        context.fill();
        context.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = PRESETS[activePreset];

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseRef.current);
        particles[i].draw(ctx, colors);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors.lineColor;
            ctx.lineWidth = (1 - dist / 125) * 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Burst outward
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * 3;
          p.vy += Math.sin(angle) * 3;
        }
      });
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
    canvas.parentElement.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
        canvas.parentElement.removeEventListener('click', handleClick);
      }
    };
  }, [activePreset, particleCount, isInteractive]);

  return (
    <div className="absolute inset-0 pointer-events-auto overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
      
      {/* Interactive preset badge in bottom right corner */}
      <div className="absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs text-zinc-400">
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">Shader Mode:</span>
        {Object.keys(PRESETS).map((preset) => (
          <button
            key={preset}
            onClick={() => setActivePreset(preset)}
            className={`px-2 py-0.5 rounded-md font-mono text-[10px] transition-all ${
              activePreset === preset
                ? 'bg-purple-600/40 text-purple-200 border border-purple-500/50 shadow-sm shadow-purple-500/20'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}
