import { getCollection, type CollectionEntry } from "astro:content";

type Noticia = CollectionEntry<"noticias">;

// Las fechas de las noticias se escriben sin hora, así que se tratan en UTC
// para que no se desplacen un día según la zona horaria del servidor.
const formatoDia = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const formatoMes = new Intl.DateTimeFormat("es-ES", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// Los eventos muestran el día del evento; el resto, el mes de publicación.
export function fechaVisible({ data }: Noticia): string {
  return data.evento
    ? formatoDia.format(data.evento.fecha)
    : formatoMes.format(data.fecha);
}

export async function getNoticiasOrdenadas(): Promise<Noticia[]> {
  const noticias = await getCollection("noticias");

  return noticias.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}
