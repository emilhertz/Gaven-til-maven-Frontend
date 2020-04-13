//login metode
let login = async ()=> {
    //We are using the DOM to retrieve the values from our text-input ind login.html.
    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    const body = {
        username: username.value,
        password: password.value
    };

    const http = new XMLHttpRequest();

    http.open('POST', 'localhost:4000/login');

    http.setRequestHeader("Content-Type", "application/json");

    http.withCredentials = true;

    http.send(JSON.stringify(body))

};


    /*
    //Defining request options
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };

    //Request that saves respond in variable
   await fetch('http://localhost:4000/login', options)
        //Procedure if no error
        .then((response)=>{
            //If the username and passwords are true, then we will recieve the auth 200.
            if (response.status === 200) {
                //Magi fra stack overflow
                response.json().then(body => {
                    alert(body.message);
                    //check if we need to write "true"
                    if(body.isAdmin){
                        window.open("adminPage.html", "_self")
                    } else {
                        window.open("reserve.html", "_self");
                    }
                });
            }
            // Alerts the error message if something goes wrong.
            else{
                response.json().then(body =>{alert(body.message)});
            }

        })
       
        //Procedure if fetch error (e.g. API not reachable)
        .catch((e)=>{return console.log(e)});


};




































    /*
    const user = await;

    //for-loop which uses operators to decide which user to sign in
    for (let i=0; i < listOfUsers.length; i++) {
        if (username.value === listOfUsers[i].userName && password.value === listOfUsers[i].password) {
            //Stores signed in user in localStorage as a string
            let signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            if(listOfUsers[i].admin === true){
                window.open("adminPage.html", "_self");
                return;
            } else {
                //opens home.html
                window.open("homePage.html", "_self");
                return;
            }
        }
    }
    alert("Forkert brugernavn eller password :(")
};



 */