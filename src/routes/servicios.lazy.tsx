import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, WhatsAppFloat } from "./index";
import { ArrowUpRight, Check } from "lucide-react";

import imgImpresionUv from "@/assets/impresion uv.avif";
import imgDobladora from "@/assets/Dobladora de acrílico automática..avif";
import imgImpresoraUvLed from "@/assets/Impresora de inyeccion de tinta UV-LED.avif";
import imgLaserCo2 from "@/assets/Láser CO2..avif";
import imgRouterCnc from "@/assets/ROUTER CNC..avif";

export const Route = createLazyFileRoute("/servicios")({
  component: Servicios,
});

const SERVICES_DETAILS = [
  {
    img: imgImpresionUv,
    title: "Impresión UV.",
    desc: "Utiliza tinta UV, trabajamos en materiales con hasta 7cm de espesor el tipo de impresión es a base de inyección de tinta.",
    materials: [
      "Cartón",
      "Madera",
      "MDF",
      "Aluminio",
      "Vidrio",
      "Acrílico",
      "Estireno",
      "Coroplast",
      "Trovicel",
    ],
    details: [
      "Aplicable en materiales en rollo o lámina",
      "Utilizados principalmente para la industria de la publicidad",
      "Hasta 7cm de espesor máximo",
    ],
  },
  {
    img: imgDobladora,
    title: "Dobladora de acrílico automática.",
    desc: "Doblamos materiales en diferentes ángulos mediante temperatura con calentadores de uno o varios tubos, funciona para diferentes materiales con un espesor hasta de 9mm y un límite de doblado de 120cm sin generar un sobre calentamiento y evitando curvas no deseadas.",
    materials: ["Acrílico", "Plástico", "Policarbonatos", "PVC", "Polipropileno"],
    details: [
      "Dobles en múltiples ángulos mediante temperatura",
      "Calentadores eficientes de uno o varios tubos",
      "Límite de doblado de hasta 120cm",
      "Soporta espesores de hasta 9mm",
    ],
  },
  {
    img: imgImpresoraUvLed,
    title: "Impresora de inyección de tinta UV-LED.",
    desc: "Impresora de inyección de tinta UV-LED para impresión y corte, combinamos la alta productividad y calidad de imagen con la tecnología de impresión UV.",
    materials: ["Vinilos", "Lonas", "Películas", "Láminas rígidas y rollo"],
    details: [
      "Ancho máximo de impresión/corte: 1610mm",
      "Tinta curable de secado rápido con luz ultravioleta",
      "Resolución Y: 600, 1200 ppp / X: 600, 1200, 1800 ppp",
    ],
  },
  {
    img: imgLaserCo2,
    title: "Láser CO2.",
    desc: "Láser para corte y grabado de materiales de mediana densidad de 2 cabezales, ideal para alta producción.",
    materials: ["Acrílico", "MDF", "Madera", "Triplay", "Vidrio", "Entre otros"],
    details: [
      "Mesa de trabajo de corte de 900x1300mm",
      "Elevación de mesa de hasta 20 cm",
      "Equipada con 2 cabezales de alta velocidad",
    ],
  },
  {
    img: imgRouterCnc,
    title: "ROUTER CNC.",
    desc: "Ofrecemos cortes y plegados precisos sobre materiales de baja y mediana densidad, ideal para producción versátil y de alto detalle.",
    materials: [
      "Madera (sólida, triplay, MDF)",
      "Acrílico",
      "Aluminio",
      "Latón",
      "PVC",
      "Alucobond",
    ],
    details: [
      "Cortes y plegados para espesores desde 0.36mm",
      "Para estanterías, ensambles, letras 3D, relieves",
      "Moldes para termoformado y logotipos corporativos",
    ],
  },
];

function Servicios() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24 animate-[fade-up_.8s_ease-out]">
        {/* Hero Header */}
        <section className="relative text-center max-w-4xl mx-auto mb-24">
          {/* Ambient glow light */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)] opacity-[0.06] blur-[120px]" />

          <p className="text-xs uppercase tracking-[0.3em] text-gold">— Soluciones de Precisión</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight font-medium">
            Servicios
          </h1>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base text-left md:text-center max-w-3xl mx-auto">
            <p>
              En <strong>PAP·G</strong> ofrecemos soluciones integrales en fabricación,
              personalización y producción de piezas con tecnología de alta precisión. Contamos con
              maquinaria especializada como corte y grabado láser, ruteo CNC, impresión UV y
              procesos de acabado que nos permiten transformar cualquier idea en un producto real,
              funcional y de alta calidad.
            </p>
            <p>
              Trabajamos con una amplia variedad de materiales como MDF, acrílico, PVC, aluminio
              compuesto y más, desarrollando desde piezas decorativas y personalizadas hasta
              exhibidores, señalética, mobiliario comercial y proyectos a gran escala.
            </p>
            <p>
              Nuestro enfoque combina creatividad, innovación y precisión, cuidando cada detalle en
              el proceso para garantizar resultados profesionales. Nos adaptamos a las necesidades
              de cada cliente, brindando soluciones a medida para marcas, negocios y proyectos
              personalizados.
            </p>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DETAILS.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-6 hover:border-gold/30 hover:bg-card transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover-lift flex flex-col justify-between"
            >
              {/* Backlight on card hover */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gold/5 opacity-0 blur-3xl group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Machine Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/80 bg-background mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Title */}
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{s.title}</h2>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>

              <div>
                {/* Materials Tags */}
                <div className="mt-6 pt-6 border-t border-border/60">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                    Materiales:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {s.materials.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-secondary/50 border border-border/80 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specs List */}
                <div className="mt-4 pt-4 border-t border-border/40">
                  <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
                    Detalles Técnicos:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Quote Section */}
        <section className="relative overflow-hidden mt-24 rounded-[3rem] border border-border bg-[var(--gradient-dark)] p-8 md:p-16 text-center">
          <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--gold)] opacity-[0.04] blur-[100px]" />

          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Compártenos tus bosquejos o ideas y nuestro equipo técnico te ayudará a seleccionar el
              mejor material y técnica para hacerlo realidad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/525548070501"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
              >
                Solicitar Cotización <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                hash="quote"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver Configurador
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
