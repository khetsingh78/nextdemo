import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide the name"]
    },
    email: {
        type: String,
        required: [true, "please provide the email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please provide the password"]
    },
    isVarified: {
        type: String,
        default: false
    },
    isAdmin: {
        type: String,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    varifyToken: String,
    varifyTokenExpriry: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

let User = mongoose.model('user', UserSchema);

export default User;