"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const current_user_1 = require("./routes/current-user");
const signin_1 = require("./routes/signin");
const signup_1 = require("./routes/signup");
const signout_1 = require("./routes/signout");
const error_handler_1 = require("./middlewares/error-handler");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(current_user_1.currentUserRouter);
app.use(signin_1.signInRouter);
app.use(signup_1.signUpRouter);
app.use(signout_1.signOutRouter);
app.use(error_handler_1.errorHandler);
app.get("/", (req, res) => {
    res.send("Hello there!");
});
app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});
