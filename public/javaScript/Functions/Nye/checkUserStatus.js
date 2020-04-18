//checks if user is signed in and user type

let check = () => {
    //retrieves jwt
    let token = Cookies.get("token");

    //defining headers
    let headers = {headers: {'Authorization': token}};

    //Makes request to API
    axios.get('http://localhost:4000/check', headers)
    .then((response) => {
        //logic

    })
    //prodcedure if either API is not reachable or Auth failed
    .catch(() => {
        alert('Auth failed');
        document.open("homePage.html", "self");
    })
};