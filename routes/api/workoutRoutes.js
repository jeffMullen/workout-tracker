const router = require('express').Router();
const {
    getLastWorkout,
    addExercise,
    createWorkout,
    getWorkoutsInRange
} = require('../../controllers/workoutController');

// Get last workout
router.route('/').get(getLastWorkout);

module.exports = router;