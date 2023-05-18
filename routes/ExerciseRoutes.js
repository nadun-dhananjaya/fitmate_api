import express from "express";
import {ExerciseList} from "../controllers/ExerciseController.js";


const ExerciseRoutes = express.Router()


ExerciseRoutes.post('/list', ExerciseList)

export default ExerciseRoutes
