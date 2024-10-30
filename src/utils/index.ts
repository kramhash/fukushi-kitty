export const prefix = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_DIST || "";
  return `${basePath}/${path}`;
};

export const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000/";
