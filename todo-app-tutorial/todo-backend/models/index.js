import mongoose from "mongoose";
import {todoModel} from "./todo.js"

mongoose.connect('mongodb://localhost:27017/todo-app',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);
mongoose.Promise = Promise;

export default {
    Todo: todoModel
}