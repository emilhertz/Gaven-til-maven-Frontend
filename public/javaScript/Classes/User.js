class User {
    constructor(id, firstName, lastName, userName, password, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    storeReservation(){

    }
    getReservations(){

    }
}

//placeret midlertidigt her grundet moduler
class Admin extends User{
    constructor(id, firstName, lastName, userName, password, email){
        super(id, firstName, lastName, userName, password, email);
    }
    storeRestaurant(){

    }
    deleteRestaurant(){

    }
    getRestaurants(){

    }
    getReservations() {
        super.getReservations();
    }
}
