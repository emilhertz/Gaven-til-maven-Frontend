function storeReservation(restaurantId, pax, timeCode, comment){

    const body = {
      timeOfReservation: timeCode,
      pax: pax,
      comment: comment,
      restaurantId: restaurantId
    };

    axios.post('http://localhost:4000/reservation', body, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then(response => {
            alert(response.data.message);
            window.open("userReservations.html", "_self");
        })
        .catch(err => {
            alert("Kunne ikke reservere pladser")
        })
}