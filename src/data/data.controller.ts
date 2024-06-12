import { Request, Response } from 'express'
import CityModel from './data.model'

const { findAll } = new CityModel()

interface IApi {
  (req: Request, res: Response): void;
}

export const getData: IApi = async (req, res) => {
  try {
    const { station } = req.body

    const data = await findAll({ station })
    res.status(200).send({
      status: 200,
      data
    })
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: error
    })
    throw error
  }
}
