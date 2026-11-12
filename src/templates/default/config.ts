export enum Navigate {
  HOME = 'default-home',
  ABOUT = 'default-about',
  EXPERIENCE = 'default-experience',
  PROJECTS = 'default-projects',
  CONTACT = 'default-contact',
}

export const Profile = {
  name: 'Kagiso Moepya',
  title: 'Software Engineer',
  experience: '5 years',
  location: 'South Africa',
  availability: 'Open to remote roles',
  summary: 'I build React Native apps, React and Next.js web applications, and the Node.js APIs behind them.',
  image: `${import.meta.env.BASE_URL}images/about/image-1.jpeg`,
  email: 'kagisomoepya19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/emmanuel-moepya-87818015a/',
  github: 'https://github.com/MoepyaCode',
}

export const Navigation = [
  { label: 'Work', target: Navigate.PROJECTS },
  { label: 'Experience', target: Navigate.EXPERIENCE },
  { label: 'About', target: Navigate.ABOUT },
  { label: 'Contact', target: Navigate.CONTACT },
]

export const ExperienceData = {
  roles: [
    {
      company: 'BETSoftware',
      focus: 'Intermediate Software Developer',
      period: 'Current',
      description: 'I work on React Native mobile applications using TypeScript and Maestro for end-to-end testing.',
    },
    {
      company: 'Learning Sandbox',
      focus: 'Full-stack development',
      period: 'Previous',
      description: 'I contributed to learning management systems and interactive educational software, working with React, Node.js, AWS and Airtable.',
    },
  ],
  skills: [
    { label: 'Mobile', tools: ['React Native', 'Expo', 'Maestro'] },
    { label: 'Web', tools: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
    { label: 'Backend', tools: ['Node.js', 'Express', 'Python', 'REST APIs', 'PostgreSQL'] },
    { label: 'Cloud & tooling', tools: ['Azure', 'AWS', 'Docker', 'Git'] },
  ],
}

export type Project = {
  id: string
  title: string
  category: string
  kind: 'mobile' | 'fullstack' | 'backend'
  description: string
  highlights: readonly string[]
  stack: readonly string[]
  source?: string
}

export const Projects: readonly Project[] = [
  {
    id: 'mobile-catalog',
    title: 'Product Catalogue & Cart',
    category: 'Mobile · Coding challenge',
    kind: 'mobile',
    description: 'An Expo shopping demo with a responsive product grid, a shared cart and an order confirmation screen.',
    highlights: [
      'The cart reducer handles item quantities, removals and price totals.',
      'The layout puts the cart below the grid on phones and beside it on wider screens.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    id: 'taskchain',
    title: 'TaskChain',
    category: 'Full stack · Hackathon team project',
    kind: 'fullstack',
    description: 'A Next.js app that syncs GitHub activity so teams can track contributions across repositories.',
    highlights: [
      'I worked on GitHub organisation tracking, repository selection and contribution sync.',
      'The app uses Clerk for authentication and Prisma to store contribution records.',
    ],
    stack: ['Next.js', 'TypeScript', 'GitHub API', 'Prisma'],
    source: 'https://github.com/MoepyaCode/Hackerthon-HackerDAO-Task-Chain',
  },
  {
    id: 'dino-park',
    title: 'Dino Park API',
    category: 'Backend · API project',
    kind: 'backend',
    description: 'A REST API for a simulated park that tracks animal location, feeding schedules and zone maintenance.',
    highlights: [
      'Express routes handle park events and lookups for animals due for feeding and zones due for maintenance.',
      'Knex manages PostgreSQL queries, migrations and seed data.',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Knex'],
    source: 'https://github.com/MoepyaCode/Backend_Dino-Park-KnexJS',
  },
]
