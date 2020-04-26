axios.get('http://localhost:4000/restaurant/admin', {headers:{"authorization":`${Cookies.get("token")}`}})
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
                   restaurant.description).tablePrepAdmin();

        });
        document.getElementById("adminRestaurants").appendChild(buildTable(restaurants))
    })
    .catch(err =>{
        alert("Kunne ikke hente nogle restauranter")
    });
//table is appended to the document
//document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));