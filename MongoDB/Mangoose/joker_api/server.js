const express = require("express");
const app = express();

require("./server/config/mongoose.config");

const AllMyJokesRoutes = require("./server/routes/joke.routes");
AllMyJokesRoutes(app);
app.use(express.json(), express.urlencoded({ extended: true }));


app.listen(8000, () => console.log("The server is all fired up on port 8000"));