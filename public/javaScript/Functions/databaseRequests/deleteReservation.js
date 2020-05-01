let deleteReservation = (reservation) => {
    //retrieves jwt from cookies
    let token = Cookies.get('token');

    axios.delete('http://localhost:4000/reservation', {headers: {Authorization: token}, data: {reservation: reservation}})
        .then(response => {
            alert(response.data.message);
            location.reload()
        })
        .catch(e => {
            alert("Reservation kunne ikke slettes")
        })
};