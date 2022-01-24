import { request, response, Router } from "express";
import { Iuser } from "../model/user";
import { PrismaClient } from "@prisma/client";

const userRoutes = Router();

const prisma = new PrismaClient();

userRoutes.post("/user", async (request, response) => {
  
  try { const { 
    name,
    cpf,
    email,
    city,
    uf,
    sex,
    created_at,
    tickets_user
  } = request.body;

  const user = await prisma.user.findUnique({where: {cpf, email}});

  if(user) {
    return response.json({error: "cpf or email already exists"});
  }

  await prisma.user.create({
    data: {
      name,
      cpf,
      email,
      city,
      uf,
      sex,
      created_at,
      tickets_user
    }
  });
  return response.json(user)

    
  } catch (error) {
    return response.json({message: "Try again later"});
  }
});



export { userRoutes };