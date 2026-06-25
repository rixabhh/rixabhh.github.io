export const withBase = (path: string): string => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${basePath}${path === '/' ? '/' : path}`;
};

export const asset = (path: string): string => withBase(path);
