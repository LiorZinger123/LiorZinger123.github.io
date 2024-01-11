import msgs from "../db/model";
import { SendData } from "./types";

const sendDetails = async (data: SendData): Promise<number> => {
    try{
        const newMsg = new msgs(data)
        await newMsg.save()
        return 201
    }
    catch(e){
        throw e
    }
}

export { sendDetails }