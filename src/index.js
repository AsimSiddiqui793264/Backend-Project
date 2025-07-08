import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

dotenv.config({
    path : "./env"
});

connectDB()
.then(() =>{
    app.listen(PORT , () =>{
        console.log(`Server is runing on http://localhost:${PORT}`);
    });

    app.on("error" , (errro) =>{
        console.log("ERROR : " , errro);
        throw errro;
    })
})
.catch((err) =>{
    console.log("Monogo DB connection error is : " , err);
})