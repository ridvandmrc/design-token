"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_wizard_1 = require("token-wizard");
var tokens = (0, token_wizard_1.generateToken)({
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
