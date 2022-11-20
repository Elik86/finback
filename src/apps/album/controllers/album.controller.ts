import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  ErrorRequestHandler,
} from "express";
import AlbumService from "../services/album.service";
import {Response} from "@types";
import {Photo} from "@models";

/**
 * @class AlbumController
 */

export class AlbumController {
  /**
   * @description retrieves album photos
   * @param {ExpressRequest} req express request
   * @param {ExpressResponse} resp express response
   * @returns {Photo[]} photos data
   */
  public static async getAlbum(
    req: ExpressRequest,
    resp: ExpressResponse
  ): Promise<void> {
    const responseObj: Response<Photo[]> = {code: 200, data: []};
    try {
      const {id} = req.params;

      if (!id) {
        throw new Error("Id param is missing");
      }

      const data = await AlbumService.getAlbumPhotos(id);
      responseObj.data = data;
    } catch (err) {
      responseObj.error = (err as Error).message;
      responseObj.code = 400;
    } finally {
      resp.status(responseObj.code).send(responseObj);
    }
  }
}
