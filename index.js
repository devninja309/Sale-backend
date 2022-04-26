import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routers/index.js";
import path from 'path'

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

const __dirname = path.resolve()
console.log(__dirname)

app.use(express.static(__dirname + "/public"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,  'public', 'index.html'));
});


app.listen(5000, () => console.log("Server running at port 5000"));
