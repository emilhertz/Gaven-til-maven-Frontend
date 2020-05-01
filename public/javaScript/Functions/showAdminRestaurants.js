getAdminRestaurant()
    .then((restaurants)=>{
        let preppedRestaurants = restaurants.map(restaurant => {return restaurant.tablePrepAdmin()});
        document.getElementById("adminRestaurants").appendChild(buildTable(preppedRestaurants));
    });