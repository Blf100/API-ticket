import { request, response, Router } from "express";
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

userRoutes.get("/users", async (request, response) => {
  try {
  
    const users = prisma.user.findMany()

    return response.json(users);
 
  } catch (error) {
      return response.json({message: "Try again later"});
  }
});

userRoutes.put("user", async (request, response) => {
  
  try {
    const { id } = request.headers;

  const {
    name,
    cpf,
    email,
    city,
    uf,
    sex,
    created_at,
    tickets_user } = request.body;
  
  let user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  });

  if(!user) {
    return response.json({message: "User not found"});
  }

  user = await prisma.user.update({
    where: {id: Number(id)}, 
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

  return response.json({user});
  
  } catch (error) {
      
      return response.json({message: "Try again later"});
  }
  
 });

userRoutes.delete("/user", async (request, response) => {
  try {
    const { id } = request.headers;

  const user = await prisma.user.findUnique({where: {id: Number(id)}});

  if(!id) {
    return response.json({message: "User not found"});
  }

  await prisma.user.delete({where: {id: Number(id)}});

  return response.json({message: "User deleted"});

  } catch (error) {
    return response.json({message: "Try again later"});
  }
});


export { userRoutes };