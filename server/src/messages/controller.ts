import { Request, Response } from 'express'
import { sendDetails } from './service'

const sendData = async (req: Request, res: Response): Promise<void> => {
    try{
        const result = await sendDetails(req.body)
        if(result === 201)
            res.status(201).send({msg: "success"})
    }
    catch(e){
        res.send(e)
    }
}

export { sendData }