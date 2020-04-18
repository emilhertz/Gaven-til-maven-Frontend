//login metode
let login = () => {
    //We are using the DOM to retrieve the values from our text-input in login.html.
    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    //Request-body defined
    const body = {
        username: username.value,
        password: password.value
    };

    //Login request to API
    axios.post('http://localhost:4000/login', body)
        .then((response) => {
            //If the API accepts the login-credentials, we receive the status-code 200
            if (response.status === 200) {
                //behøves denne?
                //Saves JWT as cookie
                document.cookie = `token=${response.data.token}`;
                alert(response.data.message);
                //checks if user is admin
                if(response.data.isAdmin){
                    window.open("adminPage.html", "_self");
                } else {
                    window.open("reserve.html", "_self");
                }
            }
            // Alerts the error message if API does not accept login-credentials
            else{
                alert(response.data.message);
            }
        })
        //Procedure if API is not reachable
        .catch((err) => {
            alert('Auth failed')
        })
};