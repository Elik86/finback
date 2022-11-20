"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const api = process.env.API;
/**
 * @class PostsService
 */
class PostService {
    /**
     * @description retrieves posts data
     * @returns {Promise<Post[]>} return posts from a third party api
     */
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(api + "/posts", {
                headers: {
                    Accept: "application/json",
                },
            });
            return data;
        });
    }
}
exports.default = new PostService();
