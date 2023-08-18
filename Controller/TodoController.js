

// login part should be here only;

const { default: mongoose } = require("mongoose");
const { TodoModel } = require("../Model/TodoSchema")

// get todos

const getTodos = async (req, res) => {
    let todo = await TodoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(todo)
}


// single todo of the user

let singleTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ err: "No such todos avilable" })
    }
    const todo = await TodoModel.findById(id);
    if (!todo) {
        res.status(400).json({ err: "No such todos avilable" })
    }

    res.status(200).json({ single: todo })

}

// add todos

const addTodos = async (req, res) => {
    const { title, priority, DueDays } = req.body;
    try {
        let addTodo = new TodoModel({ title, priority, DueDays })
        await addTodo.save();
        res.status(200).json({ msg: "new Todo is added", addTodo })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


// edit todo

const editTodo = async (req, res) => {
    let { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ err: "No such todos avilable" })
        }
        const todo = await TodoModel.findByIdAndUpdate({ _id: id},req.body);
        if (!todo) {
            res.status(400).json({ err: "No such todos avilable" })
        }

        res.status(200).json({ updated: todo })
    } catch (error) {

    }
}


// delete todo

const deleteTodo=async(req,res)=>{
    let { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ err: "No such todos avilable" })
        }
        const todo = await TodoModel.findByIdAndDelete({ _id: id });
        if (!todo) {
            res.status(400).json({ err: "No such todos avilable" })
        }

        res.status(200).json({ Delete: todo })
    } catch (error) {

    }
}

module.exports = {
    getTodos, addTodos, singleTodo,editTodo,deleteTodo
}