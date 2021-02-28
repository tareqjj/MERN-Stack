const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"],
        unique: [true, "Question must be unique"],
        minLength: [10, "Question must be at least 10 characters long"]
    },
    optionOne: {
        answer: {
            type: String,
            required: [true, "Option One name is required"],
            minLength: [2, "Option One must be at least 2 characters long"],
        },
        votes: {
            type: Number,
            default: 0
        }
    },
    optionTwo: {
        answer: {
            type: String,
            required: [true, "Option Two name is required"],
            minLength: [2, "Option Two must be at least 2 characters long"],
        },
        votes: {
            type: Number,
            default: 0
        }
    },
    optionThree: {
        answer: {
            type: String,
            required: [false, "Option Three is optional"],
        },
        votes: {
            type: Number,
            default: 0
        }
    },
    optionFour: {
        answer: {
            type: String,
            required: [false, "Option Four is optional"],
        },
        votes: {
            type: Number,
            default: 0
        }
    },
    totalVotes: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;