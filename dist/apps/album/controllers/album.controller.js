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
exports.AlbumController = void 0;
const album_service_1 = __importDefault(require("../services/album.service"));
/**
 * @class AlbumController
 */
class AlbumController {
    /**
     * @description retrieves album photos
     * @param {ExpressRequest} req express request
     * @param {ExpressResponse} resp express response
     * @returns {Photo[]} photos data
     */
    static getAlbum(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObj = { code: 200, data: [] };
            try {
                const { id } = req.params;
                if (!id) {
                    throw new Error("Id param is missing");
                }
                const data = yield album_service_1.default.getAlbumPhotos(id);
                responseObj.data = data;
            }
            catch (err) {
                responseObj.error = err.message;
                responseObj.code = 400;
            }
            finally {
                resp.status(responseObj.code).send(responseObj);
            }
        });
    }
}
exports.AlbumController = AlbumController;
