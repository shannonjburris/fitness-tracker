const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise: {
        type: Array,
    },
    name: {
        type: String,
        trim: true,
        required: "name is Required"
    },
    type: {
        type: String,
        trim: true,
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      day: {
        type: Date,
        default: Date.now,
      },

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;