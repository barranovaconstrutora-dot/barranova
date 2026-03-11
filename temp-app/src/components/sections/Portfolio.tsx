"use client";
import * as React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const categories = ["Todos", "Residencial", "Comercial", "Áreas de Lazer", "Em Andamento"];

const projects = [
  {
    title: "Novum Parque Boulevard",
    category: "Residencial",
    location: "Parque Soledade, Caucaia - CE",
    year: "2024",
    image: "/images/real/hero-aerial.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Guarujá Condominium",
    category: "Residencial",
    location: "Av. Juaci Sampaio Pontes, Caucaia - CE",
    year: "2023",
    image: "/images/real/facade-modern.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Jardins Boulevard",
    category: "Residencial",
    location: "Parque Soledade, Caucaia - CE",
    year: "2023",
    image: "/images/real/pool-playground.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Infraestrutura de Telecom",
    category: "Em Andamento",
    location: "Caucaia - CE",
    year: "2024",
    image: "/images/real/telecom-servers.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Obras Elétricas Industriais",
    category: "Comercial",
    location: "Caucaia - CE",
    year: "2024",
    image: "/images/real/electrical-work.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Quadra Poliesportiva",
    category: "Áreas de Lazer",
    location: "Caucaia - CE",
    year: "2024",
    image: "/images/real/sports-court.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Impermeabilização Técnica",
    category: "Em Andamento",
    location: "Caucaia - CE",
    year: "2024",
    image: "/images/real/waterproofing.jpg",
    span: "col-span-1 row-span-1",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionWrapper className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-bold uppercase tracking-[0.25em] mb-4">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Obras que{" "}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            Cada projeto é uma história de dedicação, precisão técnica e design que inspira.
          </p>
        </SectionWrapper>

        {/* Category filter */}
        <SectionWrapper className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#F59E0B] text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  : "glass border border-white/10 text-white/70 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </SectionWrapper>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filtered.map((project, i) => (
            <SectionWrapper
              key={project.title}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <div className="portfolio-item h-full group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="portfolio-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 opacity-0 group-hover:opacity-100">
                  <span className="inline-block glass px-3 py-1 rounded-full text-xs text-[#F59E0B] font-bold mb-2 border border-[#F59E0B]/30">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper className="text-center mt-12">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-4 transition-all duration-300"
          >
            Solicite um projeto similar
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </SectionWrapper>
      </div>
    </section>
  );
}
