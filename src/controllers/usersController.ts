import { Request, Response } from 'express'
import { newUser, showUser } from '../models/usersModel'

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const name =  req.params.user as string
    if(!name) throw new Error('name is invalid')
    const userInfo = await showUser(name)
    if(!userInfo) throw new Error('no user found')
    res.send(userInfo)
  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.body.name as string
    if(!name) throw new Error('name is invalid')
    const newUserInfo = await newUser(name)

    res.send(newUserInfo)
  } catch(error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}
