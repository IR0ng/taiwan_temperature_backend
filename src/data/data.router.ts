import express from 'express'
import { getData } from './data.controller'

const router = express.Router()

router.route('/getData')
  .get(getData)
export default router
