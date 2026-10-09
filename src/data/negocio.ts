// Datos del negocio usados en toda la web.
// Si cambia el teléfono, el horario o la valoración, se cambia solo aquí.

const telefono = "675326150";

export const negocio = {
  nombre: "Terraza Miami",

  telefono: {
    visible: "675 326 150",
    enlace: `tel:+34${telefono}`,
  },

  whatsapp: `https://wa.me/34${telefono}`,

  direccion: {
    calle: "Carretera Hornachos - Villafranca de los Barros",
    codigoPostal: "06229",
    localidad: "Puebla del Prior",
    provincia: "Badajoz",
  },

  mapas: {
    comoLlegar: "https://maps.app.goo.gl/XgYzDffrtqNLb58V9",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.23029819393!2d-6.1974161!3d38.57054790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd14092a6baeba51%3A0x94ac90d5b47e1f7c!2sParque%20la%20hispanidad!5e1!3m2!1ses!2ses!4v1787933619468!5m2!1ses!2ses",
    resenas:
      "https://www.google.es/maps/place/Parque+la+hispanidad/@38.5677406,-6.1930035,715m/data=!3m1!1e3!4m8!3m7!1s0xd14092a6baeba51:0x94ac90d5b47e1f7c!8m2!3d38.5694522!4d-6.1939954!9m1!1b1!16s%2Fg%2F11c0rnlm4y?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D",
  },

  valoracion: {
    nota: "4,3",
    opiniones: 18,
  },

  redes: {
    facebook: "https://www.facebook.com/profile.php?id=61591632389910",
    instagram: "https://www.instagram.com/miamiterraza/",
  },

  // Cada día tiene sus tramos; un array vacío significa "cerrado".
  horario: [
    { dia: "Lunes", tramos: ["12:00–16:00", "20:00–01:00"] },
    { dia: "Martes", tramos: [] },
    { dia: "Miércoles", tramos: ["12:00–16:00", "20:00–01:00"] },
    { dia: "Jueves", tramos: ["12:00–16:00", "20:00–01:00"] },
    { dia: "Viernes", tramos: ["12:00–16:00", "20:00–02:00"] },
    { dia: "Sábado", tramos: ["12:00–16:00", "20:00–02:00"] },
    { dia: "Domingo", tramos: ["12:00–16:00", "20:00–01:00"] },
  ],

  // Versión corta del horario que aparece en el pie de página.
  horarioResumen: {
    lineas: ["Miércoles a lunes", "12:00–16:00", "20:00–cierre"],
    cerrado: "Martes: cerrado",
  },
};
