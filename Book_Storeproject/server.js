const express=require('express')
const { default: mongoose } = require('mongoose')
const Book = require('./model/Bookmodel')
const app=express()
const PORT = 7000
require ('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({extended:true}))

  const BookRouter = require('./routers/BookRouter')

 app.use('/api/Book',BookRouter) 


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})
//  mongoose.connect('mongodb+srv://nitinkalal01:HDV9cd8dNs2T70uL@cluster0.hcbvq.mongodb.net/nk')
     mongoose.connect("mongodb+srv://nitinkalal01:HDV9cd8dNs2T70uL@cluster0.hcbvq.mongodb.net/rnw")
   
.then(()=>{console.log("db connected 👍...")})
.catch((err)=>{console.log(err)})

app.listen(PORT,()=>console.log(`port number is http://localhost:${PORT}`))

