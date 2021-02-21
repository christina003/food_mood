const mongoose = require("mongoose");

const db = require("./index.js");

const UserLikeRestaurantsSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  rating: Number,
  review_count: Number,
  url: String,
  distance: Number,
  groupLiked: Boolean,
  userLiked: Boolean,
});

const UserLike = mongoose.model("UserLike", UserLikeRestaurantsSchema);

module.exports = UserLike;
