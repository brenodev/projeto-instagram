const Post = require('../models/Post')

module.exports = {
  //cadastra novos posts
  async store(req, res) {
    //buscar registro do BD do post para dar like
    const post = await Post.findById(req.params.id);

    post.likes += 1;
    await post.save();

    req.io.emit('like', post);
    return res.json(post);
  }
};