export type Project = { slug: string; title: string; client: string; period: string; role: string; description: string; challenge: string; approach: string; image: string; imageAlt: string; technologies: string[]; github?: string; demo?: string; featured?: boolean };
export type SkillGroup = { category: "Frontend" | "Backend" | "Cloud / Infrastructure" | "Tools"; summary: string; skills: string[] };
export type Experience = { period: string; role: string; company: string; description: string };
