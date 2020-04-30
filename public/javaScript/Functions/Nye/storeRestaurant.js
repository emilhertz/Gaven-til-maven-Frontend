//Hele storeRestaurant
//Behøves dette at være en funktion?
async function storeRestaurant() {
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

    //new post request
    //Contains the restaurant instance as request body.
    //The cookie saved with the key "token" is added to header.authorization
    //written in axios syntax
    await axios.post('http://localhost:4000/restaurant/create', restaurant, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then((response) => {
            alert(response.data.message);
        })
        //Procedure if API is not reachable
        .catch((err) => {
            alert("Oprettelse af restaurant fejlede")
        });
    location.reload()
}