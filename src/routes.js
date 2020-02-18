import { Router } from 'express'

import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/', (request, response) => {
  return response.status(200).json({
    name: 'node_typescript',
    version: '1.0.0',
    description: 'Mini curso de node com typescript'
  })
})

routes.get('/users', UserController.index)

export default routes
