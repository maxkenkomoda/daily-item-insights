import { query, Request, Response } from 'express'

export const getAllItems = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    if(!req.query.name) throw new Error('name is invalid')
    if(!req.query.userId) throw new Error('name is invalid')

  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const updateItem = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}
