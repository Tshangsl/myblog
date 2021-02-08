const db = require('../models/db')

module.exports ={
    getByNameAndPwd(username,password){
        return db.query('select * from t_user where username=? and password=?',[username,password]);
    },
    registByNameAndPwd(username,nickname,password){
        return db.query('insert into t_user set ? ',{
           username,
           nickname,
           password 
        })
    }
}