var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;