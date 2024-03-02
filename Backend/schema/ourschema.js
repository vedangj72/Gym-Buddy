const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Workoutschema = new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

}, { timeseries: true })

module.exports = mongoose.model('workout', Workoutschema);