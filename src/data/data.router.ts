import express from 'express'
import { getData } from './data.controller'

const router = express.Router()

router.route('/getData')
  .post(getData)
export default router
