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

    //Defining req.body content
    const body = {
        name: restaurantName.value,
        address: {
            streetName: streetName.value,
            streetNumber: streetNumber.value,
            zipCode: zipCode.value,
            city: city.value,
            country: country.value
        },
        description: description.value
    };

    //new post request
    //Contains the object "body" from above as body.
    //The cookie saved with the key "token" is added to header.authorization
    //written in axios syntax
    await axios.post('http://localhost:4000/restaurant/create', body, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then((response) => {
            alert(response.data.message);
        })
        //Procedure if API is not reachable
        .catch((err) => {
            alert("Oprettelse af restaurant fejlede")
        });
    location.reload()
}