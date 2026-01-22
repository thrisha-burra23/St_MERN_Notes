import mongose from "mongoose";

const userSchema = new mongose.Schema({
    userName: String,
    email: String,
    age: Number,
    mobile: Number,
    fullName: String
}, { timestamps: true });

const User = mongose.model("User", userSchema);

export default User;