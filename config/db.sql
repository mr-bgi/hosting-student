const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sms1",
});

con.connect(function(error){
    if(error) throw error;
    console.log("connected to sql");
})

exports.query = (sql,value)=>{
    return new Promise((resolv,reject)=>{
        con.query(sql,value,(err,result)=>{
            if(err) reject(err);
            resolv(result)
        })
    })
}