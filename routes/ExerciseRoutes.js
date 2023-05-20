import express from "express";
import {ExerciseList} from "../controllers/ExerciseController.js";


const ExerciseRoutes = express.Router()

ExerciseRoutes.get('/list', ExerciseList)

export default ExerciseRoutes
