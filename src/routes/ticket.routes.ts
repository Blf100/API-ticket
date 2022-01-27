import { request, response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const ticketRoutes = Router();

const prisma = new PrismaClient();

ticketRoutes.post("/ticket", async (request, response) => {
  try {
    const { id,         
      price,    
      created_at,
      holder,     
      id_user,    
      ocurrence, 
      id_event } = request.body;
  
    const ticket  = await prisma.ticket.findUnique({where: {id: Number(id)}});
  
    if(ticket) {
      return response.json({message: "This event already exists"});
    }
  
    await prisma.ticket.create({
      data: { 
        id,         
        price,    
        created_at,
        holder,     
        id_user,    
        ocurrence, 
        id_event
      }
    });
  
    return response.json({ticket});
  } catch (error) {
      return response.json({error: "Trya again later."})
  }
});

ticketRoutes.get("tickets", async (request, response) => {
  try {
    const tickets = await prisma.ticket.findMany();

    return response.json({tickets});
  
} catch (error) {
    return response.json({message: "Try again later"});
  }
});

ticketRoutes.put("/ticket", async (request, response) => {
  try {
    const { id } = request.headers;

    const { 
      price,    
      created_at,
      holder,     
      id_user,    
      ocurrence, 
      id_event } = request.body;

    let ticket = await prisma.ticket.findUnique({where: {id: Number(id)}});


    if(!ticket) {
    return response.json({message: "User not found"});
    }

    ticket = await prisma.ticket.update({
      where: {id: Number(id)},
      data: {
        price,    
        created_at,
        holder,     
        id_user,    
        ocurrence, 
        id_event 
    }
  });

  return response.json({ticket});
  
} catch (error) {
    return response.json({error: "Try again later"});  
  }
});

ticketRoutes.delete("ticket", async (request, response) => {
  try {
    const { id } = request.headers;

    const ticket = await prisma.ticket.findUnique({where: {id: Number(id)}});

    if(!ticket) {
    return response.json({message: "Ticket not found"});
    }

    await prisma.ticket.delete({where: {id: Number(id)}});

    return response.json({message: "Ticket deleted"});
    
    } catch (error) {
        return response.json({error: "Try again later"});
  }
});



export { ticketRoutes };