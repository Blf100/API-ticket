// Importing dependencies
import express from "express";

// Importing routes
import { routes } from "./routes";

import { locationsRoutes } from "./routes";

// instantiating the express
const app = express();

// Using routes
app.use(routes);

// Port for the server to work
app.listen(3333, () => {
  console.log("server!")
});


