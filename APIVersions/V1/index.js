const express = require("express");
const api = express.Router();

const createBlogPost = require('../../utils/CreateBlogPost');
const addComment  = require('../../utils/CreateComment');
const getBlogPosts = require('../../utils/getBlogPosts');
const getComments = require('../../utils/getComments');




 //POST REQUESTS FOR CREATING THE BLOG POSTS AND THE COMMENTS ON THE BLOG POST
api.post('/createblogpost',(req,res)=>{
  createBlogPost();
  res.send('post created')
})
api.post('/createcomment',(req,res)=>{
  addComment()
  res.send('Comment created')
})

//GET REQUESTS FOR GETTING THE A BLOG POSTS AND THE COMMENTS ON THE BLOG POST
api.get('/getblogpost',(req,res)=>{
  // get all the blog posts
  getBlogPosts()
  res.send('got blog post')
})
api.get('/getcomment',(req,res)=>{
  //get all the comments a specific blogPost
  getComments()

  res.send('got comment')
})

module.exports = api
