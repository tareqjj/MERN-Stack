const Player = require("../models/player.models");

module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(newPlayer => response.json(newPlayer))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllPlayers = (request, response) => {
  Player.find()
      .then(allPlayers => response.json(allPlayers))
      .catch(err => response.json(err))
};

module.exports.findPlayer = (request, response) => {
    Player.find({_id: request.params.id})
        .then(foundPlayer => response.json(foundPlayer))
        .catch(err => response.json(err))
};

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
      .then(updatedPlayer => response.json(updatedPlayer))
      .catch(err => response.json(err))
};

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};