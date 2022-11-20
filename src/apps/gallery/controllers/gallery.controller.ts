import {Request as ExpressRequest, Response as ExpressResponse} from "express";
import GalleryService from "../services/gallery.service";
import {Response} from "@types";
import {Photo} from "@models";

/**
 * @class GalleryController
 */

export class GalleryController {
  /**
   * @description retrieves gallery photos
   * @param {ExpressRequest} req express request
   * @param {ExpressResponse} resp express response
   * @returns {Photo[]} photos data
   */
  public static async getAllPhotos(
    req: ExpressRequest,
    resp: ExpressResponse
  ): Promise<void> {
    const responseObj: Response<Photo[]> = {code: 200, data: []};
    try {
      const data = await GalleryService.getAllPhotos();
      responseObj.data = data;
    } catch (err) {
      responseObj.code = 400;
    } finally {
      resp.status(responseObj.code).send(responseObj);
    }
  }
}
