const Match = require("../../database/MatchRestaurants");
const UserLike = require("../../database/UserLike");

const data = async (req, res) => {
  try {
    const userLike = await UserLike.find();
    const match = await Match.find();
    res.status(200).send({ userLike: userLike, match: match });
  } catch (err) {
    res.status(500).send(err);
  }
};

const matches = async (req, res) => {
  try {
    const match = await Match.find();
    res.status(200).send(match);
  } catch (err) {
    res.status(500).send(err);
  }
};

const newMatch = async (req, res) => {
  const restaurant = req.body;
  try {
    const newMatch = new Match(restaurant);
    await newMatch.save();
    res.status(200).send(newMatch);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

const newUserLike = async (req, res) => {
  const restaurant = req.body;
  try {
    const newLiked = new UserLike(restaurant);
    await newLiked.save();
    res.status(200).send(newLiked);
  } catch (err) {
    res.status(500).send(err);
  }
};

const removeMatch = async (req, res) => {
  const { id } = req.params;
  try {
    const remove = await Match.remove({ _id: id });
    res.status(200).send(remove);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  data,
  matches,
  newMatch,
  newUserLike,
  removeMatch,
};
