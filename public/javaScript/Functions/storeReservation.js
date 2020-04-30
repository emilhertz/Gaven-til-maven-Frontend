function storeReservation(timeOfReservation, pax, comment, restaurant, customer){

    //id is null, because the id is given on serverside
    let reservation = new Reservation(null, timeOfReservation, pax, comment, restaurant, customer);

    //post request containing the Reservation-instance as body and a JWT authorization token in the header
    axios.post('http://localhost:4000/reservation', reservation, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then(response => {
            alert(response.data.message);
            window.open("userReservations.html", "_self");
        })
        .catch(err => {
            alert("Kunne ikke reservere pladser")
        })
}