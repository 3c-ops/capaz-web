export const locations = ['Quilpué', 'Villa Alemana', 'San Bernardo'] as const;

export const transparencyItems = {
  canHelp: [
    {
      title: 'Subsidio DS1 — Tramo 3',
      description: 'Postulaciones aprobadas para compra de vivienda.',
    },
    {
      title: 'Subsidio DS1 — Tramo 2',
      description: 'Orientación integral y análisis de viabilidad financiera.',
    },
    {
      title: 'Compra de primera vivienda para vivir',
      description: 'Nuestra misión es ayudarte a encontrar tu hogar, no a invertir.',
    },
    {
      title: 'Alternativas vigentes',
      description: `Hoy contamos con alternativas en ${locations.join(', ')}.`,
    },
  ],
  cannotHelp: [
    {
      title: 'DICOM vigente',
      description: 'Las condiciones de crédito impiden avanzar si existen deudas activas.',
    },
    {
      title: 'Inversión inmobiliaria',
      description: 'No trabajamos con inversionistas o multifamiliares.',
    },
    {
      title: 'Otros subsidios habitacionales',
      description: 'Por ahora estamos enfocados exclusivamente en DS1.',
    },
  ],
} as const;

export const processSteps = [
  {
    title: 'Nos escribes por WhatsApp',
    description:
      'Inicias el contacto con un mensaje simple. Te guiaremos con calma para entender tus primeras respuestas, sin juzgar.',
  },
  {
    title: 'Revisamos tu situación',
    description:
      'Analizamos tus datos de ahorro, subsidio y situación para verificar alternativas de financiamiento reales.',
  },
  {
    title: 'Entendemos en qué etapa estás',
    description:
      'No te apuramos. Resolvemos dudas sobre el proceso, el subsidio y los plazos antes de cualquier decisión.',
  },
  {
    title: 'Si existe una alternativa real...',
    description:
      'Agendamos una reunión con uno de nuestros especialistas. Si no se puede, te explicaremos con honestidad por qué.',
  },
] as const;

export const faqs = [
  {
    question: '¿Trabajan con cualquier persona?',
    answer:
      'No. Trabajamos con personas que buscan comprar su primera vivienda para vivir y que tienen una alternativa real de avanzar con subsidio DS1. Si tu caso queda fuera de lo que podemos acompañar, te lo diremos desde el inicio.',
  },
  {
    question: '¿Qué pasa si ya me rechazaron?',
    answer:
      'No damos por perdido un caso solo por un rechazo anterior. Revisamos qué pudo haber influido, qué antecedentes se pueden ordenar y si hoy existe una opción seria para volver a intentarlo.',
  },
  {
    question: '¿Me van a vender una propiedad?',
    answer:
      'Primero queremos entender si comprar es viable para ti. Si hay una alternativa real, recién ahí conversamos sobre proyectos disponibles. Nuestro rol no es empujarte a decidir rápido, sino ayudarte a tomar una decisión informada.',
  },
  {
    question: '¿La conversación tiene costo?',
    answer:
      'No. Nuestra asesoría no tiene costo en ninguna conversación. La usamos para conocer tu situación, resolver dudas y ver con honestidad si tiene sentido avanzar a una revisión más completa.',
  },
  {
    question: '¿Qué pasa si finalmente no califico?',
    answer:
      'Te explicaremos con claridad por qué no es posible avanzar en este momento y qué puntos podrías revisar antes de intentarlo nuevamente. Preferimos una respuesta honesta a generar expectativas que no dependen de nosotros.',
  },
] as const;
