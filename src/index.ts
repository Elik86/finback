import express, {Express, Request, Response, NextFunction} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {ROUTER} from "./routes";
import apicache from "apicache";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const BASE = process.env.BASE;
const CACHE_DURATION = process.env.CACHE_DURATION;

// Cache is set globally.
// Can be set also on routes.ts if cache needed on specific route.
const cache = apicache.middleware;

// Set global cache to 1 minute
app.use(cache(CACHE_DURATION));

// set cors
// app.use(cors());

// Cors
app.use(function (req: Request, res: Response, next: NextFunction) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

// Apply all routes specified in routes.ts
for (const route of ROUTER) {
  app.use("/" + BASE + "/" + route.path, route.middleware, route.handler);
}

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
