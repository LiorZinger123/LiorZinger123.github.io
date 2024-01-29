import { Router } from 'express'
import { sendData } from './controller'

const router = Router()

router.post('/api/send', sendData)

export default router