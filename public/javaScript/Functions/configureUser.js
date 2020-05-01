async function configureUser() {
    //Navigating to inputs and saving them to variables
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    let user = new User(null, firstName.value, lastName.value, username.value, password.value, email.value);

    storeUser(user);
}




