# Terraza Miami

Web de Terraza Miami (Puebla del Prior, Badajoz), hecha con [Astro](https://astro.build) y desplegada en Vercel.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # generar la web en dist/
npm run preview   # ver la versión generada
```

## Dónde se cambia cada cosa

| Quiero cambiar…                                         | Archivo                    |
| ------------------------------------------------------- | -------------------------- |
| Teléfono, dirección, horario, redes, valoración, mapas  | `src/data/negocio.ts`      |
| Platos y precios de la carta (y el resumen de portada)  | `src/data/carta.ts`        |
| Noticias y eventos                                      | `src/content/noticias/`    |
| Estilos                                                 | `src/styles/global.css`    |
| Tipografía de los títulos                               | `astro.config.mjs` (fonts) |

## Añadir una noticia

1. Crea un archivo en `src/content/noticias/`, por ejemplo `navidad-2026.md`.
   El nombre del archivo será la URL: `/noticias/navidad-2026`.
2. Copia la cabecera (lo que va entre `---`) de una noticia existente y rellena los datos.
   - `fecha` es la de publicación y sirve para ordenar el listado.
   - `imagen` es la foto de la tarjeta del listado (las imágenes van en `public/images/`).
   - `galeria` es opcional: si la pones, se muestra al final de la noticia.
   - `evento` es opcional: si es un evento, añade su fecha, los detalles y los destacados.
     Cuando el evento ya ha pasado, la noticia muestra un aviso automáticamente.
3. Debajo de la cabecera escribe el texto en Markdown (`## Título`, `**negrita**`, `[enlace](/carta)`).

La noticia aparece sola en `/noticias`, ordenada por fecha.
