
const express = require('express');
const { connect } = require('./DB/db');
const { Router } = require('./Router/TodoRouter');
const app = express();
require('dotenv').config();
let port = process.env.PORT || 3000;
app.use(express.json());
app.use("/todo", Router)
app.listen(port, async (req, res) => {
    try {
        await connect;
        console.log(`db is connected at this port ${port}`)
    } catch (error) {
        console.log('db is not connected!!')
    }
})

