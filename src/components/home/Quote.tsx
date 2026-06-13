import { useState } from "react";
import { Check, Upload, ArrowUpRight } from "lucide-react";

const STEPS = ["Servicio", "Material", "Acabado", "Detalles"];
const SERVICES_OPT = [
  "Corte y Grabado Láser CO2",
  "Impresión UV Rígidos",
  "Impresión y Corte UV-LED",
  "Corte y Plegado Router CNC",
  "Doblado de Acrílico",
  "Letras 3D y Anuncios",
  "Exhibidores y Mobiliario",
  "Artículos Promocionales",
];
const MATERIALS_OPT = [
  "Acrílico (hasta 9mm)",
  "MDF, Madera y Triplay",
  "Aluminio Compuesto / Alucobond",
  "PVC Celular / Trovicel",
  "Estireno y Coroplast",
  "Vidrio, Latón y Metales",
  "Vinil y Lonas Curables",
  "Cartón y Papeles Especiales",
];
const FINISH_OPT = [
  "Corte de Contorno Preciso",
  "Grabado y Bajorrelieve",
  "Doblado y Termoformado",
  "Ensamble y Pegado Estructural",
  "Barniz UV y Tinta Blanca",
  "Corte de Materiales Gruesos",
  "Relieve / Letras 3D",
  "Pintura y Detallado Manual",
];

export default function Quote() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: "",
    material: "",
    finish: "",
    name: "",
    email: "",
    notes: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const isStepValid = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.material;
    if (step === 2) return !!form.finish;
    if (step === 3) return !!form.name.trim() && !!form.email.trim();
    return true;
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Solicitud de Cotización — PAP·G");
    const body = encodeURIComponent(
      `Hola,\n\nHe completado el configurador de cotización con los siguientes detalles:\n\n` +
        `- Servicio: ${form.service}\n` +
        `- Material: ${form.material}\n` +
        `- Acabado: ${form.finish}\n` +
        `- Nombre: ${form.name}\n` +
        `- Correo electrónico: ${form.email}\n` +
        `- Notas del proyecto: ${form.notes}\n` +
        (fileName ? `- Archivo de diseño: ${fileName}\n\n` : `\n`) +
        `Quedo a la espera de su respuesta.`,
    );
    window.location.href = `mailto:publicartsprint.galvan@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--gold)] opacity-[0.06] blur-[140px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">— Solicitar una Cotización</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Cuéntenos sobre su <span className="italic">pieza.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            Un especialista sénior responderá en menos de 48 horas con un dossier detallado:
            muestras de papel, prototipos de técnicas y un desglose de costos transparente.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            {[
              "Muestras de materiales enviadas a solicitud",
              "Prueba de color a pie de prensa incluida",
              "Confidencial: cada proyecto bajo acuerdo de confidencialidad (NDA)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10">
          {/* progress */}
          <div className="flex items-center gap-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-3">
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs transition-all ${
                    i <= step
                      ? "bg-gradient-gold text-primary-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={`h-px flex-1 transition-colors ${
                      i < step ? "bg-gold" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Paso {step + 1} de {STEPS.length} · {STEPS[step]}
          </p>

          {submitted ? (
            <div className="mt-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-3xl">Solicitud recibida.</h3>
              <p className="mt-3 text-muted-foreground">
                Nuestro especialista se pondrá en contacto con usted en un plazo de 48 horas.
              </p>
            </div>
          ) : (
            <div className="mt-8">
              {step === 0 && (
                <OptionGrid
                  options={SERVICES_OPT}
                  value={form.service}
                  onChange={(v) => setForm({ ...form, service: v })}
                />
              )}
              {step === 1 && (
                <OptionGrid
                  options={MATERIALS_OPT}
                  value={form.material}
                  onChange={(v) => setForm({ ...form, material: v })}
                />
              )}
              {step === 2 && (
                <OptionGrid
                  options={FINISH_OPT}
                  value={form.finish}
                  onChange={(v) => setForm({ ...form, finish: v })}
                />
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <Field
                    label="Nombre"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label="Correo electrónico"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Notas del proyecto
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold"
                    />
                  </div>
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-border bg-background/40 px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-gold hover:text-foreground">
                    <Upload className="h-4 w-4 text-gold" />
                    {fileName ? `Archivo: ${fileName}` : "Subir archivo de diseño (PDF, AI, INDD)"}
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                           setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>
              )}

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={step === 0}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                >
                  ← Volver
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={next}
                    disabled={!isStepValid()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Continuar <ArrowUpRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSendEmail}
                    disabled={!isStepValid()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Enviar solicitud <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-2xl border px-5 py-4 text-left text-sm transition-all ${
            value === o
              ? "border-transparent bg-gradient-gold text-primary-foreground shadow-[var(--shadow-gold)]"
              : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
          }`}
        >
          <span className="block font-serif text-lg">{o}</span>
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
