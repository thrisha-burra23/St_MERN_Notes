import express from "express"

import connectToDb from "./src/config/mongo-db.js";
import { userRouter } from "./src/routes/userRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
const PORT = 3000

const app = express();

app.use(express.json())

app.use("/user",userRouter)
app.use("/book",bookRouter)

async function connectBackend()
{
    await connectToDb();
    serverHttpStart();
}

function serverHttpStart() {
    app.listen(PORT, () => {       
        console.log("server is running")
        console.log(`http://localhost:${PORT}`)
    });
} 
connectBackend();
