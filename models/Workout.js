const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: 'Must select an exercise type'
                },
                name: {
                    type: String,
                    required: 'Must provide an exercise name'
                },
                duration: {
                    type: Number,
                    required: 'Must provide an exercise duration'
                },
                distance: Number,
                weight: Number,
                reps: Number,
                sets: Number
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

workoutSchema.virtual('totalDuration').get(function () {
    let totalDuration = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        totalDuration += this.exercises[i].duration;
    }
    return totalDuration;
})

const Workout = model('workout', workoutSchema);

module.exports = Workout;