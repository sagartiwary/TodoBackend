const mongoose = require("mongoose");

// schema
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        default: 'First'
    },
    DueDays: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
}, {
    versionKey: false
});
// model
const TodoModel = mongoose.model("todo", todoSchema);
module.exports = {
    TodoModel
}