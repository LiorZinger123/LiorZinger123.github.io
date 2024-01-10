const api = async (url: string, data: any): Promise<Response> => {
    try{
        const res = await fetch(`http://localhost:5000/${url}`,{
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