import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portafolio")({
  head: () => ({
    meta: [
      { title: "Portafolio de Proyectos — PAP·G" },
      {
        name: "description",
        content:
          "Explora nuestra selección de proyectos destacados en corte láser, grabado personalizado e impresión UV de alta precisión.",
      },
    ],
  }),
});
