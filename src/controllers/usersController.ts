import { Request, Response } from 'express'
import { UsersModel } from '../models/usersModel'

export const showUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.params.user as string
    if (!name) throw new Error('name is invalid')
    const userInfo = await UsersModel.getUser(name)
    if (!userInfo) throw new Error('no user found')
    res.send(userInfo)
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}

export const newUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.body.name as string
    if (!name) throw new Error('name is invalid')
    const newUserInfo = await UsersModel.createUser(name)
    if (!newUserInfo) throw new Error('Something wrong')
    res.json(newUserInfo)
  } catch (error) {
    console.error(error)
    res.status(400)
    res.send({
      status: 'error',
      message: error.message,
    })
  }
}
