import { PrismaClient } from '@prisma/client'
import { query } from 'express'
import { UsersModel } from './usersModel'

const prisma = new PrismaClient()

export class ItemsModel extends UsersModel {

  public static async createItem (itemName: string, userName: string, number: number) {
    const userId = await this.getUserId(userName)
    return await prisma.users_items.create({
      data:{
        userId: userId,
        name: itemName,
        items_records: {
          create: {
            number: number
          }
        }
      }
    })
  }

  public static async getItem (userName: string, itemId: number){
    const userId = await this.getUserId(userName)
    const nullItem = { data : "cannot find" }
    const item = await prisma.users_items.findMany({
      where: {
        userId: userId,
        id: itemId
      },
      include: {
        items_records: true
      }
    })
    if(item.length === 0) {
      return nullItem
    } else {
      return item
    }

  }

  public static async getAllItems (userName: string) {
    const userId = await this.getUserId(userName)
    const nullItem = { data : "none" }
    const allItems =  await prisma.users_items.findMany({
      where: {
        userId: userId
      },
      include: {
        items_records: true
      }
    })

    if(allItems.length === 0) {
      return nullItem
    } else {
      return allItems
    }
  }
}
