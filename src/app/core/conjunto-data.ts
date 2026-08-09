export interface Amenidad {
  icono: string;
  titulo: string;
  descripcion: string;
}

export interface MiembroConsejo {
  cargo: string;
  nombre: string;
}

export interface Documento {
  nombre: string;
  descripcion: string;
}

export interface Anuncio {
  fecha: string;
  titulo: string;
  contenido: string;
  tipo: 'aviso' | 'mantenimiento' | 'asamblea' | 'seguridad';
}

export interface ItemGaleria {
  titulo: string;
  color1: string;
  color2: string;
}

export const CONJUNTO = {
  nombre: 'Conjunto Residencial Villa del Bosque',
  eslogan: 'Un lugar para vivir en comunidad',
  ciudad: 'Bogotá, Colombia',
  direccion: 'Calle 123 # 45 - 67',
  telefono: '(601) 555 1234',
  email: 'administracion@villadelbosque.com',
  nit: '900.123.456-7',
  anioConstruccion: 2010,
  torres: 4,
  unidades: 120,
  pisos: 12,
  descripcion:
    'Villa del Bosque es un conjunto residencial cerrado ubicado en un entorno rodeado de zonas verdes, ' +
    'diseñado para ofrecer tranquilidad, seguridad y bienestar a todas las familias que lo habitan. ' +
    'Contamos con amplias zonas comunes, seguridad las 24 horas y una administración comprometida ' +
    'con la buena convivencia y el cuidado de los bienes comunes.',
};

export const AMENIDADES: Amenidad[] = [
  { icono: '🏊', titulo: 'Piscina', descripcion: 'Piscina para adultos y niños, abierta todos los días.' },
  { icono: '🏋️', titulo: 'Gimnasio', descripcion: 'Equipado con máquinas cardiovasculares y de fuerza.' },
  { icono: '🎉', titulo: 'Salón social', descripcion: 'Espacio para eventos y reuniones familiares.' },
  { icono: '🌳', titulo: 'Zonas verdes', descripcion: 'Amplias áreas verdes y senderos peatonales.' },
  { icono: '🚗', titulo: 'Parqueadero', descripcion: 'Parqueadero privado para residentes y visitantes.' },
  { icono: '🛡️', titulo: 'Seguridad 24/7', descripcion: 'Vigilancia privada y circuito cerrado de cámaras.' },
  { icono: '🧒', titulo: 'Zona infantil', descripcion: 'Parque infantil con juegos seguros y supervisados.' },
  { icono: '🎾', titulo: 'Cancha múltiple', descripcion: 'Cancha para fútbol, baloncesto y voleibol.' },
];

export const ADMINISTRACION = {
  empresaAdministradora: 'Administraciones Integrales S.A.S.',
  administrador: 'Carlos Ramírez',
  revisorFiscal: 'María Fernanda Gómez',
  horarioAtencion: 'Lunes a viernes: 8:00 a.m. - 12:00 m. y 2:00 p.m. - 5:00 p.m.',
  horarioSabados: 'Sábados: 8:00 a.m. - 12:00 m.',
  cuotaAdministracion: '$350.000 COP mensual',
  fechaLimitePago: 'Los primeros 5 días hábiles de cada mes',
  consejo: [
    { cargo: 'Presidente del Consejo', nombre: 'Jorge Andrés Salcedo' },
    { cargo: 'Vicepresidente', nombre: 'Luisa Fernanda Torres' },
    { cargo: 'Tesorero', nombre: 'Andrés Felipe Rojas' },
    { cargo: 'Secretaria', nombre: 'Diana Patricia Ortiz' },
  ] as MiembroConsejo[],
  canalesPago: [
    'Transferencia bancaria (Bancolombia, cuenta de ahorros)',
    'PSE a través del portal de administración',
    'Pago en efectivo en la oficina de administración',
  ],
  documentos: [
    { nombre: 'Reglamento de propiedad horizontal', descripcion: 'Normas generales de convivencia y uso de zonas comunes.' },
    { nombre: 'Manual de convivencia', descripcion: 'Deberes y derechos de propietarios y residentes.' },
    { nombre: 'Presupuesto anual', descripcion: 'Detalle de ingresos y gastos aprobados en asamblea.' },
    { nombre: 'Actas de asamblea', descripcion: 'Registro histórico de decisiones tomadas por la comunidad.' },
  ] as Documento[],
};

export const ANUNCIOS: Anuncio[] = [
  {
    fecha: '2026-08-05',
    titulo: 'Asamblea General Ordinaria',
    contenido: 'Se convoca a todos los propietarios a la asamblea general el 30 de agosto a las 6:00 p.m. en el salón social.',
    tipo: 'asamblea',
  },
  {
    fecha: '2026-07-28',
    titulo: 'Mantenimiento de piscina',
    contenido: 'La piscina permanecerá cerrada del 10 al 12 de agosto por mantenimiento preventivo.',
    tipo: 'mantenimiento',
  },
  {
    fecha: '2026-07-15',
    titulo: 'Refuerzo de seguridad',
    contenido: 'Se implementó un nuevo sistema de control de acceso peatonal en la portería principal.',
    tipo: 'seguridad',
  },
  {
    fecha: '2026-07-01',
    titulo: 'Actualización cuota de administración',
    contenido: 'A partir de agosto la cuota de administración se ajusta según lo aprobado en la última asamblea.',
    tipo: 'aviso',
  },
];

export const GALERIA: ItemGaleria[] = [
  { titulo: 'Fachada principal', color1: '#2b6777', color2: '#52ab98' },
  { titulo: 'Piscina', color1: '#3a86ff', color2: '#8ecae6' },
  { titulo: 'Salón social', color1: '#e29578', color2: '#ffddd2' },
  { titulo: 'Zonas verdes', color1: '#40916c', color2: '#95d5b2' },
  { titulo: 'Parque infantil', color1: '#f4a261', color2: '#ffe8d6' },
  { titulo: 'Gimnasio', color1: '#6d597a', color2: '#b8a9c9' },
];
