class Reservation {
    constructor(id, timeInterval, pax, comments, restaurant, customer){
        this._id = id;
        this.timeOfReservation = timeInterval;
        this.pax = pax;
        this.comment = comments;
        this.restaurant = restaurant;
        this.customer = customer;
    }
    //prep-methods prepares reservation objects to be displayed in tables
    tablePrepReservation(){
        return {
            Restaurant: this.restaurant.name,
            Adresse: this.restaurant.address.getAddress(),
            Tidspunkt: this.timeOfReservation,
            Antal: this.pax,
            Kommentarer: this.comment,
            Afmeld: this
        }
    };
}