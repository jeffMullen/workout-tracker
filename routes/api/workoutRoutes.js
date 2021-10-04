const router = require('express').Router();
const {
    getLastWorkout,
    addExercise,
    createWorkout,
    getWorkoutsInRange
} = require('../../controllers/workoutController');

// Get last workout
router.route('/').get(getLastWorkout);

// Add exercise to workout
router.route('/:id').put(addExercise);

// Create a new workout
router.route('/').post(createWorkout);

module.exports = router;