import mongoose from "mongoose";
import Book from "../models/Book.js";

async function createNewBook(req,res){
    try {
        const newBookData=req.body;
        const {title}=newBookData;
        const existingBook= await Book.findOne({title});

        if(existingBook?._id){
            throw new Error("Already book exists with this title");
        }

       const newBook=mongoose.createConnection(newBookData) 
       if(!newBook._id){
        throw new Error("Book has not been saved to DB")
       }

       res.status(200).json({
        data:newBook,
        message:"new Book has been created"
       })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            error:true,
            message:error.message
        })
    }
}

export {createNewBook}