
axios.get('http://localhost:4000/user/reservation', {headers:{"authorization":`${Cookies.get("token")}`}})
    .then(response => {
        let reservations = response.data.reservations.map((reservation)=>{
            return new Reservation(
                reservation._id,
                reservation.timeOfReservation,
                currentUser,
                reservation.pax,
                reservation.comment
            )
                .tablePrepReservation()
        });

        document.getElementById("reservations").appendChild(buildTable(reservations));

        console.log(reservations);
    })
    .catch(err =>{
        console.log(err);

    });
