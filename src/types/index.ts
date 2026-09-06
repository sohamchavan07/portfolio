export * from "./project";

export type Theme = "light" | "dark";

export interface NavItem {
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
