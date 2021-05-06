export type UserObject = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export type itemRecord = {
  id: number
  itemId: number,
  number: number,
  bought_time: string,
  createdAt: string,
  updatedAt: string
}


export type Items = {
  id: number,
  userId: number,
  name: string,
  nextBuy: string,
  createdAt: string,
  updatedAt: string
  items_records: itemRecord[]
}
