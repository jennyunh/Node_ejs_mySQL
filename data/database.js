//ESTABLISH A CONNECTION TO THE MYSQL DATABASE WITH HELP OF THIRD PARTY PACKAGE MYSQL2


//the slash promise ensures the mysql2 will allow promises to work
const mysql = require('mysql2/promise');


//createPool takes an object as parameter then returns an object
const pool = mysql.createPool({
    //must provide the url of the host server
    host: 'localhost',
    //name of the database you wana connect to
    database: 'blog',
    user: 'root',
    password: '87111Sajh$'
})

//export the pool object so in other files you can import the object
//and query against that database
module.exports = pool;