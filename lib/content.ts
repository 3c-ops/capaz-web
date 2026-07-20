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
    question: '¿Me van a prometer que podré comprar?',
    answer:
      'No. Sería irresponsable prometer una compra asegurada, porque la aprobación final depende de factores externos del sistema bancario y del cumplimiento de requisitos. Lo que sí prometemos es estudiar tu caso con calma antes de darte una respuesta.',
  },
  {
    question: '¿Y si ya me rechazaron?',
    answer:
      'Un rechazo puede depender de distintos antecedentes y criterios. Por eso revisamos tu situación completa para identificar si existe una alternativa real que pueda ser viable.',
  },
  {
    question: '¿Qué pasa si hoy no pueden ayudarme?',
    answer:
      'Si hoy no podemos avanzar, te explicaremos qué antecedentes conviene revisar antes de intentarlo nuevamente.',
  },
] as const;
