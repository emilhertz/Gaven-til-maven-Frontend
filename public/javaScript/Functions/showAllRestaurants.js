getAllRestaurants()
    .then((restaurants)=> {
        let preppedRestaurants = restaurants.map(restaurant => {return restaurant.tablePrepReserve()});
        document.getElementById("restaurants").appendChild(buildTable(preppedRestaurants))
    });
