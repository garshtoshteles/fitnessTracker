const router = require("express").Router();
const Workout = require("../schemas/workoutModel.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((data) => {
      console.log("Retrieved all workouts", data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  const newWorkout = req.body;
  console.log("New workout to create: ", newWorkout);
  Workout.create(newWorkout)
    .then((dbWorkout) => {
      console.log("New workout created: ", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      console.log("All workouts: ", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
