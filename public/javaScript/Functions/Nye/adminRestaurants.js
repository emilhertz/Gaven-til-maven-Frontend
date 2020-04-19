axios.get('http://localhost:4000/restaurant/admin', {headers:{"authorization":`${Cookies.get("token")}`}})
    .then(response => {
        let restaurants = response.data.restaurants.map(restaurant =>{
           return {
               Restaurant: restaurant.name,
               Addresse: `${restaurant.address.streetName} ${restaurant.address.streetNumber}, ${restaurant.address.zipCode} ${restaurant.address.city}`,
               Beskrivelse: restaurant.description,
               slet: restaurant._id
           }
        });
        document.getElementById("adminRestaurants").appendChild(buildTable(restaurants))
    })
    .catch(err =>{
        alert("Kunne ikke hente nogle restauranter")
    });

//table is appended to the document
//document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));