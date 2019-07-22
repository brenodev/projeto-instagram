const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');


module.exports = {
  //retorna uma lista de posts já cadastrados
  async index(req, res) {
    //organiza os postes em ordem decrescente
    const posts = await Post.find().sort('-createdAt');

    return res.json(posts);
  },

  //cadastra novos posts
  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    //redimenciona a image
    await sharp(req.file.path)
    .resize(500)
    .jpeg({ quality: 70 })
    .toFile(
      path.resolve(req.file.destination, 'resized', filename)
    )
   //pera permanecer somente imagens redimencionadas
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: filename,
    });

    req.io.emit('post', post);

    return res.json(post);
  }
};