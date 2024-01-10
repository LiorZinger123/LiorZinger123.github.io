import express from 'express'
import { sendDetails } from './controller'

const router = express.Router()

router.post('/send', sendDetails)

export default router