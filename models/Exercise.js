import mongoose from "mongoose";

const SCHEMA = mongoose.Schema

const ExerciseSchema = new SCHEMA({
    exercise_name: {
        type: String,
        required: true
    },
    exercise_type: {
        type: String,
        require: true
    },
    instructor: {
        type: String,
        require: true
    },
    notes: {
        type: [],
        required: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    videoUrl: {
        type: String,
        require: true
    },
    affecting_area : {
        type: String,
        require: true
    },
    bmi_range : {
        type: String,
        require: true
    },
    exercise_time : {
        type: Number,
        require: true
    },
    rep_count : {
        type: Number,
        require: true
    },
    fitness_goal : {
        type: String,
        require: true
    },
})

export default mongoose.model('exercise', ExerciseSchema)
