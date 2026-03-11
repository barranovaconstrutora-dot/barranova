"use client";
import * as React from "react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const obraTypes = [
  "Selecione o tipo de obra",
  "Casa Residencial",
  "Prédio Residencial",
  "Prédio Comercial",
  "Galpão Industrial",
  "Reforma Residencial",
  "Reforma Comercial",
  "Projeto Arquitetônico",
  "Outro",
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="orcamento" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionWrapper className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-bold uppercase tracking-[0.25em] mb-4">Orçamento</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Solicite seu{" "}
            <span className="gradient-text">orçamento</span>
            <br />
            gratuito
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas com a melhor proposta para o seu projeto.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <SectionWrapper className="lg:col-span-2 flex flex-col gap-8">
            <div className="glass-card p-7 flex flex-col gap-6">
              <h3 className="text-white font-bold text-xl">Por que escolher a Barra Nova?</h3>
              {[
                { icon: "⚡", label: "Resposta em 24h", desc: "Orçamento detalhado e sem compromisso." },
                { icon: "🎯", label: "Proposta personalizada", desc: "Soluções sob medida para cada projeto." },
                { icon: "🔒", label: "Garantia total", desc: "Segurança e tranquilidade em cada etapa." },
                { icon: "📐", label: "Equipe especializada", desc: "Engenheiros e arquitetos certificados." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5585987770381?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card p-5 hover:border-green-400/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/40 shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.536 5.854L0 24l6.323-1.62A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.75-.5-5.329-1.374l-.378-.222-3.755.963.999-3.645-.245-.386A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Atendimento via WhatsApp</p>
                <p className="text-[#6B7280] text-xs mt-0.5">(85) 9 8777-0381 — Segunda a Sábado</p>
              </div>
            </a>
          </SectionWrapper>

          {/* Right form */}
          <SectionWrapper className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/50">
                    <svg className="w-10 h-10 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Solicitação enviada!</h3>
                    <p className="text-[#6B7280] mt-2">Nossa equipe entrará em contato em até 24 horas.</p>
                  </div>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Enviar nova solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-white/70">Nome completo *</label>
                      <input required type="text" placeholder="Seu nome" className="form-input" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-white/70">Telefone/WhatsApp *</label>
                      <input required type="tel" placeholder="(85) 9 8777-0381" className="form-input" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/70">E-mail *</label>
                    <input required type="email" placeholder="seu@email.com" className="form-input" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/70">Tipo de obra *</label>
                    <select required className="form-input">
                      {obraTypes.map((t) => (
                        <option key={t} value={t === obraTypes[0] ? "" : t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/70">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva seu projeto, tamanho, prazo desejado..."
                      className="form-input resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="mt-2 w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Solicitar Orçamento Gratuito"
                    )}
                  </Button>

                  <p className="text-center text-xs text-[#6B7280]">
                    Seus dados estão protegidos. Não fazemos spam.
                  </p>
                </form>
              )}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
