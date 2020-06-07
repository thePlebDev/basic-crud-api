
const BlogModel = require('../../Models/BlogSchema')

//create an instace of the Blog model(also called a document)

function createBlogPost(){
  const aBlogPost = new BlogModel({
    title:'it do be like that sometimes',author:'bob jones',
    body:'this is the body',date:Date.now(),
  })
  aBlogPost.save(err=>{
    if(err) return handleError(err)
    console.log('Blog Post Created')
  })

}

module.exports = createBlogPost
