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
exports.GalleryController = void 0;
const gallery_service_1 = __importDefault(require("../services/gallery.service"));
/**
 * @class GalleryController
 */
class GalleryController {
    /**
     * @description retrieves gallery photos
     * @param {ExpressRequest} req express request
     * @param {ExpressResponse} resp express response
     * @returns {Photo[]} photos data
     */
    static getAllPhotos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseObj = { code: 200, data: [] };
            try {
                const data = yield gallery_service_1.default.getAllPhotos();
                responseObj.data = data;
            }
            catch (err) {
                responseObj.code = 400;
            }
            finally {
                resp.status(responseObj.code).send(responseObj);
            }
        });
    }
}
exports.GalleryController = GalleryController;
