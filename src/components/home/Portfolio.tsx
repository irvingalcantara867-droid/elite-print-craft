import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";

const PORTFOLIO_PREVIEWS = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Portfolio() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PORTFOLIO_PREVIEWS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Text and CTA */}
        <div className="space-y-6 animate-[fade-up_.8s_ease-out]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">— Portafolio</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
              Nuestros
              <br />
              <span className="italic text-muted-foreground">Proyectos</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg leading-relaxed max-w-xl">
            Explora nuestra galería de trabajos terminados donde fusionamos diseño, precisión y
            materiales premium. Cada pieza refleja nuestro compromiso con la excelencia en corte
            láser, grabado personalizado e impresión de alta definición.
          </p>
          <div className="pt-2">
            <Link
              to="/portafolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Ver portafolio completo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Rotating Image Card */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-card">
          {PORTFOLIO_PREVIEWS.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={img}
                alt={`Proyecto Destacado ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
                  idx === currentIdx ? "scale-100" : "scale-105"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
