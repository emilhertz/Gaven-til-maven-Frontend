axios.get('http://localhost:4000/restaurant/admin', {headers:{"authorization":`${Cookies.get("token")}`}})
    .then(response => {
        console.log(response.data.restaurants);
        let restaurants = response.data.restaurants.map(restaurant =>{
           return {
               Restaurant: restaurant.name,
               Addresse: `${restaurant.address.streetName} ${restaurant.address.streetNumber}, ${restaurant.address.zipCode} ${restaurant.address.city}`,
               Beskrivelse: restaurant.description,
               Rediger: restaurant
           }
        });
        document.getElementById("adminRestaurants").appendChild(buildTable(restaurants))
    })
    .catch(err =>{
        return []
    });

//table is appended to the document
//document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));