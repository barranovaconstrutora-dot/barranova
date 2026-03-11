"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all duration-300 group-hover:scale-110">
            <img 
              src="/logo.png" 
              alt="Barra Nova Construtora Logo" 
              className="h-full w-full object-contain p-1"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block font-sans">
            Barra Nova Construtora
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#F59E0B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="glow" asChild>
            <a href="#orcamento">Solicitar Orçamento</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          <nav className="flex flex-col gap-5 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <Button variant="glow" className="w-full" asChild>
            <a href="#orcamento" onClick={() => setMobileMenuOpen(false)}>
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
