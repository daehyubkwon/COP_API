const express = require('express');
const cors    = require('cors');
const mysql   = require('mysql');

const app = express();
app.use(cors());    //cors 미들웨어

var connection = mysql.createConnection({
    host     : '18.117.136.20',
    user     : 'lnijgdh',
    password : 'QWE123!@#',
    database : 'todo'
  });
   
connection.connect();


// respond with "hello world" when a GET request is made to the homepage 
app.get('/', function(req, res) {
    connection.query('SELECT * FROM TODO_LIST', function (error, rows) {
        if (error) throw error;
       // console.log('The solution is: ', results);
        res.send(rows);
    });
});  
   
//connection.end();

//api 서비스를 할 배열  
const contents = [
    {        
        _nm:'자동차',
        _id:1,
        done:true
    },
    {        
        _nm:'신계약2',
        _id:2,
        done:true
    }
]

//express 웹서버 리스닝
app.listen(5000, () => console.log('Listening on port 5000'));