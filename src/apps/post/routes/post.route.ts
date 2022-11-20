import * as express from "express";
import {PostController} from "../controllers/post.controller";

export const PostRoute: express.Router = express
  .Router()
  .get("/", PostController.getAllPosts);
