const router = require("express").Router();
const controller = require("./controller/index");

router.get("/restaurants", controller.getData);

router.get("/restaurants/matches", controller.getMatches);

router.post("/restaurants/matches", controller.saveMatch);

router.post("/restaurants/userlikes", controller.saveUserLike);

router.delete("/restaurants/matches/:id", controller.removeMatch);

module.exports = router;
