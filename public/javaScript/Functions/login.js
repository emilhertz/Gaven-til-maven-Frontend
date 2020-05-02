//login metode
let login = async () => {
    //We are using the DOM to retrieve the values from our text-input in login.html.
    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    //Request-body defined
    const loginCredentials = {
        username: username.value,
        password: password.value
    };

    //NÅR EN BRUGER DER IKKE ER ADMIN LOGGER IND, SIGER DEN AUTH SUCCES OG AUTH FAILED, MEN VIRKER ELLERS

    let response = await getSignedUserToken(loginCredentials);

    if(response.status === 200){
        document.cookie = `token=${response.data.token}`;
        alert(response.data.message);
        if(response.data.user instanceof Admin){
            window.open("adminPage.html", "_self");
        } else {
            window.open("restaurants.html", "_self");
        }
    } else {
        alert(response.data.message);
    }
};