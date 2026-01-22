import express from "express"
import { validate } from "../middleware/validate.js";
import { createBookSchema } from "../validators/bookValidator.js";
import { createNewBook } from "../controllers/bookController.js";


const bookRouter=express.Router();
bookRouter.post("/",validate(createBookSchema),createNewBook);

export default bookRouter