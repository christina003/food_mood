const {
  data,
  matches,
  newMatch,
  newUserLike,
  removeMatch,
} = require("./queries");

module.exports = {
  getData: (req, res) => data(req, res),
  getMatches: (req, res) => matches(req, res),
  saveMatch: (req, res) => newMatch(req, res),
  saveUserLike: (req, res) => newUserLike(req, res),
  removeMatch: (req, res) => removeMatch(req, res),
};
