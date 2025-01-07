// import mongoose from "mongoose";
// const BookSchema=new mongoose.Schema({

// })

const {Schema,model}=require('mongoose')
const BookSchema=new Schema({
    book_name:String,
    book_author:String,
    book_price:Number

})
const Book= model('Book',BookSchema)
module.exports= Book;