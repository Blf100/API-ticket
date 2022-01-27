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
    
    const events = await prisma.event.findMany();

    return response.json({events});
  
  } catch (error) {
    
      return response.json({error: "Try again later"});
    
  }
});

eventRoutes.put("event", async (request, response) => {
  try {
    const { id } = request.headers;

    const { 
      title,         
      place,         
      date,          
      created_at,    
      tickets_event } = request.body;

    let event  = await prisma.event.findUnique({where: { id: Number(id)}});

    if(!event) {
    return response.json({message: "This user does not exist"});
    }

    event = await prisma.event.update({
      where: {id: Number(id)},
      data: {
        title,         
        place,         
        date,          
        created_at,    
        tickets_event 
    }
  });
  
  return response.json({event});
  
  } catch (error) {
      return response.json({error: "Try again later"})
  }

});

eventRoutes.delete("event", async (request, response) => {
  try {
    const { id } = request.headers;

    const event = await prisma.event.findUnique({where: {id: Number(id)}});

    if(!event) {
    return response.json({message: "esse evento não existe"});
    }

    await prisma.event.delete({where: {id: Number(id)}});

    return response.json({message: "Event deleted"});

  } catch (error) {
      return response.json({error: "Try again later"});
  }
});


export { eventRoutes };