import Exercise from "../models/Exercise.js";

const requiredFields = [
    "exercise_name",
    "exercise_type",
    "instructor",
    "notes",
    "imageUrl",
    "videoUrl",
    "affecting_area",
    "bmi_range",
    "exercise_time",
    "rep_count",
    "fitness_goal"
]

export const ExerciseList = (req,res) => {
    const filter = {
       
    }
    Exercise.find(filter).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}`)
    })
}
