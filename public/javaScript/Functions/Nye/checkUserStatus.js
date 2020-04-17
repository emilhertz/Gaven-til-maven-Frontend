//checks if user is signed in and user type

let check = () => {
    //retrieves jwt
    let token = Cookies.get("token");

    //Makes request to API
    axios.get('http://localhost:4000/check', {auth: token})
    .then((response) => {
        //logic
        console.log('sker noget');
        console.log(response);
    })
    //prodcedure if either API is not reachable or Auth failed
    .catch(() => {
        console.log('Auth failed');
    })
};