"use client";
import * as React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Proprietário",
    location: "Icaraí, Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=11",
    rating: 5,
    text: "A Barra Nova superou todas as nossas expectativas. A casa dos meus sonhos foi entregue no prazo e com acabamento impecável. Recomendo de olhos fechados!",
  },
  {
    name: "Ana Paula Rodrigues",
    role: "Empresária",
    location: "Centro, Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    text: "Contratei para a construção do nosso galpão comercial. A equipe foi extremamente profissional, transparente no processo e entregou um resultado de alto padrão.",
  },
  {
    name: "Ricardo Alves",
    role: "Arquiteto",
    location: "Pacheco, Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 5,
    text: "Como arquiteto, sei valorizar detalhes de execução. A Barra Nova traduz projetos com precisão e qualidade que raramente vejo em construtoras da região.",
  },
  {
    name: "Fernanda Costa",
    role: "Médica",
    location: "Icaraí, Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=54",
    rating: 5,
    text: "Do primeiro contato até a entrega das chaves, tudo foi transparente e profissional. Minha clínica ficou exatamente como eu imaginava. Parabéns à equipe!",
  },
  {
    name: "João Ferreira",
    role: "Empreendedor",
    location: "Iparana, Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=15",
    rating: 5,
    text: "Já é o segundo imóvel que construo com a Barra Nova. A fidelidade diz tudo sobre a qualidade do serviço. Uma construtora que realmente cumpre o que promete.",
  },
  {
    name: "Mariana Santos",
    role: "Designer de Interiores",
    location: "Caucaia - CE",
    avatar: "https://i.pravatar.cc/80?img=48",
    rating: 5,
    text: "Trabalho junto em vários projetos com a Barra Nova. A qualidade de execução facilita muito o meu trabalho de acabamento. Uma parceria que gera resultados excepcionais.",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array(count).fill(0).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionWrapper className="text-center mb-20">
          <span className="inline-block text-[#F59E0B] text-sm font-bold uppercase tracking-[0.25em] mb-4">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Quem construiu com a{" "}
            <span className="gradient-text">Barra Nova</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Mais de 400 famílias e empresas que confiam na nossa qualidade e comprometimento.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionWrapper key={t.name}>
              <div
                className="glass-card p-7 h-full flex flex-col gap-5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Quote icon */}
                <div className="text-4xl text-[#F59E0B]/30 font-serif leading-none">"</div>

                <StarRating count={t.rating} />

                <p className="text-white/80 leading-relaxed flex-1 text-sm">
                  {t.text}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#F59E0B]/30"
                  />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-[#6B7280] text-xs">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Trust bar */}
        <SectionWrapper className="mt-20">
          <div className="glass-card p-8 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center">
            {[
              { label: "Google Reviews", value: "4.9★", sub: "+120 avaliações" },
              { label: "Facebook", value: "4.8★", sub: "+80 avaliações" },
              { label: "Reclame Aqui", value: "Ótimo", sub: "0 reclamações" },
              { label: "ISO 9001", value: "✓", sub: "Certificado" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">{item.label}</p>
                <p className="text-[#F59E0B] text-2xl font-black">{item.value}</p>
                <p className="text-[#6B7280] text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
