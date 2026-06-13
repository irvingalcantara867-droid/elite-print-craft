import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios Profesionales — PAP·G" },
      {
        name: "description",
        content:
          "Explora nuestros servicios de impresión UV, corte y grabado láser CO2, router CNC y doblado automático de acrílico.",
      },
    ],
  }),
});
