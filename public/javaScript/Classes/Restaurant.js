//Restaurant-klasse
class Restaurant{
    constructor(id, name, address, description, admin) {
        this._id = id;
        this.name = name;
        this.address = address; //klasseindstands af addresse-klassen
        this.description = description;
        this.admin = admin
    }
    //prep-methods prepares restaurant objects to be displayed in tables
    tablePrepBooking(){
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            //This returns the current restaurant-instance
            Reserver: this
        }
    };
    tablePrepAdmin() {
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            //This returns the current restaurant-instance
            Slet: this
        }
    }
}

