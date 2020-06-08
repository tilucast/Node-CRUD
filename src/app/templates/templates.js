const firstPage = (result) =>{
    return `
        <h1>Your Todos</h1>

        <table id="todo-table">
            <tr>
                <td><h4>Todo Name</h4></td>
                <td><h4>Todo Horary</h4></td>
                <td><h4>Editar</h4></td>
                <td><h4>Remover</h4></td>
            </tr>

            ${result.map(result => `
            <tr>
                <td data-ref="editable" data-id="${result.id}">${result.todo_name}</td>
                <td data-ref="editable" data-id="${result.id}">${result.todo_horary}</td>
                <td><a href="/create-todo/${result.id}" data-ref="${result.id}">Editar</a></td>
                <td><a href="#" data-ref="${result.id}" data-type="remove">Remover</a></td>
            </tr>
            `).join('')}
        </table>

        <h3><a href="/create-todo">Create a todo!</a></h3>

        <script src="/static/removeTodo.js"></script>
    `
}

const createTodoTemplate = result =>{
    
    if(result != undefined){
        return `
            <html>
            <body>

                <h1>Create a todo</h1>
                    
                <form action="/" method="post">

                <input type="hidden" name="_method" value="PUT"/>
                <input type="hidden" id="id" name="id" value="${result.id}" />

                    <div>
                        <label for="todo_name">Todo Description:</label>
                        <input type="text" id="todo_name" name="todo_name" value="${result.todo_name}" placeholder="Write the description" />
                    </div>
                    <div>
                        <label for="todo_horary">Todo Horary:</label>
                        <input type="text" id="todo_horary" name="todo_horary" value="${result.todo_horary}" placeholder="Ex: 17:50" />
                    </div>

                    <input type="submit" value="save" />

                </form>
            </body>
            </html>
        `
    } else{
        return `
            <html>
            <body>

                <h1>Create a todo</h1>
                    
                <form action="/" method="post">

                    <div>
                        <label for="todo_name">Todo Description:</label>
                        <input type="text" id="todo_name" name="todo_name" value="" placeholder="Write the description" />
                    </div>
                    <div>
                        <label for="todo_horary">Todo Horary:</label>
                        <input type="text" id="todo_horary" name="todo_horary" value="" placeholder="Ex: 17:50" />
                    </div>

                    <input type="submit" value="save" />

                </form>
            </body>
            </html>
        `
    }
}

exports.firstPage = firstPage
exports.createTodoTemplate = createTodoTemplate