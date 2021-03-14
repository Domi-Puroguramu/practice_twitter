
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 firstname : {
   type : String,
   required :true
 },
 lastname : {
   type : string,
   required : true,
   unique :true,
   lowercase :true
 },
 email : {
   type: string,
   required : true,
   unique :true,
   lowercase :true,
 },
 password : {
   type : string,
   required :true,
 },
})

module.exports = mongoose.model('User',userSchema);