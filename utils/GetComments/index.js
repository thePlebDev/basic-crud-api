const BlogModel = require('../../Models/BlogSchema');


function getComments(){

  BlogModel.findOne({title:"this"},(err,blog)=>{
    if(err) return handleError(err)
    let arrays = blog.comments.map(item=> item.body)
    console.log(arrays)
  })
}

module.exports = getComments
