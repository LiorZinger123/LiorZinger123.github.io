import app from "./app";
import connection from "./src/db/connection";
import { port } from "./config";

try{
    connection()
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
}
catch(e){
    throw e
}