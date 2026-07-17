import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Nav, Footer, WhatsAppFloat } from "@/components/layout/Layout";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  BookOpen,
  Package,
  Megaphone,
  Check,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";
import laserCuttingHero from "@/assets/laser-cutting-hero.png";
import papgLogo from "@/assets/PAPG.avif";
import logoPng from "@/assets/LOGO.png";

// Lazy-loaded components for mobile performance optimization
const Services = lazy(() => import("@/components/home/Services"));
const Portfolio = lazy(() => import("@/components/home/Portfolio"));
const Quote = lazy(() => import("@/components/home/Quote"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PAP·G — Corte y Grabado Láser" },
      {
        name: "description",
        content:
          "Explora la precisión y calidad en corte láser, impresión UV, grabado y corte router con tecnología de vanguardia.",
      },
      { property: "og:title", content: "PAP·G — Corte y Grabado Láser" },
      {
        property: "og:description",
        content:
          "Ofrecemos servicios de corte láser, impresión de alta precisión y grabado personalizado para llevar tus ideas a la realidad.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || typeof target.closest !== "function") return;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && (href.startsWith("#") || href.startsWith("/#"))) {
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
        if (hash) {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            if (window.location.hash !== hash) {
              window.history.pushState(null, "", hash);
            }
          }
        }
      }
    };

    const scrollToInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    document.addEventListener("click", handleHashLinkClick);
    scrollToInitialHash();

    return () => {
      document.removeEventListener("click", handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-card/20 rounded-3xl" />}>
        <Services />
      </Suspense>
      <AboutUs />
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-card/20 rounded-3xl" />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-card/20 rounded-3xl" />}>
        <Quote />
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* ambient gold blur */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.82_0.11_85_/_0.08),transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:pb-32">
        <div className="animate-[fade-up_.8s_ease-out]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Est. 2018 · Precisión y Calidad
          </span>
          <h1 className="mt-6 font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-medium">
            Explora la precisión y calidad en{" "}
            <span className="italic text-gradient-gold">corte láser</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Nuestro equipo está listo para llevar tus ideas a la realidad con tecnología de
            vanguardia y acabados profesionales.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Explorar Catálogo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Iniciar Proyecto
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["1.2K+", "Clientes felices"],
              ["8", "Años de experiencia"],
              ["48h", "Cotización promedio"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl md:text-4xl text-gradient-gold">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border animate-[fade-up_1s_ease-out]">
          <img
            src={laserCuttingHero}
            alt="Corte láser de precisión en acrílico con luz de fondo y chispas doradas"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Técnica destacada
                </p>
                <p className="font-serif text-xl text-foreground">Corte y Grabado Láser</p>
              </div>
              <a
                href="#services"
                className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground hover:scale-105 transition-transform"
                aria-label="Ver servicios"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Corte Láser",
    "Grabado Láser",
    "Impresión UV",
    "Corte Router CNC",
    "Acrílico Premium",
    "Diseño de Vanguardia",
    "Acabado Profesional",
    "MDF y Madera",
  ];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-6">
        <span className="shrink-0 text-xs uppercase tracking-[0.3em] text-muted-foreground z-10 bg-background/80 pr-4">
          Técnicas
        </span>
        <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 text-sm text-gold">
            {items.concat(items).map((t, i) => (
              <span key={i} className="flex shrink-0 items-center gap-3 font-serif text-lg">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-36 border-t border-border">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">— ¿Quiénes somos?</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">“Quiénes somos”</h2>
          <p className="mt-6 text-xl text-gold-soft font-serif italic">
            Innovación, precisión y creatividad en cada proyecto.
          </p>
          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              En PAP·G transformamos ideas en productos reales. Combinamos impresión UV, corte
              router y láser para ofrecer soluciones creativas, precisas y de alta calidad.
              Trabajamos con empresas, emprendedores y proyectos personalizados que buscan destacar
              con acabados profesionales.
            </p>
            <p>
              Nuestro objetivo es ayudarte a llevar tus ideas al siguiente nivel con resultados que
              realmente marcan la diferencia.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/nuestra-historia"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Conocer más
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-white flex justify-center items-center p-8">
          <img
            src={papgLogo}
            alt="PAP·G Logo — Imprimiendo Ideas"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}


