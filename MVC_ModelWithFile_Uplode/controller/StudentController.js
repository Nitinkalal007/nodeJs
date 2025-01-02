// const student = require("../model/StudentModel")
// const student = require("../model/StudentModel")
const Student=require("../model/StudentModel")
const store= async(req,res)=>{

    const { std_name, std_grid , std_email} = req.body
    try {
        if(std_name == "" || std_email == "" || std_grid == ""){
            res.json("All Fields are Required")
        }else{
            const student= await Student.create({
                std_name,
                std_grid,
                std_email,
                std_profile : req.file.originalname
            })

            if(student){
                res.json("Inserted")
            }
        }
    
    } catch (error) {
        res.json(error); // Log the full error object for debugging
        // return res.status(500).json({
        //     message: "An error occurred while inserting student",
        //     error: error.message || error
        // });

    }
}
const index= async(req,res)=>{
    const student= await Student.find();
    res.json({
        success:true,
        student
    })
}

const single=async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const student=await Student.findById(id)
    res.json({
        success:true,
        student
    })
}

const trash=async(req,res)=>{
    const {id}=req.params;
    const student=await Student.findByIdAndDelete(id)
    res.json("recored delete")
}
module.exports={store,index,single,trash}