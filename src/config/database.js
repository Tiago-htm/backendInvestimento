const {Pool} = require('pg')

// configuração da conexão do banco de dados (PGADMIN)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'investimento',
    password: '123',
    port:5432,
})


module.exports = pool