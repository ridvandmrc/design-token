interface IBuildType {
  toJs: () => Record<string, string>;
  toScss: () => Record<string, string>;
  toCss: () => Record<string, string>;
}

declare module "design-tokens" {
  export default (arg: unknown): IBuildType => unknown;
}
