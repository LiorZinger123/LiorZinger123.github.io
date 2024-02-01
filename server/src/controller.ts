import { Request, Response } from 'express'
import { sendDetails } from './service'

const sendData = async (req: Request, res: Response): Promise<void> => {
    const result = await sendDetails(req.body)
    res.sendStatus(result)
}

export { sendData }