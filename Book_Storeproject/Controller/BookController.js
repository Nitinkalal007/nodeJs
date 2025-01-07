const Books = require("../model/Bookmodel"); 

const store = async (req, res) => {
    const { book_name, book_author, book_price } = req.body; 

    try {
        const books = await Books.create({
            book_name,
            book_author,
            book_price
        });

        res.json({
            success: true,
            message: "Record added successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const index = async (req, res) => {
    try {
        const books = await Books.find(); 
        res.json({
            success: true,
            books
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching books"
        });
    }
};

//sinle user data

const single = async (req, res) => {
    const id = req.params.id; 
    console.log(id);

    try {
        const book = await Books.findById(id); 

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.json({
            success: true,
            book
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

///delete

const trash = async (req, res) => {
    const { id } = req.params;
    const Book = await Books.findByIdAndDelete(id)
    res.json("recored delete")
}
/////update

const Upadte=async(req,res)=>{
    const{id}=req.params;
    const{ book_name, book_author, book_price}=req.body;
    await Books.findByIdAndUpdate (
        {
            _id:id
            
},
{
    book_name, book_author, book_price
}
)
res.json({
    success:true,
    message:"record updated"
})
}
module.exports = { store, index, single ,trash,Upadte}; 
