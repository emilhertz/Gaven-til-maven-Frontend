class User {
    constructor(id, firstName, lastName, userName, password, email) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = userName;
        this.password = password;
        this.email = email;
    }
}

//placeret midlertidigt her grundet moduler
class Admin extends User{
    constructor(id, firstName, lastName, userName, password, email){
        super(id, firstName, lastName, userName, password, email);
    }
}
