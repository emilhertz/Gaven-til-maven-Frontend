getUserReservations()
    .then((reservations)=>{
        let preppedReservations = reservations.map(reservation => {return reservation.tablePrepReservation()});
        document.getElementById("reservations").appendChild(buildTable(preppedReservations));
    });