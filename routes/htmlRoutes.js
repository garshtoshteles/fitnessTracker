const router = require("express").Router(),
  Workout = require("../schemas/workoutModel.js");
router.get("/", (a, b) => {
  b.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/stats", (a, b) => {
  b.sendFile(path.join(__dirname, "../public/stats.html"));
});
router.get("/exercise", (a, b) => {
  b.sendFile(path.join(__dirname, "../public/exercise.html"));
});
module.exports = router;
