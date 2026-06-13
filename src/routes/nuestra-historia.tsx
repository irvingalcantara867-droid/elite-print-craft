import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nuestra-historia")({
  head: () => ({
    meta: [
      { title: "Nuestra Historia — PAP·G" },
      {
        name: "description",
        content:
          "Conoce más sobre la historia, fundadores y visión de PAP·G, líderes en grabado, corte y personalización de productos.",
      },
    ],
  }),
});
