export const prefix = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_DIST || "";
  return `${basePath}/${path}`;
};
