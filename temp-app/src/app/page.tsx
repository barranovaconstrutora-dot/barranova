import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Barra Nova Construtora | Qualidade e Inovação em Construção Civil",
  description:
    "A Barra Nova Construtora transforma projetos em realidade com qualidade premium, tecnologia e excelência em cada detalhe. Construção residencial, comercial, reformas e projetos arquitetônicos em Sergipe.",
  keywords: "construtora, barra nova, construção civil, sergipe, obras, residencial, comercial, reformas, projetos arquitetônicos",
  openGraph: {
    title: "Barra Nova Construtora",
    description: "Construindo o futuro com qualidade e inovação em Sergipe.",
    url: "https://barranovaconstrutora.com.br",
    siteName: "Barra Nova Construtora",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
