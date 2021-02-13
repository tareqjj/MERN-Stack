const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get("/api/getAllAuthors", AuthorController.findAllAuthors);
    app.post("/api/createNewAuthor", AuthorController.createAuthor);
    app.get("/api/author/:id", AuthorController.findAuthor);
    app.put("/api/author/:id", AuthorController.updateAuthor);
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
}
