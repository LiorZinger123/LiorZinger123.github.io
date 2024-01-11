import mongoose from "mongoose";
import { url } from "../../config";

const connection = async (): Promise<typeof mongoose> => {
    try{
        const connect = await mongoose.connect(`${url}`)
        console.log("Connected to DB")
        return connect
    }
    catch(e){
        throw e
    }
}

export default connection