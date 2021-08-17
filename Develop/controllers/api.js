const router = require("express").Router();
const Workout = require('../models/workout');

router.post('/workouts', ({body}, res) => {
    // code here
    const workout = new Workout(body);
});


router.put("/workouts/:id", ({ body, params}, res) => {
    // code here
});