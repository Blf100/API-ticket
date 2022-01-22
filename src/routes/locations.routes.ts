// Importing routes
import { request, response, Router } from "express";

// Importing Prisma Client
import { PrismaClient } from "@prisma/client";

// instantiating the Prisma Client
const prisma = new PrismaClient();

// instantiating the express
const locationsRoutes = Router();

// Route to locations post
locationsRoutes.post("/locations", async (request, response) => {
  const {
    name,
    image,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
    itemsId
  } = request.body;

  const locations = await prisma.locations.create({
    data: {
      name,
      image,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
      itemsId
    }
  });
});



// Export routes
export { locationsRoutes };