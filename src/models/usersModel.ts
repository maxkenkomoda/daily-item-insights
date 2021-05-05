import { PrismaClient } from '@prisma/client'
import { query } from 'express'
import { UserObject } from '../index.d'


const prisma = new PrismaClient()

export class UsersModel {
  public static async createUser(name: string) {
    return await prisma.users.create({
      data:{
        name: name
      }
    })
  }

  public static async getUser(name: string) {
    return await prisma.users.findUnique({
      where: {
        name: name
      } as unknown as UserObject
    })
  }

  public static async getUserId(name: string): Promise<number> {
    const userData = await prisma.users.findUnique({
      where: {
        name: name
      }
    }) as unknown as UserObject
    return userData.id
  }
}
