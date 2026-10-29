const services = [
  {
    id: 'interior-design',
    icon: 'design',
    number: '01',
    title: 'Interior design',
    description:
      'A thoughtful plan for the way you live, from the first sketch to the final layer.',
  },
  {
    id: 'furnishing',
    icon: 'furnishing',
    number: '02',
    title: 'Furnishing',
    description:
      'Considered furniture, lighting, and objects selected to feel naturally yours.',
  },
  {
    id: 'styling',
    icon: 'styling',
    number: '03',
    title: 'Finishing touches',
    description:
      'Art, textiles, and collected details that bring warmth and character to a room.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Listen',
    description: 'We begin with your routines, needs, references, and aspirations.',
  },
  {
    number: '02',
    title: 'Imagine',
    description: 'We shape a clear design direction around your home and point of view.',
  },
  {
    number: '03',
    title: 'Refine',
    description: 'Materials, furnishings, and details come together with care.',
  },
  {
    number: '04',
    title: 'Bring to life',
    description: 'We bring the plan into your space, ready to be lived in and loved.',
  },
]

const statistics = [
  { id: 'years', value: 18, suffix: '+', label: 'years of thoughtful design' },
  { id: 'spaces', value: 240, suffix: '+', label: 'spaces made personal' },
  { id: 'craft', value: 32, suffix: '', label: 'independent makers' },
]

const testimonials = [
  {
    id: 'amanda',
    quote:
      'Every choice feels like us, only more considered. Our home is calmer, warmer, and a joy to come back to.',
    name: 'Amanda R.',
    detail: 'Residential client',
  },
  {
    id: 'james',
    quote:
      'The process was thoughtful from the first conversation. They understood how we wanted to live, not just how we wanted the rooms to look.',
    name: 'James L.',
    detail: 'Residential client',
  },
  {
    id: 'elena',
    quote:
      'Beautiful materials, no pressure, and an eye for the details we would never have found on our own.',
    name: 'Elena M.',
    detail: 'Residential client',
  },
]

export { processSteps, services, statistics, testimonials }
