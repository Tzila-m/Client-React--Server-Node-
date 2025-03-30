const Todos = require("../models/Todos")

//creat
const createTodo = async (req, res) => {

    const { title, tags} = req.body

    if (!title)
        return res.status(400).json({ massage: "Cnnot creat new todo with no title" })

    const todo = await Todos.create({title, tags})
    const todoList = await Todos.find().sort({_id:1}).lean()

    if (todo)
        return res.status(201).json(todoList)

    else
        return res.status(400).json({ massage: "Cannot creat:(" })

}

//read
const getAllTodos = async (req, res) => {
    const todos = await Todos.find().sort({_id:1}).lean()
        return res.status(201).json(todos)
}

const getTodoById = async (req, res) => {

    const { id } = req.params
    const todo = await Todos.findById(id).lean()
    if (!todo)
        return res.status(401).json({ massage: "There is no todos" })
    else
        return res.status(201).json(todo)
}


//update
const updateTodo = async (req, res) => {

    const { title, tags } = req.body    
    const {id} = req.params
    
    if (!title )
        return res.status(401).json({ massage: "id / title  missing" })

    const todo = await Todos.findById(id).exec()
    if(!todo)
        return res.status(400).json(({ messange: 'todo is not defined' }))
    
    todo.title = title
    todo.tags = tags

    const updateTodo = await todo.save()

    const todoList = await Todos.find().sort({_id:1}).lean()
    return res.status(201).json(todoList)
}

const changeComplete= async (req,res)=>{
    const {id } = req.params
    if(!id)
        return res.status(401).json({ massage: "id missing" })
    const todo = await Todos.findById(id).exec()
    todo.completed=!todo.completed
    const updateTodo = await todo.save()

    const todoList = await Todos.find().sort({_id:1}).lean()
    return res.status(201).json(todoList)
}

//delete
const deleteTodo = async (req, res) => {
    const { id } = req.params
    const todo = await Todos.findById(id).exec()

    if (!todo)
        return res.status(401).json({ massage: "This todo not exist:(" })

    await todo.deleteOne()

    const todoList = await  Todos.find().sort({_id:1}).lean()
    return res.status(201).json(todoList)
}

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo ,changeComplete}


