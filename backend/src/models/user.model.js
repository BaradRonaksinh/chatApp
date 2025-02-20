import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    }, {
    timestamps: true,
}
);

const User = mongoose.model("User", userSchema); // The first argument is the singular name of the collection 
// that will be created for your model (i.e. User) 
// and the second argument is the schema that you want to use for the model.

export default User;