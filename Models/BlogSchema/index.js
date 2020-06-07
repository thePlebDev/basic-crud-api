//THE BLOG POST SCHEMA
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = require('../CommentSchema')

const blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  date: { type: Date, default: Date.now },
  comments:[]
})

//will create collection called blogs because that is just what mongoose automatically does
module.exports = mongoose.model('Blog',blogSchema)
