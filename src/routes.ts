import {Router} from "express";

import {PostRoute} from "./apps/post/routes/post.route";
import {GalleryRoute} from "./apps/gallery/routes/gallery.route";
import {AlbumRoute} from "./apps/album/routes/album.route";

// Router interface to describe route path, potential middleware, sub route handler
interface IROUTER {
  path: string;
  middleware: any[];
  handler: Router;
}

export const ROUTER: IROUTER[] = [
  {
    handler: PostRoute,
    middleware: [],
    path: "posts",
  },
  {
    handler: GalleryRoute,
    middleware: [],
    path: "gallery",
  },
  {
    handler: AlbumRoute,
    middleware: [],
    path: "album",
  },
];
