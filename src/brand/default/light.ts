import { baseColor, baseSpacing, borderRadius } from "../../tokens";

export const defaultLightBrand = {
  tokens: {
    default: {
      ...baseColor,
      ...baseSpacing,
      ...borderRadius,
      background: baseColor.gray[100],
      primaryButtonBackground: baseColor.blue[600],
      primaryButtonColor: baseColor.white,
      secondaryButtonBackground: baseColor.white,
      secondaryButtonColor: baseColor.blue[900],
    },
  },
};
