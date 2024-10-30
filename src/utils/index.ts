export const prefix = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_DIST || "";
  return `${basePath}/${path}`;
};

export const URL =
  "https://www.fukushijinzai.metro.tokyo.lg.jp/hello-essential-work/pr-gekkan/";
