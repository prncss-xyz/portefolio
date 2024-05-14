function getBasePath() {
  const url = process.env.URL;
  if (!url) return "/";
  const parsed = new URL(url);
  return parsed.pathname;
}

export const basePath = getBasePath();
