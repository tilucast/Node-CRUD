const todoTable = document.querySelector('#todo-table')
todoTable.addEventListener('click', e =>{
    const clicked = e.target
    if(clicked.dataset.type === 'remove'){
        try{
            const todoId = clicked.dataset.ref
            fetch(`http://localhost:3000/${todoId}`, {method: 'DELETE'})
            clicked.parentElement.parentElement.remove()
        }catch(err){
            console.error(err)
        }
    }
})

/*todoTable.addEventListener('focusout', e =>{
    if(e.target.dataset.ref === 'editable'){
        console.log(e.target.textContent)
        try{
            const todoId = e.target.dataset.id
            fetch(`http://localhost:3000/${todoId}`, {method: 'PUT'})
        }catch(err){
            console.log(err);
        }
    }
        
}) */

