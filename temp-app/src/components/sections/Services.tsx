"use client";
import * as React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Construção de Edifícios",
    desc: "Execução completa de obras residenciais e comerciais com alto padrão de qualidade e conformidade técnica.",
    features: ["Obras Civis", "Gestão de Projetos", "Alto Padrão"],
    color: "#F59E0B",
    image: "/images/real/management-site.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Estações de Telecomunicações",
    desc: "Construção de infraestrutura robusta para estações e redes de telecomunicações de alta performance.",
    features: ["Redes de Dados", "Infraestrutura BT", "Estações Rádio"],
    color: "#38BDF8",
    image: "/images/real/telecom-servers.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75" />
      </svg>
    ),
    title: "Manutenção de Redes",
    desc: "Suporte especializado e manutenção preventiva/corretiva em redes de telecomunicações e fibra óptica.",
    features: ["Certificação", "Manutenção 24/7", "Equipe Técnica"],
    color: "#10B981",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.151L14.25 2.25 12 10.5h8.25l-4.745 5.512m-6.255-2.512l1.916-1.99" />
      </svg>
    ),
    title: "Instalação Elétrica",
    desc: "Projetos e manutenção elétrica residencial, predial e industrial com máxima segurança e economia.",
    features: ["Baixa/Média Tensão", "Laudos Técnicos", "Eficiência"],
    color: "#A855F7",
    image: "/images/real/electrical-work.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Impermeabilização",
    desc: "Soluções avançadas contra umidade e infiltrações para garantir a durabilidade e integridade das estruturas.",
    features: ["Lajes e Muros", "Produtos Químicos", "Garantia Total"],
    color: "#EF4444",
    image: "/images/real/waterproofing.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Varejo de Materiais",
    desc: "Comércio varejista de materiais de construção em geral com ampla variedade e pronta entrega.",
    features: ["Materiais Básicos", "Acabamentos", "Logística"],
    color: "#EAB308",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Serviços Multimídia",
    desc: "Serviços de Comunicação Multimídia (SCM) com tecnologia de ponta para conectividade empresarial.",
    features: ["Link Dedicado", "Infraestrutura SCM", "Conectividade"],
    color: "#6366F1",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.06)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionWrapper className="text-center mb-20">
          <span className="inline-block text-[#F59E0B] text-sm font-bold uppercase tracking-[0.25em] mb-4">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Soluções completas em{" "}
            <span className="gradient-text">construção</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            Da fundação ao acabamento, oferecemos serviços integrados para cada etapa do seu projeto construtivo.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <SectionWrapper key={service.title}>
              <div
                className="glass-card p-8 h-full group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex flex-col gap-6 h-full">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `1px solid ${service.color}30`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                    <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed mb-5">{service.desc}</p>

                    {service.image && (
                      <div className="relative mb-6 rounded-xl overflow-hidden aspect-video group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: service.color }}
                          />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#orcamento"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: service.color }}
                  >
                    Solicitar orçamento
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
