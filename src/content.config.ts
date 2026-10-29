import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const imagen = z.object({ src: z.string(), alt: z.string() });

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
    // si no hay galería ni programa (por ejemplo, el cartel de un evento).
    imagen: imagen.optional(),
    // Cartel que se muestra arriba en la noticia, aunque también haya galería.
    cartel: imagen.optional(),
    galeria: z.array(imagen).optional(),

    // Solo para eventos: la fecha del evento y los datos de la ficha.
    evento: z
      .object({
        fecha: z.coerce.date(),
        detalles: z.array(z.object({ etiqueta: z.string(), valor: z.string() })),
        destacados: z
          .array(
            z.object({ icono: z.string(), titulo: z.string(), texto: z.string() }),
          )
          .optional(),
        // Actividades del día, cada una con su hora y su cartel.
        programa: z
          .array(
            z.object({
              hora: z.string(),
              titulo: z.string(),
              texto: z.string(),
              cartel: imagen,
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { noticias };
