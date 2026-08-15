import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// next/image with `images.unoptimized` renders the raw `src` as-is, so
// root-relative paths need the GitHub Pages basePath prefixed manually.
export function withBasePath(path: string) {
  return `${process.env.NEXT_BASE_PATH || ""}${path}`;
}
