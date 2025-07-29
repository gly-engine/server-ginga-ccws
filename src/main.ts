import { serve } from "bun";
import { addRoute, handleRequest, use } from "./web/router";
import * as route_persistent from "./web/routes/persistent";
import * as route_mediaplayers from "./web/routes/mediaplayers";
import { logMiddleware } from "./web/middleware/log";
import { corsMiddleware } from "./web/middleware/cors";

const PORT = Number(process.env.PORT ?? 44642);
const API = process.env.API ?? 'dtv';

//use(logMiddleware);
use(corsMiddleware);

addRoute("POST", `/${API}/current-service/ginga/persistent/:key`, route_persistent.post);
addRoute("GET", `/${API}/current-service/ginga/persistent`, route_persistent.getAll);
addRoute("GET", `/${API}/current-service/ginga/persistent/:key`, route_persistent.getOne);

addRoute("POST", `/${API}/mediaplayers/:id`, route_mediaplayers.post);
addRoute("GET", `/${API}/mediaplayers`, route_mediaplayers.getAll);
addRoute("GET", `/${API}/mediaplayers/:id`, route_mediaplayers.getOne);

serve({
  port: PORT,
  fetch: handleRequest,
});
