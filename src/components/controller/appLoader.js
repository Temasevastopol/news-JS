"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = __importDefault(require("./loader"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b76708263a354506bf5e528ea57eb2ad', // получите свой ключ https://newsapi.org/
        });
    }
}
exports.default = AppLoader;
//# sourceMappingURL=appLoader.js.map