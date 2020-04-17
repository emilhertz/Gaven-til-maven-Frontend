async function storeUser() {
    //Navigating to inputs and saving them to variables
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    //Defining req.body content
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value,
        email: email.value,
        isAdmin: false
    };

    //Defining request options
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    //Request that saves respond in variable
    const res = await fetch('http://localhost:4000/user/create', options)
        //Procedure if no error
        .then((response)=>{return response.json()})
        //Procedure if fetch error (e.g. API not reachable)
        .catch((e)=>{return console.log(e)});

    if(res.created === true){
        alert("Bruger oprettet!");
        window.open("login.html", "_self");
    } else {
        alert(`${res.errors}`);
    }
}
