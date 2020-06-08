const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('src/databases/todos.db')

process.on('SIGINT', () =>
    db.close(() =>{
        console.log('Database closed.')
        process.exit(0)
    })
)

module.exports = db