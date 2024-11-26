// import the model
const Todo = require('../models/Todo');

// define Route Handler
exports.getTodo = async(req,res) => {
    try {
            // fetch all todo items from database
            const todos = await Todo.find({});

            // Response
            res.status(200).json({
                success: true,
                data: todos,
                message: 'Entire Todo Data is Fetched',
            });
        }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
};

exports.getTodoById = async(req, res) => {
    try {
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // Data for given id not found
        if(!todo) {
            return res.status(400).json({
                success: false,
                message: 'No Data Found with Given Id',
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
};