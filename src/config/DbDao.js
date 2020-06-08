module.exports = class DbDao{
    constructor(){
        this._db = require('./database')
    }

    listTodos(){
        return new Promise((resolve, reject) =>{
            this._db.all(`SELECT * FROM todos`, (err, result) =>{
                resolve(result)
                reject(err)
            })
        })
    }

    createTodo({todo_name, todo_horary}){
        return new Promise((resolve, reject) =>{
            this._db.run('INSERT INTO todos (todo_name, todo_horary) values ( ?, ?)', 
            [todo_name, todo_horary], err => {
                if(!err)
                    return resolve('Todo created successfully.')
                reject(err)
            })
        })
    }

    readTodo(id){
        return new Promise((resolve, reject) =>{
            this._db.get('SELECT * FROM todos WHERE id=?', id, (err, result) =>{
                if(!err)
                    return resolve(result)
                reject(err)
            })
        })   
    }

    updateTodo({todo_name, todo_horary, id}){
        return new Promise((resolve, reject) =>{
            this._db.run(`UPDATE todos SET todo_name=?, todo_horary=? WHERE id=?`, 
            [todo_name,todo_horary,id], err =>{
                if(!err)
                    return resolve(console.log('Todo updated successfully.'))
                reject(err)
            })
        })
    }

    deleteTodo(todoId){
        return new Promise((resolve, reject) =>{
            this._db.run(`DELETE FROM todos WHERE id=?`, todoId, err =>{
                if(!err)
                    return resolve(console.log('Todo deleted successfully.'))
                reject(err)
            })
        })
    }
}