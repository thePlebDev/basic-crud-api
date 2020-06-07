const mongoose = require('mongoose');
const Schema = mongoose.Schema //schema constructor function

 //Comment Schema
const commentSchema = new Schema({
  author: String,
  body: String,
  date: { type: Date, default: Date.now }
})


// creating the comment Model. will be stored in the collection called comments.
module.exports = mongoose.model('Comment',commentSchema)
