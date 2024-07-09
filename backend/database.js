const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://125156123:22112003@cluster0.8bruvd7.mongodb.net/")


// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema= new mongoose.Schema({
    usedId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true,
        default:100
    }
})

const accountschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});


const User =mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema);
module.exports={
    User,
    Account
};
