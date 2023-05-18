import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ExerciseRoutes from "./routes/ExerciseRoutes.js";

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
    // res.header('Content-Type', 'application/json');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use('/exercise', ExerciseRoutes)

mongoose.connect("mongodb+srv://knadundhananjaya98:j1LRw2LrV2cHwzqx@cluster0.q0mrgoe.mongodb.net/?retryWrites=true&w=majority").then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err)
})

