import { baseColor, baseSpacing, borderRadius } from "../../tokens";

export const defaultLightBrand = {
  namespace: "default",
  jsCasing: "camelCase",
  scssCasing: "dash-case",
  cssCasing: "dash-case",

  tokens: {
    ...baseColor,
    ...baseSpacing,
    ...borderRadius,
    background: baseColor.gray[100],
    primaryButtonBackground: baseColor.blue[600],
    primaryButtonColor: baseColor.white,
    secondaryButtonBackground: baseColor.white,
    secondaryButtonColor: baseColor.blue[900],
  },
};
