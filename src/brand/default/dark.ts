import { baseColor, baseSpacing, borderRadius } from "../../tokens";

export const defaultDarkBrand = {
  tokens: {
    default: {
      ...baseColor,
      ...baseSpacing,
      ...borderRadius,
      background: baseColor.gray[800],
      primaryButtonBackground: baseColor.blue[400],
      primaryButtonColor: baseColor.gray[700],
      secondaryButtonBackground: baseColor.gray[900],
      secondaryButtonColor: baseColor.blue[100],
    },
  },
};
