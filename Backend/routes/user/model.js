const db=require('../../db')
exports.getAlluser=(callback)=>{
const q='select *from employees';
db.query(q,callback())
}