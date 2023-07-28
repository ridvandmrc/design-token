import { generateToken } from "token-wizard";

const tokens = generateToken({
  tokens: {
    blue: {
      900: "#03045E",
      800: "#023E8A",
    },
    red: {
      900: "#590D22",
      800: "#800F2F",
    },
    primary: {
      color: "${this.blue[900]}",
    },
    white: "#ffffff",
  },
});

console.log("tokens: ", tokens.toCss("./token.css"));
console.log("tokens: ", tokens.toScss());
console.log("tokens: ", tokens.toJS());
