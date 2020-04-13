class Address {
    constructor(id, streetName, streetNumber, zipCode, city, country){
        this.id = id;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }
    getAddress(){
        return `${this.streetName} ${this.streetNumber}, ${this.zipCode} ${this.city}, ${this.country}`
    }
}
