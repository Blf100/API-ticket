import { request, response, Router } from "express";
import { PrismaClient } from "@prisma/client";;

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



export { ticketRoutes };