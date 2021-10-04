const { Workout } = require('../models');

module.exports = {
    getLastWorkout(req, res) {
        Workout.find()
            .then((workout) => res.status(200).json(workout))
            .catch((err) => res.status(500).json(err));
    },
    addExercise(req, res) {
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then((workout) => res.status(204).json(workout))
            .catch((err) => res.status(500).json(err));
    },
    createWorkout(req, res) {
        Workout.create(req.body)
            .then((newWorkout) => res.status(201).json(newWorkout))
            .catch((err) => res.status(500).json(err));
    },
    getWorkoutsInRange(req, res) {

    },
};