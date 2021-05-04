import { Request, Response } from 'express'

export const createItemRecords = async (req: Request, res: Response): Promise<void> => {
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
