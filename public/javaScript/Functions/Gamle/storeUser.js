async function storeUser() {
    //Navigating to inputs and saving them to variables
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    //Defining req.body content
    const body = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value,
        email: email.value,
        isAdmin: false
    };

      axios.post('http://localhost:4000/user/create', body)
          .then(response => {
              console.log(response);
// 201 = Status code for object created.
              if(response.status === 201){
                  alert("Bruger oprettet!");
                  //Procedure if no error
                  window.open("login.html", "_self");
          }})
          .catch(err => {
          alert(`Kunne ikke oprette bruger, følgende fejl forårsaget det: ${err.response.data.errors}`);

      });

};




