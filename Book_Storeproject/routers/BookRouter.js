const express=require('express');
const app=express();
const BookController=require('../Controller/BookController')


app.post('/add',BookController.store);
app.get('/',BookController.index)
 app.get('/:id',BookController.single)
 app.delete('/:id',BookController.trash)
 app.put('/:id',BookController.Upadte)



// const Single=async(req,res)=>{
//     const id=req.params.id
//     console.log (id)

//     const Book=await Book.findById({_id:_id})
//     res.json({
//         Success:true,
//     })
// }
module.exports= app;

