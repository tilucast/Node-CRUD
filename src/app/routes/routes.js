const {firstPage, createTodoTemplate} = require('../templates/templates')
const DbDao = require('../../config/DbDao')

module.exports = (app) =>{
    app.get('/', async (req, res) =>{
        try{
            const listTodos = await new DbDao().listTodos()
            res.send(firstPage(listTodos))
        }catch(err){
            console.error(err)
        }
    })

    app.get('/create-todo', (req, res) =>{
        res.send(createTodoTemplate())
    })

    app.get('/create-todo/:id', async (req, res) =>{
        try{
            const readTodo = await new DbDao().readTodo(req.params.id)
            res.send(createTodoTemplate(readTodo))
        }catch(err){
            console.log(err)
        }
    })

    app.post('/', async (req, res) =>{
        try{
            console.log(req.body)
            await new DbDao().createTodo(req.body)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    })

    app.put('/', (req, res) =>{
        try{
            console.log('updated')
            new DbDao().updateTodo(req.body)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    })

    app.delete('/:id', (req, res) =>{
        const id = req.params.id

        try{
            new DbDao().deleteTodo(id)
            res.status(200).end()
        }catch(err){
            console.log(err)
        }
    })
}