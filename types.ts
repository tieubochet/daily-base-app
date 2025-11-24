export interface ThemeColors {
  bgApp: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  borderColor: string;
  accentColor: string;
  accentHover: string;
  shadow: string;
}

export interface Badge {
  id: string;
  image: string;
  name: string;
  tag: string;
  description: string;
  whyItMatters: string;
  howToProgress: string;
  tiers: string[];
  links: LinkItem[];
}

export interface LinkItem {
  name: string;
  url: string;
  icon?: string;
}

export type ThemeMode = 'light' | 'dark' | 'dim';

export interface Themes {
  [key: string]: ThemeColors;
}
