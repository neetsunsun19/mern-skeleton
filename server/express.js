import express from 'express'
//import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { compress } from "compression";
import {  cors } from "cors";
import {  helmet } from "helmet";
import {  config } from "../config/config";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

export default app