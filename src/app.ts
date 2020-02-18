import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
    public server : express.Application

    constructor () {
      this.server = express()

      this.middlewares()
      this.databases()
      this.routes()
    }

    private middlewares (): void {
      this.server.use(cors())
      this.server.use(express.json())
    }

    private databases (): void {
      mongoose.connect('mongodb://localhost:27017/typescript', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.server.use(routes)
    }
}

export default new App().server
