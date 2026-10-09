import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada archivo .md de src/content/noticias es una noticia.
// El nombre del archivo es la URL: halloween-2026.md -> /noticias/halloween-2026
const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    titulo: z.string(),
    // Título de la pestaña y de Google. Si no se pone: "<titulo> | Terraza Miami".
    tituloSeo: z.string().optional(),
    descripcion: z.string(),
    // Texto pequeño que aparece encima del título.
    etiqueta: z.string(),
    // Fecha de publicación: ordena las noticias (la más reciente primero).
    fecha: z.coerce.date(),
    // Imagen de la tarjeta del listado. Dentro de la noticia solo se muestra
    // si no hay galería (por ejemplo, el cartel de un evento).
    imagen: z.object({ src: z.string(), alt: z.string() }).optional(),
    galeria: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),

    // Solo para eventos: la fecha del evento y los datos de la ficha.
    evento: z
      .object({
        fecha: z.coerce.date(),
        detalles: z.array(z.object({ etiqueta: z.string(), valor: z.string() })),
        destacados: z.array(
          z.object({ icono: z.string(), titulo: z.string(), texto: z.string() }),
        ),
      })
      .optional(),
  }),
});

export const collections = { noticias };
