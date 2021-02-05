var faker = require('faker');

class User {
    constructor() {
        this._id = faker.random.number();
        this.fistName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports = User;