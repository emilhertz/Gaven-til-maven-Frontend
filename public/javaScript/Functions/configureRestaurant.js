//Hele storeRestaurant
//Behøves dette at være en funktion?
function configureRestaurant() {
    //Navigating to inputs and saving them to variables
    const restaurantName = document.getElementById("name");
    const streetName = document.getElementById("streetName");
    const streetNumber = document.getElementById("streetNumber");
    const zipCode = document.getElementById("zipCode");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const description = document.getElementById("description");

    let restaurant = new Restaurant(
        //id er null, da der tildeles et id på serverside
        null,
        restaurantName.value,
        new Address(
            streetName.value,
            streetNumber.value,
            zipCode.value,
            city.value,
            country.value
        ),
        description.value,
        currentUser
    );

    storeRestaurant(restaurant)
}