export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/contact/" },
];
