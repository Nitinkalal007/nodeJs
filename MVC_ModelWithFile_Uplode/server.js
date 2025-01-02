const express=require('express')
const { default: mongoose } = require('mongoose')
const student = require('./model/StudentModel')
const app=express()
const port = 5500
require ('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({extended:true}))

const StudentRouter = require('./routers/StudentRouter')

app.use('/api/student',StudentRouter) 


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})
 mongoose.connect('mongodb+srv://nitinkalal01:HDV9cd8dNs2T70uL@cluster0.hcbvq.mongodb.net/rnw')
   
.then(()=>{console.log("db connected 👍...")})
.catch((err)=>{console.log(err)})

app.listen(port,()=>console.log(`port number is http://localhost:${port}`))






