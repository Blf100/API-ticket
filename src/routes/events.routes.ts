import { request, response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const eventRoutes = Router();

const prisma = new PrismaClient();

eventRoutes.post("/event",  async (request, response) => {
  try {
    const { 
      id,                 
      title,         
      place,         
      date,          
      created_at,    
      tickets_event } = request.body; 
  
    const event = await prisma.event.findUnique({where: {id: Number(id)}});
  
    if(event) {
      return response.json({message: "This event already exists"});
    }
  
    await prisma.event.create({
      data: {
      id,                 
      title,         
      place,         
      date,          
      created_at,    
      tickets_event 
      }
    });
  
    return response.json({event});
  
  } catch (error) {
      return response.json({error: "Try again later"});
  }

});

eventRoutes.get("/events",  async (request, response) => {
  try {
    const { id } = request.headers;

    const events = await prisma.event.findMany();

    return response.json({events});
  
  } catch (error) {
    
      return response.json({error: "Try again later"});
    
  }
});