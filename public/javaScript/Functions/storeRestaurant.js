let storeRestaurant = (restaurant) => {
    //new post request
    //Contains the restaurant instance as request body.
    //The cookie saved with the key "token" is added to header.authorization
    //written in axios syntax
    axios.post('http://localhost:4000/restaurant/create', restaurant, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then((response) => {
            alert(response.data.message);
            location.reload()
        })
        //Procedure if API is not reachable
        .catch((err) => {
            alert("Oprettelse af restaurant fejlede")
        });
}