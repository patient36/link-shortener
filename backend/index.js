import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import urlRouter from './routes.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', urlRouter)
const PORT  = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONN_STR)
    .then(() => {
        console.log("Connected to database")
        app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`)
        })
    }).catch(err => {
        console.log(err)
    })