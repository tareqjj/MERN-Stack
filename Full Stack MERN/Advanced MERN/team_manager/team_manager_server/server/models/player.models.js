const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [2, "Player name must be at least 2 characters long"]
    },
    preferredPosition: {
        type: String,
        required: [false, "Preferred position is optional"],
    },
    playerStatus: {
        type: String,
        default: "undecided"
    }
}, {timestamps: true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;