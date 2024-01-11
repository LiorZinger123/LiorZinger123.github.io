import { Schema, model } from "mongoose";

interface Msg{
    name: String,
    phone: String,
    mail: String,
    msg: String
}

const schema = new Schema<Msg>({
    name: String,
    phone: String,
    mail: String,
    msg: String
},
    {
        versionKey: false
    }
)

const msgs = model<Msg>("messages", schema)

export default msgs