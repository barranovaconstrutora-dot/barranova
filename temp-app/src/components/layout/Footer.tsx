"use client";
import * as React from "react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
  color?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "(85) 9 8777-0381",
    sub: "Telefone/WhatsApp",
    href: "https://wa.me/5585987770381",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Caucaia, Ceará — Brasil",
    sub: "Atendimento Regional",
    href: "https://maps.google.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "contato@barranovaconstrutora.com.br",
    sub: "E-mail",
    href: "mailto:contato@barranovaconstrutora.com.br",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "R Eliezer de Freitas Guimarães, 738 B",
    sub: "Icaraí, Caucaia-CE",
    href: "https://maps.google.com?q=R+ELIEZER+DE+FREITAS+GUIMARAES+738+B+ICARAI+CAUCAIA+CE",
  },
];

const footerLinks = {
  Empresa: ["Sobre Nós", "Missão e Valores", "Nossa Equipe", "Certificações"],
  Serviços: ["Construção de Edifícios", "Telecomunicações", "Instalações Elétricas", "Impermeabilização", "Materiais de Construção", "Serviços Multimídia"],
  Legal: ["Política de Privacidade", "Termos de Uso", "LGPD"],
};

export function Footer() {
  return (
    <footer id="contato" className="relative bg-[#070E1A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />
      
      {/* Contact info */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-[#F59E0B]/30">
                <img src="/logo.png" alt="Logo" className="h-full w-full object-contain p-1" />
              </div>
              <div>
                <span className="text-xl font-black text-white block">Barra Nova</span>
                <span className="text-xs text-[#6B7280]">Construtora</span>
              </div>
            </div>

            <p className="text-[#6B7280] leading-relaxed max-w-sm">
              Desde 2017 construindo com qualidade, inovação e compromisso em Icaraí, Caucaia e toda a região metropolitana.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "#", icon: "📸" },
                { label: "Facebook", href: "#", icon: "📘" },
                { label: "LinkedIn", href: "#", icon: "💼" },
                { label: "YouTube", href: "#", icon: "🎥" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg hover:border-[#F59E0B]/40 hover:scale-110 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`glass-card p-3 flex items-start gap-3 hover:border-[#F59E0B]/30 transition-all duration-300 group ${item.color ?? "text-[#F59E0B]"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center border border-current/20 shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-semibold text-[11px] break-words" title={item.label}>{item.label}</p>
                  <p className="text-[#6B7280] text-[9px] mt-0.5 break-words">{item.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="glass-card overflow-hidden h-52 mb-16 flex items-center justify-center">
          <iframe
            title="Localização Barra Nova Construtora"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.4678144066!2d-38.653457!3d-3.681177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748c9c0b000001%3A0x0!2zUkVMSUVaRVIgREUgRlJFSVRBUyBHVUlNQVLDhUVTLCA3MzggQiAtIEljYXJhw60sIENhdWNhaWEgLSBDRSwgNjEuNjI0LTMyMg!5e0!3m2!1spt-BR!2sbr!4v1710170000000!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0 opacity-70"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#6B7280] text-sm hover:text-[#F59E0B] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Site</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {["Início", "Sobre", "Serviços", "Portfólio", "Depoimentos", "Orçamento"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-[#6B7280] hover:text-[#F59E0B] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm text-center">
            © {new Date().getFullYear()} Barra Nova Construtora. Todos os direitos reservados.
          </p>
          <p className="text-[#6B7280] text-xs text-center">
            CNPJ: 28.540.164/0001-20
          </p>
        </div>
      </div>
    </footer>
  );
}
