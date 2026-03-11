"use client";
import * as React from "react";
import { Button } from "@/components/ui/Button";

function ParticleField() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrameId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
    />
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08)_0%,transparent_50%)]" />
      
      {/* Particle field */}
      <ParticleField />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#F59E0B]/20 bg-[#F59E0B]/5 w-fit" style={{ animation: 'float 8s ease-in-out infinite' }}>
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" style={{ animation: 'pulse-glow 2s ease infinite' }} />
            <span className="text-sm font-medium text-white/80">O Futuro da Construção Civil</span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05]" style={{ animation: 'float 6s ease-in-out infinite' }}>
            Construindo o{" "}
            <span className="relative inline-block">
              <span className="gradient-text">futuro</span>
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-[#F59E0B]/20 to-[#38BDF8]/20 pointer-events-none -z-10 rounded-xl" />
            </span>
            {" "}com
            <br />
            qualidade e
            <br />
            <span className="gradient-text">inovação.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s' }}>
            Elevando o padrão da construção civil com design excepcional, tecnologia de ponta e excelência em cada detalhe do seu projeto.
          </p>

          <div className="flex flex-wrap items-center gap-4" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>
            <Button size="lg" variant="glow" asChild>
              <a href="#portfolio">Ver Projetos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#orcamento">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-white/10 w-fit">
            {[
              { num: "7+", label: "Anos de Experiência" },
              { num: "100+", label: "Obras Entregues" },
              { num: "100%", label: "Clientes Satisfeitos" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-3xl font-black text-white glow-gold">{s.num}</span>
                <span className="text-xs text-[#6B7280] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual element */}
        <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center">
          {/* Glow blob */}
          <div className="absolute inset-0 bg-[#F59E0B]/15 blur-[100px] rounded-full" style={{ animation: 'pulse-glow 4s ease infinite' }} />

          {/* Main image card */}
          <div
            className="relative w-full max-w-sm aspect-[3/4] glass-card border border-[#F59E0B]/25 p-2 shadow-[0_0_60px_rgba(245,158,11,0.15)]"
            style={{ animation: 'levitate 5s ease-in-out infinite' }}
          >
            <div
              className="w-full h-full rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/real/hero-aerial.jpg')`,
              }}
            />

            {/* Floating ISO card */}
            <div
              className="absolute -bottom-10 -left-12 glass-card p-4 flex items-center gap-3 w-52"
              style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/50 shrink-0">
                <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-bold">Certificação ISO 9001</p>
                <p className="text-[#6B7280] text-xs">Qualidade Garantida</p>
              </div>
            </div>

            {/* Floating rating card */}
            <div
              className="absolute -top-8 -right-8 glass-card p-3 flex items-center gap-2"
              style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '0.5s' }}
            >
              <div className="flex gap-0.5">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs font-semibold">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <span className="text-xs text-[#6B7280] uppercase tracking-widest">Role para baixo</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#F59E0B] to-transparent" />
      </div>
    </section>
  );
}
