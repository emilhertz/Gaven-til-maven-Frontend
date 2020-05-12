let getAllRestaurants = ()=> {
    //Sends a request to the API
    return axios.get("http://localhost:4000/restaurant", {headers:{"authorization":`${Cookies.get("token")}`}})
        //When we get the response it takes the restaurant and prints the following values
        .then(response => {
            //.map returns an array with the following values in an object for each restaurant
            return response.data.restaurants.map(restaurant =>{
                return new Restaurant(
                    restaurant._id,
                    restaurant.name,
                    new Address(
                        restaurant.address.streetName,
                        restaurant.address.streetNumber,
                        restaurant.address.zipCode,
                        restaurant.address.city,
                        restaurant.address.country),
                    restaurant.description);

            });
        })
        //alert an error if it occurs
        .catch(err => {
            alert("Kunne ikke hente restauranter")
        });
};