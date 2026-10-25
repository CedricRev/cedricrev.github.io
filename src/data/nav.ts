import { features } from "./features";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  ...(features.projects ? [{ label: "Projects", href: "/projects/" }] : []),
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/contact/" },
];
