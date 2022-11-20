"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER = void 0;
const post_route_1 = require("./apps/post/routes/post.route");
const gallery_route_1 = require("./apps/gallery/routes/gallery.route");
const album_route_1 = require("./apps/album/routes/album.route");
exports.ROUTER = [
    {
        handler: post_route_1.PostRoute,
        middleware: [],
        path: "posts",
    },
    {
        handler: gallery_route_1.GalleryRoute,
        middleware: [],
        path: "gallery",
    },
    {
        handler: album_route_1.AlbumRoute,
        middleware: [],
        path: "album",
    },
];
