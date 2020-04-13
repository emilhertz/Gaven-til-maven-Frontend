// Hele storeRestaurant
async function storeRestaurant() {
    //Navigating to inputs and saving them to variables
    const restaurantName = document.getElementById("name");
    const streetName = document.getElementById("streetName");
    const streetNumber = document.getElementById("streetNumber");
    const zipCode = document.getElementById("zipCode");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const description= document.getElementById("description");

    //Defining req.body content
    const data = {
        name: restaurantName.value,
        address: {
            streetName: streetName.value ,
            streetNumber: streetNumber.value,
            zipCode: zipCode.value,
            city: city.value,
            country: country.value
        },
        description: description.value,
        adminId: "5e72239d4fed5f399a5f986b"
    };

    //Defining request options
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    //Request that saves respond in variable
    const res = await fetch('http://localhost:4000/restaurant/create', options)
        //Procedure if no error
        .then((response)=>{return response.json()})
        //Procedure if fetch error (e.g. API not reachable)
        .catch((e)=>{return console.log(e)});

    if(res.created === true){
        alert("Restaurant oprettet!");
        window.open("homePage.html", "_self");
    } else {
        alert(`${res.errors}`);
    }
}
