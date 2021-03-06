let getUserReservations = () => {
    //Creates a request to the API
    return axios.get('http://localhost:4000/user/reservation', {headers:{"authorization":`${Cookies.get("token")}`}})
        //We get a response with reservations
        .then(response => {
            return response.data.reservations.map((reservation)=>{
                let user;
                //Checks if it is an admin or a normal user and creates JS-object with the user.
                if (reservation.customer.isAdmin){
                    user = new Admin(
                        reservation.customer.firstName,
                        reservation.customer.lastName,
                        reservation.customer.username,
                        reservation.customer.password,
                        reservation.customer.email);
                } else {
                    user = new User(
                        reservation.customer.firstName,
                        reservation.customer.lastName,
                        reservation.customer.username,
                        reservation.customer.password,
                        reservation.customer.email)
                }
                return new Reservation(
                    reservation._id,
                    reservation.timeOfReservation,
                    reservation.pax,
                    reservation.comment,
                    new Restaurant(
                        reservation.restaurant._id,
                        reservation.restaurant.name,
                        new Address(
                            reservation.restaurant.address.streetName,
                            reservation.restaurant.address.streetNumber,
                            reservation.restaurant.address.zipCode,
                            reservation.restaurant.address.city,
                            reservation.restaurant.address.country),
                        reservation.restaurant.description),
                    user)

            });

        })
        .catch(err =>{
            console.log(err);
        });
};