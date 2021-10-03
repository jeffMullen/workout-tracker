const { Workout } = require('../models');

module.exports = {
    getLastWorkout(req, res) {
        Workout.find()
            .then((workout) => res.status(200).json(workout))
            .catch((err) => res.status(500).json(err));
    },
    addExercise(req, res) {

    },
    createWorkout(req, res) {

    },
    getWorkoutsInRange(req, res) {

    },
};