import  mongose  from "mongoose";
import { required, trim } from "zod/mini";

const bookSchema=new mongose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    publishedYear:{
        type:Number,
        min:1000,
        max:new Date().getFullYear()
    },
    pages:{
        type:Number,
        min:1,
        required:true
    },
    genre:{
        type:String,
        trim:true
    }
},{timestamps:true});

const Book=mongose.model("Book",bookSchema);

export default Book;