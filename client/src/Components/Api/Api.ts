import { SendData } from "../Types/types"

const api = async (url: string, data: SendData): Promise<Response> => {
    try{
        const res = await fetch(`http://lior-service-server/api/${url}`,{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        return res
    }
    catch(e){
        throw e
    }
}

export default api