import axios from "axios";
import dotenv from "dotenv";
import {Post} from "@models";

dotenv.config();

const api = process.env.API;

/**
 * @class PostsService
 */

class PostService {
  /**
   * @description retrieves posts data
   * @returns {Promise<Post[]>} return posts from a third party api
   */
  async getPosts(): Promise<Post[]> {
    const {data} = await axios.get<Post[]>(api + "/posts", {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  }
}

export default new PostService();
