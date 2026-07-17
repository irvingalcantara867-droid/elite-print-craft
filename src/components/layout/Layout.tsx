import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Layers,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import logoPng from "@/assets/LOGO.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#top", label: "Inicio" },
    { href: "/servicios", label: "Servicios", isRouterLink: true },
    { href: "/nuestra-historia", label: "Nuestra Historia", isRouterLink: true },
    { href: "/portafolio", label: "Portafolio", isRouterLink: true },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`glass flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "shadow-[var(--shadow-elegant)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logoPng}
              alt="Logo PAP·G"
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif text-lg tracking-tight">
              PAP<span className="text-gold">·G</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) =>
              l.isRouterLink ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/525548070501"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
            >
              Solicitar Cotización <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-border"
              aria-label="Menú"
            >
              {open ? <Check className="h-4 w-4" /> : <Layers className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="glass mt-2 rounded-3xl p-6 md:hidden animate-[fade-up_.3s_ease-out]">
            <div className="flex flex-col gap-4">
              {links.map((l) =>
                l.isRouterLink ? (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ),
              )}
              <a
                href="https://wa.me/525548070501"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Solicitar Cotización <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const phoneRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setShowPhoneMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoPng}
              alt="Logo PAP·G"
              className="h-9 w-9 object-contain"
            />
            <span className="font-serif text-xl">
              PAP<span className="text-gold">·G</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Líderes en corte láser, grabado e impresión UV con tecnología de vanguardia.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/share/1GDsXJnpic/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/papg.2025?igsh=MXFuOGZpc3c1amk1cw=="
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Taller</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href="https://maps.app.goo.gl/8Udz335AuGBcDtAt9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                Violeta 9, colonia la cañada, 53570, Naucalpan de Juárez, Méx
              </a>
            </li>
            <li className="relative flex items-start gap-2" ref={phoneRef}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col">
                <button
                  onClick={() => setShowPhoneMenu(!showPhoneMenu)}
                  className="hover:text-gold transition-colors text-left outline-none cursor-pointer"
                >
                  +52 55 4807 0501
                </button>
                {showPhoneMenu && (
                  <div className="absolute bottom-full left-0 mb-2 z-50 w-52 rounded-2xl border border-border bg-card p-2 shadow-xl">
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+525548070501"
                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                        onClick={() => setShowPhoneMenu(false)}
                      >
                        <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                        Llamada telefónica
                      </a>
                      <a
                        href="https://wa.me/525548070501"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                        onClick={() => setShowPhoneMenu(false)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 fill-gold shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chatear por WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{" "}
              <a
                href="mailto:publicartsprint.galvan@gmail.com"
                className="hover:text-gold transition-colors"
              >
                publicartsprint.galvan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Horario</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex justify-between">
              <span>Lun — Vie</span>
              <span>09:00 — 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado</span>
              <span>10:00 — 14:00</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Boletín</p>
          <p className="mt-5 text-sm text-muted-foreground">
            Boletín mensual sobre corte, grabado y técnicas de diseño con tecnología láser e
            impresión.
          </p>
          <div className="mt-5 flex items-center gap-0 rounded-full border border-border bg-background/60 p-1.5 focus-within:border-gold">
            <input
              type="email"
              placeholder="correo@estudio.com"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/60"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-gradient-gold px-4 py-2 text-xs font-medium text-primary-foreground"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} PAP·G · Todos los derechos reservados.</p>
          <p>Creado con esmero · México</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/525548070501"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-110"
      aria-label="Chatear en WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute top-0 right-0 grid h-3.5 w-3.5 place-items-center">
        <span className="relative h-2.5 w-2.5 rounded-full bg-gold" />
      </span>
    </a>
  );
}
