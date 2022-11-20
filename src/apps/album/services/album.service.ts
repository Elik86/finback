import {Photo} from "@models";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = process.env.API;

/**
 * @class AlbumService
 */

class AlbumService {
  /**
   * @description retrieves album photos
   * @returns {Promise<Photo[]>} return photos from a third party api
   */
  async getAlbumPhotos(albumId: string): Promise<Photo[]> {
    const {data} = await axios.get<Photo[]>(
      api + "/albums/" + albumId + "/photos",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return data;
  }
}

export default new AlbumService();
