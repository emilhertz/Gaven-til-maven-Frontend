    showRestaurant = async() =>{
  //Defining request options
  const options = {
    method: "GET"
  };

  //Request that saves respond in variable
  const res = await fetch('http://localhost:4000/restaurant', options)
      //Procedure if no error
      .then((response)=>{return response.json()})
      //Procedure if fetch error (e.g. API not reachable)
      .catch((e)=>{return console.log(e)});
  if(res.errors) {
    console.log(res.errors)
  }

  //return restaurants
  let restaurants = res.restaurants;
  let rdyForTableRestaurants = restaurants.map((restaurant)=> {
     return {
      Navn: restaurant.name,
      Beskrivelse: restaurant.description,
      Addresse: `${restaurant.address.streetName} ${restaurant.address.streetNumber}, ${restaurant.address.zipCode} ${restaurant.address.city} ${restaurant.address.country}`,
      Siddepladser: 10,
      //same as when we used "this"
      Book: restaurant
    }

  });
  //table is appended to the document
  restaurantsDiv = document.getElementById("restaurants");
  restaurantsDiv.appendChild(buildTable(rdyForTableRestaurants));
};


showRestaurant();