import User from "../models/User.js";

const requiredFields = [
    "username",
    "password",
    "schedule"
]
const createUser = (req,res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }
    else{
        const user = new User({
            username : req.body.username ,
            password : req.body.password,
            schedule : req.body.schedule
        });

        user.save().then(result => {
            res.send(`${result} is successfully created !`)
        }).catch(error => {
            res.send(`${error}`)
        })
    }
}

const checkLogin = (req,res) => {
    const username = req.body.username
    User.countDocuments({username: username}, function (err, count){
        if(count>0){

        }
        else{

        }
    })
}

