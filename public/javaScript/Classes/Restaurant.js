//Restaurant-klasse
class Restaurant{
    constructor(id, name, address, menu, seats, reservations, description, openingHours) {
        this.id = id;
        this.name = name;
        this.address = address; //klasseindstands af addresse-klassen
        this.menu = menu; //array med product-indstandser?
        this.seats = seats; //samme som foroven?
        this.reservations = reservations;
        this.description = description;
        this.openingHours = openingHours;
    }
    addReservation(){
        //logik
    }
    //prep-methods prepares restaurant objects to be displayed in tables
    tablePrepBooking(){
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            Siddepladser: this.seats,
            //This returns the current restaurant-instance
            Book: this
        }
    };
    tablePrepAdmin() {
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            Siddepladser: this.seats,
            //This returns the current restaurant-instance
            Rediger: this
        }
    }
}

