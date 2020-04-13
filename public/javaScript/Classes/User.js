class User {
    constructor(id, firstName, lastName, userName, password, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    logout(){
    }
    newReservation(){
    }
}

//placeret midlertidigt her grundet moduler
class Admin extends User{
    constructor(id, firstName, lastName, userName, password, email, restaurants){
        super(id, firstName, lastName, userName, password, email);
        this.restaurants = [];
        this.admin = true;
    }
    newRestaurant(){

    }

    deleteUser(){
    }

    newReservation(){

    }
}
