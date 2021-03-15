import express from 'express'
import Controller from './controller'

const router = express.Router()
const controller = new Controller()

router.use(express.json())

router.get('/', controller.getLists)

export default router
