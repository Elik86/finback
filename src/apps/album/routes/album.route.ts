import * as express from "express";
import {AlbumController} from "../controllers/album.controller";

export const AlbumRoute: express.Router = express
  .Router()
  .get("/:id", AlbumController.getAlbum);
