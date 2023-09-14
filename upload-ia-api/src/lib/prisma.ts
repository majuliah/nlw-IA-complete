import { PrismaClient } from "@prisma/client";
//fazendo a conexão com banco de dados automáticamente

export const prisma = new PrismaClient();