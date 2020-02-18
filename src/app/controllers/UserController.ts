import { Request, Response } from 'express'

import User from './../models/User'

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const users = await User.find()

    return response.status(200).json(users)
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const user = await User.create(request.body)

    console.log(user.email)
    console.log(user.fullName())

    return response.status(201).json(user)
  }
}

export default new UserController()
