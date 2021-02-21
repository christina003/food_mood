const mongoose = require('mongoose');

const db = require('./index.js');

const MatchRestaurantsSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    rating: Number,
    review_count: Number,
    url: String,
    distance: Number,
    groupLiked: Boolean,
    userLiked: Boolean
})

const Match = mongoose.model('Match', MatchRestaurantsSchema);

module.exports = Match;