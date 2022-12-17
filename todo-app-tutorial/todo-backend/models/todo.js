import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});

export const todoModel  = mongoose.model("Todo", todoSchema);