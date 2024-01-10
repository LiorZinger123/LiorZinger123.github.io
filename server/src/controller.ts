import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import { mail, pass } from '../config'
import { SendMail } from './types'

const sendDetails = (req: Request, res: Response): void => {
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: mail,
            pass: pass
            }
        })
        
        const mailOptions = {
            from: mail,
            to: mail,
            subject: 'Sent From Portfolio',
            text: `Name: ${req.body.name}, Phone: ${req.body.phone}, Mail: ${req.body.mail}, msg: ${req.body.msg}`
        }
        
        transporter.sendMail(mailOptions, (e: Error | null): void => {
            if(e)
                res.status(503)
            else
                res.status(200)
        })
    }
    catch(e){
        throw e
    }
}

export { sendDetails }