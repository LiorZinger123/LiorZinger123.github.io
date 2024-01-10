import app from "./app";
import { port } from "./config";

try{
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`)
    })
}
catch(e){
    throw e
}