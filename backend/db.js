const mysql = require('mysql2')
const openConnection = ()=>{
    const con = mysql.createConnection(
        {
            uri: 'mysql://db:3306',
            user: 'root',
            //host: 'localhost',
            //port: 3306,
            database: 'mydb',
            password: 'root'
        }

    )
    con.connect()
    return con
}
module.exports={openConnection,}