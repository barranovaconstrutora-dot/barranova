"use client";
import * as React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const stats = [
  { number: "2017", label: "Ano de Fundação" },
  { number: "100+", label: "Obras Entregues" },
  { number: "8+", label: "Prêmios de Qualidade" },
  { number: "10+", label: "Cidades Atendidas" },
];

const values = [
  { icon: "🏆", title: "Excelência", desc: "Cada detalhe é pensado para superar suas expectativas." },
  { icon: "💡", title: "Inovação", desc: "Tecnologia e design de vanguarda em cada projeto." },
  { icon: "🤝", title: "Compromisso", desc: "Parceria sólida em todas as etapas da obra." },
  { icon: "🌱", title: "Sustentabilidade", desc: "Construindo com responsabilidade ambiental." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.5)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <SectionWrapper className="text-center mb-20">
          <span className="inline-block text-[#F59E0B] text-sm font-bold uppercase tracking-[0.25em] mb-4">Sobre Nós</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Mais de{" "}
            <span className="gradient-text">7 anos</span>
            <br />
            de história e inovação
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            A Barra Nova Construtora nasceu com a missão de transformar sonhos em realidade através da construção civil de alta qualidade, unindo tradição e tecnologia.
          </p>
        </SectionWrapper>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image */}
          <SectionWrapper>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F59E0B]/20 to-[#38BDF8]/10 blur-3xl rounded-3xl" />
              <div className="relative glass-card overflow-hidden aspect-[4/5]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/real/team-barra-nova.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4">
                    <p className="text-white font-bold text-lg">Missão</p>
                    <p className="text-[#6B7280] text-sm mt-1">Construir com qualidade, inovação e responsabilidade, entregando obras que superam expectativas.</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -right-8 top-16 glass-card p-4 text-center w-36" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <p className="text-4xl font-black text-[#F59E0B]">7+</p>
                <p className="text-xs text-[#6B7280] mt-1">Anos de Experiência</p>
              </div>
            </div>
          </SectionWrapper>

          {/* Right: Text */}
          <SectionWrapper>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Nossa História</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Fundada em 30 de Agosto de 2017, a Barra Nova Construtora nasceu sob a liderança de Maria Viviane Rodrigues Tomaz, com o compromisso de entregar excelência na construção civil. Sediada em Icaraí, Caucaia-CE, consolidamos nossa presença através de projetos que unem segurança, design moderno e satisfação total de nossos clientes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Ser reconhecida como a construtora que define novos padrões de qualidade e inovação no Brasil, integrando tecnologia e design em cada projeto com sustentabilidade e responsabilidade social.
                </p>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-4 mt-4 border-l-2 border-[#F59E0B]/30 pl-6">
                {[
                  { year: "2017", event: "Fundação da empresa em Icaraí, Caucaia" },
                  { year: "2019", event: "Expansão para grandes projetos residenciais" },
                  { year: "2021", event: "Consolidação no mercado regional" },
                  { year: "2024", event: "+100 obras de qualidade entregues" },
                ].map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-[#F59E0B] top-1.5" />
                    <span className="text-[#F59E0B] text-sm font-bold">{item.year}</span>
                    <p className="text-white text-sm mt-0.5">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Stats bar */}
        <SectionWrapper>
          <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="text-4xl font-black gradient-text">{s.number}</span>
                <span className="text-[#6B7280] text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {values.map((v, i) => (
            <SectionWrapper key={v.title}>
              <div
                className="glass-card p-6 flex flex-col gap-4 h-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-4xl">{v.icon}</span>
                <h4 className="text-white font-bold text-lg">{v.title}</h4>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
