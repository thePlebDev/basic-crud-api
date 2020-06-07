const BlogModel = require('../../Models/BlogSchema');


function getBlogPosts(){
  const blogs = BlogModel.find({},(err,docs)=>{
    if(err) return handleError
    console.log(docs)
  })

 }


module.exports = getBlogPosts
