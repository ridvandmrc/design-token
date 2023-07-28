import { generateToken } from "token-wizard";
import { defaultLightBrand, defaultDarkBrand } from "./brand";
import { TokenType, checkTokenType, writeFile } from "./utils";

const tokenTypes: TokenType[] = ["scss", "css"];

const defaultLight = generateToken({
  ...defaultLightBrand, 
});

const defaultDark = generateToken({ ...defaultDarkBrand });

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
    data: tokenFunc(defaultLight as any, tokenType),
    fileName: "light",
    type: tokenType,
    workspace: "default",
  })
);

tokenTypes.forEach((tokenTypes) =>
  writeFile({
    data: tokenFunc(defaultDark as any, tokenTypes),
    fileName: "dark",
    type: tokenTypes,
    workspace: "default",
  })
);
