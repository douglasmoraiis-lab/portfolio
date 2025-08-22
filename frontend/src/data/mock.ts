export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: number; // 1-10
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'JavaScript Web Applications',
    description: 'Desenvolvimento de aplicações web modernas utilizando JavaScript vanilla e frameworks como React. Foco em performance e experiência do usuário.',
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/douglasmoraiis-lab',
    featured: true
  },
  {
    id: '2',
    title: 'TypeScript Projects',
    description: 'Projetos desenvolvidos com TypeScript para garantir maior robustez e manutenibilidade do código. Aplicações escaláveis e tipadas.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/douglasmoraiis-lab',
    featured: true
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Desenvolvimento de APIs e serviços backend utilizando Node.js e Python. Arquiteturas escaláveis e performáticas.',
    technologies: ['Node.js', 'Python', 'Go', 'API REST'],
    githubUrl: 'https://github.com/douglasmoraiis-lab',
    featured: true
  },
  {
    id: '4',
    title: 'Full-Stack Solutions',
    description: 'Soluções completas de desenvolvimento full-stack, desde o frontend até o backend, incluindo bancos de dados e deployment.',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/douglasmoraiis-lab',
    featured: true
  }
];

export const mockExperience: Experience[] = [
  {
    id: '1',
    company: 'Freelancer & Projetos Pessoais',
    position: 'Desenvolvedor Full-Stack',
    startDate: '2020-01',
    endDate: 'Present',
    description: 'Desenvolvimento de soluções completas utilizando tecnologias modernas. Foco em criar aplicações escaláveis e performáticas, sempre buscando as melhores práticas de desenvolvimento.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Go']
  },
  {
    id: '2',
    company: 'Estudos e Certificações',
    position: 'Desenvolvedor em Formação',
    startDate: '2019-01',
    endDate: '2020-01',
    description: 'Período dedicado ao aprendizado intensivo de tecnologias web modernas e desenvolvimento de projetos para consolidar conhecimentos práticos.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git']
  }
];

export const mockSkills: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', level: 9 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 8 },
  { id: '3', name: 'Vue.js', category: 'frontend', level: 7 },
  { id: '4', name: 'Next.js', category: 'frontend', level: 8 },
  { id: '5', name: 'Node.js', category: 'backend', level: 8 },
  { id: '6', name: 'Python', category: 'backend', level: 7 },
  { id: '7', name: 'Express.js', category: 'backend', level: 8 },
  { id: '8', name: 'FastAPI', category: 'backend', level: 7 },
  { id: '9', name: 'PostgreSQL', category: 'database', level: 8 },
  { id: '10', name: 'MongoDB', category: 'database', level: 7 },
  { id: '11', name: 'Redis', category: 'database', level: 6 },
  { id: '12', name: 'Docker', category: 'tools', level: 7 },
  { id: '13', name: 'AWS', category: 'tools', level: 6 },
  { id: '14', name: 'Git', category: 'tools', level: 9 }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'Douglas is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into scalable solutions is impressive.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO',
    company: 'StartupXYZ',
    content: 'Working with Douglas was a game-changer for our startup. He built our entire platform from scratch and his attention to detail and performance optimization saved us months of development time.'
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    position: 'Lead Designer',
    company: 'Digital Agency Pro',
    content: 'Douglas has an excellent eye for detail and consistently delivers pixel-perfect implementations. His collaboration with our design team was seamless and professional.'
  }
];