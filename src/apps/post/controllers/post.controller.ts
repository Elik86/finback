import {Request as ExpressRequest, Response as ExpressResponse} from "express";
import PostService from "../services/post.service";
import {Response} from "@types";
import {Post} from "@models";

/**
 * @class PostController
 */

export class PostController {
  /**
   * @description retrieves posts
   * @param {ExpressRequest} req express request
   * @param {ExpressResponse} resp express response
   * @returns {Post[]} posts data
   */
  public static async getAllPosts(
    req: ExpressRequest,
    resp: ExpressResponse
  ): Promise<void> {
    const responseObj: Response<Post[]> = {code: 200, data: []};
    try {
      const data = await PostService.getPosts();
      responseObj.data = data;
    } catch (err) {
      responseObj.code = 400;
    } finally {
      resp.status(responseObj.code).send(responseObj);
    }
  }
}
