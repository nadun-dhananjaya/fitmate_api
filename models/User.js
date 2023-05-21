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
    totalDays : {
        type :Number,
        require: false,
        default: 30
    },
    completedDays : {
        type :Number,
        require: false,
        default: 0
    },
})

export default mongoose.model('user', UserSchema)
