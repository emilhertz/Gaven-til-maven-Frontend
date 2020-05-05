function storeReservation(reservation){
    //post request containing the Reservation-instance as body and a JWT authorization token in the header
    //the parameter 'reservation' is defined in 'configure reservation'
    axios.post('http://localhost:4000/reservation', reservation, {headers:{"authorization":`${Cookies.get("token")}`}})
        //if it gets a correct response it alerts the message "Reserveret!"
        .then(response => {
            alert(response.data.message);
            //Refresh the html
            window.open("userReservations.html", "_self");
        })
        //Else et alerts an error-message
        .catch(err => {
            alert("Kunne ikke reservere pladser")
        })
}