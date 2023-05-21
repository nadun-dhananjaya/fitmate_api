import mongoose from "mongoose";

const SCHEMA = mongoose.Schema

const UserSchema = new SCHEMA({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    schedule : {
        type : [],
        require: false
    },
    progress : {
        type : [],
        require: false
    }
})

export default mongoose.model('user', UserSchema)
