const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false  // when we find user from database the password field by default does not send with information
    },
    courses: [
        {
            courseid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Course",
                // required: true,
            },
            progress: {
                type: Number,
                default: 0,
                min: 0,
                max: 100,
                // required: true,
            },
            completedLessons: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Lesson",
                    // required: true,
                }
            ]
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;