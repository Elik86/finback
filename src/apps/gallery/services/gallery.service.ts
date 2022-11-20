import axios from "axios";
import dotenv from "dotenv";
import {Photo} from "@models";

dotenv.config();

const api = process.env.API;

/**
 * @class GalleryService
 */

class GalleryService {
  /**
   * @description retrieves photos in gallery
   * @returns {Promise<Photo[]>} return photos from a third party api
   */
  async getAllPhotos(): Promise<Photo[]> {
    const {data} = await axios.get<Photo[]>(api + "/photos", {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  }
}

export default new GalleryService();
