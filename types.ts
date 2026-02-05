export interface Project {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  size?: string; // 'large' or 'normal' for grid span
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SustainabilityCard {
    icon: string;
    title: string;
    description: string;
}