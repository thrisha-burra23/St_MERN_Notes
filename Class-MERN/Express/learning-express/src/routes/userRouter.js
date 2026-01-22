import express from "express";
import { createNewUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post("/user",createNewUser)

export {userRouter}