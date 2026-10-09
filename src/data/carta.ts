// Carta completa. La página /carta y el resumen de la portada salen de aquí.

interface Plato {
  nombre: string;
  descripcion?: string;
  precio: number;
}

interface Categoria {
  titulo: string;
  descripcion?: string;
  platos: Plato[];
}

export const carta: Categoria[] = [
  {
    titulo: "Para compartir",
    platos: [
      { nombre: "Pinchitos", precio: 2.5 },
      { nombre: "Montados de lomo", precio: 2.5 },
      { nombre: "Ración de rejos", precio: 10 },
      { nombre: "Ración de calamares", precio: 10 },
      { nombre: "Ración de patatas", precio: 5 },
      { nombre: "Plato de jamón", precio: 12 },
      { nombre: "Plato de queso", precio: 12 },
    ],
  },
  {
    titulo: "Bocadillos",
    platos: [
      {
        nombre: "Bocadillo de pollo",
        descripcion: "Lechuga, tomate y cebolla.",
        precio: 5,
      },
      {
        nombre: "Bocadillo de lomo",
        descripcion: "Lechuga, tomate y cebolla.",
        precio: 5,
      },
      { nombre: "Bocadillo de bacon y queso", precio: 5 },
      {
        nombre: "Bocadillo vegetal",
        descripcion: "Lechuga, tomate, atún y cebolla.",
        precio: 5,
      },
    ],
  },
  {
    titulo: "Hamburguesas",
    platos: [
      {
        nombre: "Hamburguesa simple",
        descripcion: "Lechuga, tomate, cebolla y queso.",
        precio: 4,
      },
      {
        nombre: "Hamburguesa Miami",
        descripcion:
          "Carne de ternera, lechuga, tomate, cebolla, cebolla crispy, doble queso cheddar y bacon.",
        precio: 8,
      },
    ],
  },
  {
    titulo: "Paninis",
    platos: [
      { nombre: "Panini de atún", precio: 5 },
      { nombre: "Panini de jamón York y queso", precio: 5 },
    ],
  },
  {
    titulo: "Ingredientes extra",
    descripcion: "Para bocadillos y hamburguesas.",
    platos: [
      { nombre: "Bacon", precio: 0.5 },
      { nombre: "Queso", precio: 0.5 },
    ],
  },
];

function precioDe(nombre: string): number {
  const plato = carta
    .flatMap((categoria) => categoria.platos)
    .find((plato) => plato.nombre === nombre);

  if (!plato) {
    throw new Error(`El plato "${nombre}" no existe en la carta.`);
  }

  return plato.precio;
}

// Resumen de la portada. El precio se toma de la carta para que nunca
// haya dos precios distintos para el mismo plato.
export const destacados: Plato[] = [
  { nombre: "Montados", precio: precioDe("Montados de lomo") },
  { nombre: "Rejos", precio: precioDe("Ración de rejos") },
  { nombre: "Calamares", precio: precioDe("Ración de calamares") },
  {
    nombre: "Bocadillos",
    descripcion: "Lomo, bacon o pollo.",
    precio: precioDe("Bocadillo de lomo"),
  },
  { nombre: "Hamburguesas", precio: precioDe("Hamburguesa simple") },
];

const formatoPrecio = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function formatearPrecio(precio: number): string {
  return formatoPrecio.format(precio);
}
