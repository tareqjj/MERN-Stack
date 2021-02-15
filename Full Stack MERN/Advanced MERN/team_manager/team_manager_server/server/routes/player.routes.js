const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.post("/api/createPlayer", PlayerController.createPlayer);
    app.get("/api/getAllPlayers", PlayerController.findAllPlayers);
    app.get("/api/player/:id", PlayerController.findPlayer);
    app.put("/api/player/:id", PlayerController.updatePlayer);
    app.delete("/api/player/:id", PlayerController.deletePlayer);
}