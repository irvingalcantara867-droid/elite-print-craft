import { Link } from "@tanstack/react-router";
import { Layers, BookOpen, Package, Megaphone, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    icon: Layers,
    num: "01",
    title: "Servicios",
    desc: "Soluciones integrales en corte y grabado. Ofrecemos servicios de corte con láser que transforman tus ideas en productos de alta calidad. Con acabados profesionales y precisión, adaptamos cada proyecto a tus necesidades específicas.",
    tags: ["Precisión", "Corte Limpio", "MDF y Acrílico"],
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Impresión",
    desc: "Impresión de alta calidad y precisión. Contamos con tecnología avanzada para la impresión de tus diseños. Garantizamos acabados duraderos y de alta calidad que complementan perfectamente el corte y grabado.",
    tags: ["Impresión UV", "Color Vibrante", "Alta Durabilidad"],
  },
  {
    icon: Package,
    num: "03",
    title: "Diseño",
    desc: "Diseño personalizado para cada proyecto. Nuestro equipo crea diseños únicos que se ajustan a tus requerimientos. Cada proyecto es una oportunidad para innovar y ofrecer resultados que realmente destaquen en el mercado.",
    tags: ["Diseño Personalizado", "Modelado 3D", "Innovación"],
  },
  {
    icon: Megaphone,
    num: "04",
    title: "Grabado",
    desc: "Grabado preciso en diversos materiales. Ofrecemos grabado láser en una variedad de materiales, asegurando que cada detalle se reproduzca con precisión. Ideal para personalizar productos y hacerlos únicos.",
    tags: ["Grabado de Precisión", "Personalización", "Detalle Fino"],
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
    setCurrent(index);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setCurrent(Math.min(idx, services.length - 1));
  };

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">— Servicios</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Nuestros
            <br />
            <span className="italic text-muted-foreground">Servicios</span>
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Ofrecemos soluciones profesionales de corte láser, grabado de precisión, impresión UV y
            diseño personalizado. Con tecnología de vanguardia, transformamos tus ideas en productos
            tangibles de la más alta calidad y acabado profesional.
          </p>
          <div>
            <Link
              to="/servicios"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Ver todos los servicios
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop static grid view */}
      <div className="mt-16 hidden md:grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative bg-card p-8 md:p-10 transition-colors hover:bg-secondary"
          >
            <div className="flex items-start justify-between">
              <span className="font-serif text-sm text-muted-foreground">{s.num}</span>
              <s.icon className="h-5 w-5 text-gold transition-transform group-hover:scale-110" />
            </div>
            <h3 className="mt-10 font-serif text-3xl md:text-4xl">{s.title}</h3>
            <p className="mt-4 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#quote"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition-opacity group-hover:opacity-100"
            >
              Consultar sobre este servicio <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      {/* Mobile native scroll-snap carousel — no library, no setInterval */}
      <div className="mt-12 block md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex-none w-[88%] rounded-3xl border border-border bg-card p-8 snap-start"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-muted-foreground">{s.num}</span>
                <s.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-10 font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-h-[100px]">
                {s.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#quote"
                className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                Consultar sobre este servicio <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "bg-gold w-6" : "bg-muted-foreground/30 w-2.5"
              }`}
              aria-label={`Ir al servicio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
