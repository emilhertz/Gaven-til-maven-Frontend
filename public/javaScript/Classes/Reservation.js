class Reservation {
    constructor(id, timeInterval, customer, pax, comments){
        this.id = id;
        this.timeInterval = timeInterval;
        this.customer = customer;
        this.pax = pax;
        this.comments = comments;
    }
    //prep-methods prepares reservation objects to be displayed in tables
    tablePrepReservation(){
        return{
            Tidspunkt: this.timeInterval,
            Antal: this.pax,
            Kommentarer: this.comments,
            Afmeld: this
        }
    };
}