const mongoose = require('mongoose')

const Blog = mongoose.Schema({
    title:{ type : String, required:true, unique:true },
    body:{ type : String, required:true},
    author:{ type : String, required:true}
},
{ collection: 'blogs'}
)
const model = mongoose.model('Blogs', Blog)

module.exports = model