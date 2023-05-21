import express from "express";

import {checkLogin, createUser} from "../controllers/UserController.js"

const UserRoutes = express.Router()

UserRoutes.post('/create', createUser)

UserRoutes.post('/login', checkLogin)

export default UserRoutes
