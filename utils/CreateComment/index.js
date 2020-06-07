const mongoose = require('mongoose')

const CommentModel = require('../../Models/CommentSchema');
const BlogModel = require('../../Models/BlogSchema');


function addComment(){
  BlogModel.findOne({title:'this'},(err,blog)=>{
    const comment = new CommentModel({
      author:'Jones',
      body:'it was actually really bad lol',
      date: Date.now()

    })
    if(err) return handleError(err)
    blog.comments.push(comment)
    blog.save(err=>{
      if(err)return handleError(err)
      console.log('Success')
    })

  })
}



module.exports = addComment
