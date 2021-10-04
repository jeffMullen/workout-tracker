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

// Get aggregate stats of workouts for last 7 days - both combined weight and total duration
router.route('/range').get(getWorkoutsInRange);

module.exports = router;