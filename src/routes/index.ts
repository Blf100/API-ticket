// Importing routes
import { request, response, Router } from "express";

// Importing Prisma Client
import { locationsRoutes } from "./locations.routes";

// instantiating the express
const routes = Router();

// Export routes
export { routes };

export { locationsRoutes};