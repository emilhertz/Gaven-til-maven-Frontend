class Reservation {
    constructor(id, timeOfReservation, pax, comment, restaurant, customer){
        this._id = id;
        this.timeOfReservation = timeOfReservation;
        this.pax = pax;
        this.comment = comment;
        this.restaurant = restaurant;
        this.customer = customer;
    }
    //prep-methods prepares reservation objects to be displayed in tables
    tablePrepReservation(){
        return {
            Restaurant: this.restaurant.name,
            Adresse: this.restaurant.address.getAddress(),
            Tidspunkt: new Date(Number(this.timeOfReservation)).toLocaleString(),
            Antal: this.pax,
            Kommentarer: this.comment,
            Afmeld: this
        }
    };
}