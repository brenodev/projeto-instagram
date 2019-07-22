const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  author: String, //autor do post 
  place: String, //local da foto
  description: String, //comentario no post
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true, //criar um campo
});

module.exports = mongoose.model('Post', PostSchema);