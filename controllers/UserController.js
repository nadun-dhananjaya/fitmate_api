import User from "../models/User.js";

const requiredFields = [
    "username",
    "password",
]
export const createUser = (req, res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
    } else {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });

        user.save().then(result => {
            res.send(`${result} is successfully created !`)
        }).catch(error => {
            res.send(`${error}`)
        })
    }
}

export const checkLogin = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({
        username: username,
        password: password
    }).then(result => {
        if (result) {
            // Username and password are correct
            res.status(200).json({
                status: 200,
                message: 'Login successful'
            });

        } else {
            // Username or password is incorrect
            res.status(401).json({
                status: 401,
                message: 'Invalid credentials'
            });
        }
    }).catch(error => {
        res.status(500).json(
            {
                status: 500,
                message: 'Server Error'
            }
        );
    });

}

