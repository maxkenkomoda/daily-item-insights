import { PrismaClient } from '@prisma/client'
import { query } from 'express'

const prisma = new PrismaClient()

export const newUser = (async (name: string) => {
  await prisma.users.create({
    data:{
      name: name
    }
  })
  return await prisma.users.findUnique({
    where: {
      name: name
    }
  })
})

export const showUser = (async (name: string) => {
  return await prisma.users.findUnique({
    where: {
      name: name
    }
  })
})
