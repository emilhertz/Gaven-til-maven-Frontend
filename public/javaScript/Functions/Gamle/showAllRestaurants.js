axios.get("http://localhost:4000/restaurant")
    .then(response => {
        let restaurants = response.data.restaurants.map((restaurant)=> {
            return {
                Navn: restaurant.name,
                Beskrivelse: restaurant.description,
                Addresse: `${restaurant.address.streetName} ${restaurant.address.streetNumber}, ${restaurant.address.zipCode} ${restaurant.address.city} ${restaurant.address.country}`,
                Siddepladser: 10,
                //same as when we used "this"
                Book: restaurant
            }

        });
        document.getElementById("restaurants").appendChild(buildTable(restaurants))
    })
    .catch(err => {
        alert("Kunne ikke hente restauranter")
    });