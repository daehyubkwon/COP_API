var express = require('express');

const cors = require('cors');

var app = express();

app.use(cors());    //cors 미들웨어h  hh

//api 서비스를 할 배열  
const contents = [
    {        
        name:'자동차',
        id:1,
        done:true
    },
    {        
        name:'신계약2',
        id:2,
        done:true
    }
]

// respond with "hello world" when a GET request is made to the homepage 
app.get('/', function(req, res) {
  //res.send('hello world');
  res.json(contents);
});

//express 웹서버 리스닝
app.listen(5000, () => console.log('Listening on port 5000'));