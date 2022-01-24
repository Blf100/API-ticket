import { request, response, Router } from "express";
import { Iuser } from "../model/user";
import { PrismaClient } from "@prisma/client";

const routes = Router();

const prisma = new PrismaClient();

routes.post("/user", async (request, response) => {
  const { 
    name,
    cpf,
    email,
    city,
    uf,
    sex,
    created_at,
    tickets_user
  } = request.body;

  const user = await prisma.user.create({
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

});

export { routes };