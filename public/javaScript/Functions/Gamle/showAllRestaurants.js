axios.get("http://localhost:4000/restaurant")
    .then(response => {
        let restaurants = response.data.restaurants.map(restaurant =>{
            return new Restaurant(
                restaurant._id,
                restaurant.name,
                new Address(
                    restaurant.address.streetName,
                    restaurant.address.streetNumber,
                    restaurant.address.zipCode,
                    restaurant.address.city,
                    restaurant.address.country),
                restaurant.description).tablePrepBooking();

        });
        document.getElementById("restaurants").appendChild(buildTable(restaurants))
    })
    .catch(err => {
        alert("Kunne ikke hente restauranter")
    });