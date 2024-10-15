export const prefix = (path: string) => {
  const basePath = process.env.DIST || "";
  return `${basePath}/${path}`;
};
