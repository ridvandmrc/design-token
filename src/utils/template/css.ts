export const cssTemplate = (
  data: Record<string, string>,
  targetTheme: string
) => {
  return `[theme='${targetTheme}'] {
    ${Object.entries(data)
      .map(([key, value]) => `${key}: ${value};\n`)
      .join("")}
  }`;
};
