"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const apicache_1 = __importDefault(require("apicache"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const BASE = process.env.BASE;
const CACHE_DURATION = process.env.CACHE_DURATION;
// Cache is set globally.
// Can be set also on routes.ts if cache needed on specific route.
const cache = apicache_1.default.middleware;
// Set global cache to 1 minute
app.use(cache(CACHE_DURATION));
// set cors
// app.use(cors());
// Cors
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    // Pass to next layer of middleware
    next();
});
// Apply all routes specified in routes.ts
for (const route of routes_1.ROUTER) {
    app.use("/" + BASE + "/" + route.path, route.middleware, route.handler);
}
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});
