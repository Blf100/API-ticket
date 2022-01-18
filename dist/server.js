"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing dependencies
const express_1 = __importDefault(require("express"));
// instantiating the express
const app = (0, express_1.default)();
// Port for the server to work
app.listen(3333, () => {
    console.log("server!");
});
