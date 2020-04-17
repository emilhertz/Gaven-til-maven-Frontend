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

    axios.post('http://localhost:4000/restaurant/create', body, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then((response) => {
            console.log(response)
        })
        //Procedure if API is not reachable
        .catch((err) => {
            alert('Auth failed')
        })
}