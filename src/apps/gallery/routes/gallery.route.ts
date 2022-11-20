import * as express from "express";
import {GalleryController} from "../controllers/gallery.controller";

export const GalleryRoute: express.Router = express
  .Router()
  .get("/", GalleryController.getAllPhotos);
