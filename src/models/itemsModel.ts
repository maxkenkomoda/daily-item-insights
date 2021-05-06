import { PrismaClient } from '@prisma/client'
import { query } from 'express'
import { itemRecord, Items } from '../index.d'
import { AnalyticRecords } from '../lib/analyticTimeUtil'
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

  public static async createNewItemsRecord(userName: string, itemId: number, itemNumber: number){
    const userId = await this.getUserId(userName)
    await prisma.items_records.create({
      data:{
        itemId: itemId,
        number: itemNumber
      }
    })

    const allRecords =  await prisma.items_records.findMany({
      where: {
        itemId: itemId
      }
    }) as unknown as itemRecord[]

    const nextDate = await AnalyticRecords.calculateAverage(allRecords)
    console.log(nextDate)
    return nextDate


    // const updateItem = prisma.users_items.update({
    //   where: {
    //     id: itemId
    //   },
    //   data: {
    //     nextBuy: 'hoge'
    //   }
    // })


  }
}
