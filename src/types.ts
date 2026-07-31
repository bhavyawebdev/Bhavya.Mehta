export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  location: string;
  bioParagraphs: string[];
  education: {
    institution: string;
    degree: string;
    field: string;
    period: string;
    status: string;
    highlights: string[];
  }[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'System';
  description: string;
  longDescription?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imagePlaceholderGradient: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skillsUsed: string[];
  certificateUrl?: string;
  certificateTitle?: string;
  issuedDate?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
}
