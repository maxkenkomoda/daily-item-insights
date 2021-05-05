import { query, Request, Response } from 'express'
import { ItemsModel } from '../models/itemsModel'

export const getAllItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const newItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const itemName = req.body.name as string
    const itemNumber = Number(req.body.number)
    const userName = req.params.user as string
    if (!userName) throw new Error('name is invalid')
    if (!itemName) throw new Error('item name is invalid')
    if (!itemNumber || itemNumber === NaN)
      throw new Error('item name is invalid')
    const newItem = await ItemsModel.createItem(itemName, userName, itemNumber)
    if (!newItem) throw new Error('Something Wrong')
    res.json(newItem)
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const showItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const userName = req.params.user as string
    const itemId = Number(req.params.id)
    if (!userName) throw new Error('name is invalid')
    if (!itemId || itemId === NaN) throw new Error('item id is invalid')
    const item = await ItemsModel.getItem(userName, itemId)
    res.send(item)
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const showAllItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userName = req.params.user as string
    const allItems = await ItemsModel.getAllItems(userName)
    res.json(allItems)
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

// export const updateItem = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userName = req.params.user as string
//   } catch (error) {
//     console.error(error)
//     res.status(400)
//     res.send({
//       status: 'error',
//       message: error.message,
//     })
//   }
// }

// export const deleteItem = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userName = req.params.user as string
//   } catch (error) {
//     console.error(error)
//     res.status(400)
//     res.send({
//       status: 'error',
//       message: error.message,
//     })
//   }
// }
