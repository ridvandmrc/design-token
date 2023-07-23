import buildTokens from "design-tokens";
import { defaultLightBrand, defaultDarkBrand } from "./brand";
import { TokenType, checkTokenType, writeFile } from "./utils";

const tokenTypes: TokenType[] = ["scss", "css"];

const defaultLight = buildTokens({
  ...defaultLightBrand,
});

const defaultDark = buildTokens({ ...defaultDarkBrand });

const tokenFunc = (brand: IBuildType, target: TokenType) => {
  const token = checkTokenType(target);
  return token.isCss
    ? brand.toCss()
    : token.isScss
    ? brand.toScss()
    : brand.toJs();
};

tokenTypes.forEach((tokenType) =>
  writeFile({
    data: tokenFunc(defaultLight, tokenType),
    fileName: "light",
    type: tokenType,
    workspace: "default",
  })
);

tokenTypes.forEach((tokenTypes) =>
  writeFile({
    data: tokenFunc(defaultDark, tokenTypes),
    fileName: "dark",
    type: tokenTypes,
    workspace: "default",
  })
);
