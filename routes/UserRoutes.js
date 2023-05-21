import express from "express";

import {checkLogin, completeDay, createUser} from "../controllers/UserController.js"

const UserRoutes = express.Router()

UserRoutes.post('/create', createUser)

UserRoutes.post('/login', checkLogin)

UserRoutes.post('/complete', completeDay)


export default UserRoutes
