import devicon from "@iconify-json/devicon/icons.json";

interface IconSvg {
  body: string;
  viewBox: string;
}

export function getDevicon(name: string): IconSvg | undefined {
  const icon = (devicon.icons as Record<string, { body: string; width?: number; height?: number }>)[name];
  if (!icon) return undefined;
  const width = icon.width ?? devicon.width ?? 128;
  const height = icon.height ?? devicon.height ?? 128;
  return { body: icon.body, viewBox: `0 0 ${width} ${height}` };
}
