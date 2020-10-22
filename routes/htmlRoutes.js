const router = require("express").Router(),
  Workout = require("../schemas/workoutModel.js");
router.get("/", (a, b) => {
  if (a) throw a;
  b.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/stats", (a, b) => {
  if (a) throw a;
  b.sendFile(path.join(__dirname, "../public/stats.html"));
});
router.get("/exercise", (a, b) => {
  if (a) throw a;
  b.sendFile(path.join(__dirname, "../public/exercise.html"));
});
module.exports = router;
