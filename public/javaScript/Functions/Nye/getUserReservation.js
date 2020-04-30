
axios.get('http://localhost:4000/user/reservation', {headers:{"authorization":`${Cookies.get("token")}`}})
    .then(response => {
        let reservations = response.data.reservations.map((reservation)=>{
            let user;
            if (reservation.customer.isAdmin){
                user = new Admin(reservation.customer.firstName, reservation.customer.lastName, reservation.customer.username, reservation.customer.password, reservation.customer.email);
            } else {
                user = new User(reservation.customer.firstName, reservation.customer.lastName, reservation.customer.username, reservation.customer.password, reservation.customer.email)
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
                user).tablePrepReservation()

        });

        document.getElementById("reservations").appendChild(buildTable(reservations));

    })
    .catch(err =>{
        console.log(err);
    });
