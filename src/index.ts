import bodyParser from 'body-parser'

import cors from 'cors'
import dotenv from 'dotenv'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { City } from './entities/City'
import { Temperature } from './entities/Temperature'
import express, { Express, NextFunction, Request, Response } from 'express'
import dataRouter from './data'
import { ValidationError } from 'express-validation'
dotenv.config()

export const createServer = async () => {
  const appDataSource = new DataSource({
    type: 'postgres',
    name: process.env.DB_USER,
    url: process.env.DB_URL,
    database: process.env.DB,
    password: process.env.DB_PWD,
    port: 43406,
    synchronize: true,
    entities: [City, Temperature],
    extra: {
      max: 1
    }
  })

  await appDataSource.initialize()
  const app: Express = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  app.use('/', dataRouter)

  app.use((err:ValidationError, req:Request, res:Response, next:NextFunction) => {
    if (err) {
      return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
  })
  return app
}

const init = async () => {
  const server = await createServer()
  const port = process.env.PORT
  server.listen(Number(port) || 3000, () => {
    console.log(`App running on port ${Number(port) || 3000}.`)
  })
}
export default init()
