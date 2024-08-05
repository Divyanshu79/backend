import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'


dotenv.config()
const app = express()



app.get('/', (req, res) => {
    res.send("data has been sent succesfully :!!");

})


app.listen(process.env.PORT, () => {
    console.log('server is listening on port http://localhost:3000')
})
connectDB();