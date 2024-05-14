import { basePath } from "@/../basePath.mjs";

export function cssURL(str: string) {
  return `url(${(basePath ?? "") + str})`;
}
