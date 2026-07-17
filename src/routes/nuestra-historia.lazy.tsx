import { createLazyFileRoute } from "@tanstack/react-router";
import { Nav, Footer, WhatsAppFloat } from "@/components/layout/Layout";
import logoPapg from "@/assets/PAPG.avif";

export const Route = createLazyFileRoute("/nuestra-historia")({
  component: NuestraHistoria,
});

function NuestraHistoria() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-6xl px-6 pt-36 pb-24">
        {/* Section 1: Quiénes somos */}
        <section className="relative">
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[600px] rounded-full bg-[var(--gold)] opacity-[0.05] blur-[130px]" />

          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">— Conócenos</p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight font-medium">
              Quiénes somos
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gold-soft font-serif italic max-w-3xl leading-relaxed">
              Brindamos soluciones integrales en grabado, corte y personalización de productos.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Description */}
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Contamos con tecnología de impresión, router CNC, navajas, plegado y corte láser de
                alta precisión, lo que nos permite transformar ideas en piezas únicas con excelente
                calidad, creatividad y atención al detalle.
              </p>
              <p>
                Nos enfocamos en convertir cada concepto en un producto concreto que refleje
                identidad, estilo y profesionalismo, aportando valor y distinción en cada proyecto.
              </p>
              <p>
                Nuestro objetivo es ofrecer resultados de alto nivel, combinando innovación,
                precisión y tecnología de última generación, siempre comprometidos con el
                crecimiento de nuestros clientes y la excelencia en cada servicio.
              </p>
            </div>

            {/* Logo Framed Card */}
            <div className="relative flex justify-center items-center">
              {/* Backlight glow */}
              <div className="absolute -inset-6 bg-gradient-gold opacity-[0.08] blur-3xl pointer-events-none rounded-full" />

              <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white p-10 flex justify-center items-center shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all duration-500 w-full max-w-[380px] aspect-square">
                <img
                  src={logoPapg}
                  alt="PAP·G Logo — Imprimiendo Ideas"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[280px] h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="my-24 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-border" />
          <span className="h-2 w-2 rotate-45 bg-gold" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Section 2: Nuestra historia */}
        <section className="relative max-w-4xl mx-auto">
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[600px] rounded-full bg-[var(--gold)] opacity-[0.05] blur-[130px]" />

          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">— Nuestra Trayectoria</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-tight font-medium">
              Nuestra historia
            </h2>
          </div>

          {/* Timeline flow */}
          <div className="relative border-l border-border/60 pl-8 ml-4 md:ml-8 space-y-12">
            <div className="relative group">
              <span className="absolute -left-[37px] md:-left-[53px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold bg-background transition-colors group-hover:bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                <strong>PAP·G</strong> nace como una idea impulsada por la pasión por el diseño, la
                creatividad y la precisión. Desde nuestros inicios, buscamos transformar conceptos
                en productos reales, utilizando tecnología avanzada y un enfoque profesional.
              </p>
            </div>

            <div className="relative group">
              <span className="absolute -left-[37px] md:-left-[53px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold bg-background transition-colors group-hover:bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Fundada por emprendedores con visión, la empresa se ha desarrollado combinando
                innovación, compromiso y confianza, ofreciendo servicios especializados en corte,
                grabado e impresión.
              </p>
            </div>

            <div className="relative group">
              <span className="absolute -left-[37px] md:-left-[53px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold bg-background transition-colors group-hover:bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                A lo largo del tiempo, hemos crecido manteniendo un objetivo claro: brindar
                soluciones personalizadas, cumplir con altos estándares de calidad y superar las
                expectativas de cada cliente.
              </p>
            </div>

            <div className="relative group">
              <span className="absolute -left-[37px] md:-left-[53px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold bg-background transition-colors group-hover:bg-gold" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Hoy seguimos evolucionando, enfrentando nuevos retos y consolidándonos como una
                empresa enfocada en crear resultados que realmente marcan la diferencia.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
