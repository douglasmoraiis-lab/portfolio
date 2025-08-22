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
  { id: '1', name: 'JavaScript', category: 'frontend', level: 9 },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 8 },
  { id: '3', name: 'React', category: 'frontend', level: 9 },
  { id: '4', name: 'HTML5', category: 'frontend', level: 9 },
  { id: '5', name: 'CSS3', category: 'frontend', level: 8 },
  { id: '6', name: 'Node.js', category: 'backend', level: 8 },
  { id: '7', name: 'Python', category: 'backend', level: 7 },
  { id: '8', name: 'Go', category: 'backend', level: 6 },
  { id: '9', name: 'MongoDB', category: 'database', level: 7 },
  { id: '10', name: 'PostgreSQL', category: 'database', level: 6 },
  { id: '11', name: 'Git', category: 'tools', level: 9 },
  { id: '12', name: 'Docker', category: 'tools', level: 6 },
  { id: '13', name: 'VS Code', category: 'tools', level: 9 },
  { id: '14', name: 'Linux', category: 'tools', level: 7 }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Cliente Satisfeito',
    position: 'Empreendedor',
    company: 'Startup Local',
    content: 'Douglas é um desenvolvedor excepcional que sempre entrega soluções de alta qualidade. Sua capacidade de entender requisitos complexos e transformá-los em aplicações funcionais é impressionante.'
  },
  {
    id: '2',
    name: 'Colaborador',
    position: 'Desenvolvedor Senior',
    company: 'Projeto Open Source',
    content: 'Trabalhar com Douglas em projetos open source é sempre uma experiência enriquecedora. Ele demonstra excelente conhecimento técnico e capacidade de colaboração.'
  },
  {
    id: '3',
    name: 'Mentor',
    position: 'Tech Lead',
    company: 'Comunidade Dev',
    content: 'Douglas mostra constante evolução como desenvolvedor. Sua paixão por tecnologia e dedicação aos estudos o destacam na comunidade de desenvolvimento.'
  }
];