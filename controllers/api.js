const router = require("express").Router();
const Workout = require('../models/workout');

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
  });



  router.put("/workouts/:id", ({ body, params }, res) => {
    //update workout with id here
    console.log(body);
    const workout = body;
    Workout.findByIdAndUpdate(
      { _id: `${params.id}` },
      { $push: { exercises: workout } }
    )
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    })
  });




router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.get('/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = router;