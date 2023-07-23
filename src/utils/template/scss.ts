export const scssTemplate = (data: Record<string, string>) => {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${value};\n`)
    .join("");
};
