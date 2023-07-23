import fs from "fs";
import { cssTemplate, scssTemplate } from "./template";
import { Token } from "typescript";

export const FOLDER_NAME = "lib";

export type TokenType = "scss" | "css" | "js";

export const checkTokenType = (type: TokenType) => {
  return {
    isScss: type === "scss",
    isCss: type === "css",
    isJs: type === "js",
  };
};

interface IWriteFile {
  workspace: string;
  fileName: string;
  type: TokenType;
  data: Record<string, string>;
}

const generateTokens: Record<
  TokenType,
  (data: Record<string, string>, targetTheme?: string) => string
> = {
  scss: (data) => scssTemplate(data),
  css: (data, targetTheme) => cssTemplate(data, targetTheme!),
  js: () => "loo",
};

export const writeFile = ({ data, fileName, type, workspace }: IWriteFile) => {
  if (!fs.existsSync(`./${FOLDER_NAME}/${workspace}`)) {
    fs.mkdirSync(`./${FOLDER_NAME}`);
    fs.mkdirSync(`./${FOLDER_NAME}/${workspace}`);
  }

  fs.appendFile(
    `./${FOLDER_NAME}/${workspace}/${fileName}.${type}`,
    generateTokens[type](data, fileName),
    (err) => console.log("err: ", err)
  );
};
