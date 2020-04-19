//checks if user is signed in and user type

    //retrieves jwt
    let token = Cookies.get("token");

    //defining headers
    let headers = {headers: {'Authorization': token}};

    //Makes request to API
    axios.get('http://localhost:4000/check', headers)
    .then((response) => {
        //logic
        console.log(response)
    })
    //procedure if either API is not reachable or Auth failed
    .catch((e) => {
        alert(e.response.data.message);
        window.open("homePage.html", "_self");
    })