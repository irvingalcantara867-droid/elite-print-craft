import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Nav, Footer, WhatsAppFloat } from "./index";

import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";

export const Route = createLazyFileRoute("/portafolio")({
  component: Portafolio,
});

const portfolio = [
  {
    img: img1,
    title: "Esfera Navideña de Madera",
    category: "Corte",
    techniques: ["Corte Láser", "Madera MDF", "Personalizado"],
    description:
      "Esfera decorativa navideña troquelada en madera MDF con tipografía personalizada y motivos de copos de nieve calados con precisión láser.",
  },
  {
    img: img2,
    title: "Exhibidor de Acrílico para Cosméticos",
    category: "Diseño",
    techniques: ["Acrílico Cristal", "Termoformado", "Impresión UV"],
    description:
      "Organizador expositor publicitario de cosmética fabricado en acrílico de alta transparencia con base impresa en cama plana UV.",
  },
  {
    img: img3,
    title: "Silueta Artística de Madera",
    category: "Corte",
    techniques: ["Corte Láser", "Madera Chapa", "Arte Lineal"],
    description:
      "Pieza decorativa artística con corte de contorno de alta precisión que plasma un perfil femenino entrelazado con ramas detalladas.",
  },
  {
    img: img4,
    title: "Standees de Acrílico Coleccionables",
    category: "Diseño",
    techniques: ["Acrílico Cristal", "Impresión UV", "Troquelado Láser"],
    description:
      "Figuras de acrílico personalizadas con impresión a registro a todo color y base transparente desmontable de encastre perfecto.",
  },
  {
    img: img5,
    title: "Etiquetas Autoadheribles Premium",
    category: "Diseño",
    techniques: ["Impresión HD", "Vinilo Autoadhesivo", "Resistente al Agua"],
    description:
      "Etiquetas personalizadas a medida para envases cosméticos y veterinarios, con acabados laminados que resisten humedad y fricción.",
  },
  {
    img: img6,
    title: "Exhibidor POP para Punto de Venta",
    category: "Señalización",
    techniques: ["Estructura POP", "Paneles de Acrílico", "Impresión UV Rígida"],
    description:
      "Mueble expositor publicitario de mesa para hilos, con laterales personalizados impresos directamente en cama plana sobre acrílico rígido.",
  },
  {
    img: img7,
    title: "Exhibidores de Piso Pink Up",
    category: "Señalización",
    techniques: ["MDF Pintado", "Corte Router CNC", "Gráficos Impresos"],
    description:
      "Muebles exhibidores de piso diseñados a medida y recortados con router CNC para campañas corporativas en tiendas comerciales.",
  },
  {
    img: img8,
    title: "Exhibidor de Mesa Waggy's",
    category: "Señalización",
    techniques: ["Router CNC", "MDF Pintado", "Impresión UV"],
    description:
      "Organizador expositor de mostrador en MDF recortado con forma de personaje e impresiones gráficas detalladas en alta definición.",
  },
  {
    img: img9,
    title: "Exhibidor Lucky Gummys",
    category: "Grabado",
    techniques: ["Acrílico Cristal", "Corte Láser", "Impresión UV Trasera"],
    description:
      "Letrero y exhibidor comercial con silueta de contorno en acrílico grueso de gran resistencia y excelente reproducción de color.",
  },
];

const filters = ["Todos", "Corte", "Grabado", "Diseño", "Señalización"];

function Portafolio() {
  const [filter, setFilter] = useState("Todos");
  const visible = portfolio.filter((p) => filter === "Todos" || p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24 animate-[fade-up_.8s_ease-out]">
        <section className="relative">
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[600px] rounded-full bg-[var(--gold)] opacity-[0.05] blur-[130px]" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/60 pb-10">
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">— Galería de Proyectos</p>
              <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight font-medium">
                Nuestro Portafolio
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Descubre cómo transformamos ideas en productos reales de la más alta calidad.
                Utilizamos tecnología avanzada en corte y grabado láser, impresión de cama plana UV,
                y fresado CNC para entregar acabados de lujo a cada uno de nuestros clientes.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end shrink-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    filter === f
                      ? "border-transparent bg-foreground text-background font-medium"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-300 hover:border-gold/30 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="rounded-full bg-black/95 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-gold font-semibold">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-card">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground font-medium transition-colors group-hover:text-gold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.techniques.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground bg-background/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/525548070501"
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-105"
                      aria-label={`Cotizar ${p.title}`}
                    >
                      <ArrowUpRight className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Prompt banner to request a quote */}
          <div className="glass mt-20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--gold)] opacity-[0.05] blur-[80px]" />
            <h3 className="font-serif text-3xl md:text-5xl font-medium">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="mt-4 mx-auto max-w-xl text-muted-foreground text-sm md:text-base">
              Hacemos realidad tus diseños personalizados en acrílico, MDF, madera o impresión
              rígida con un acabado premium de corte perfecto.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/525548070501"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
              >
                Solicitar Cotización <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
              >
                Configurar Proyecto
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
