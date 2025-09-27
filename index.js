import express from 'express'
import { router } from './routers.js'
let app = express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    console.log("Heloo")
    res.render("index")
})
app.use("/friend",router)
app.listen(3001)