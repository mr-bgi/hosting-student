const express = require('express');
// * static
const apiStatic = require('./routes/web/index');
// * Api
const apiStu = require('./routes/api/student');

const app = new express();
const port = 8080;



app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//* static
app.use(apiStatic);
//* API
app.use(apiStu);




app.listen(port,()=>console.log('Listen to port ',port));