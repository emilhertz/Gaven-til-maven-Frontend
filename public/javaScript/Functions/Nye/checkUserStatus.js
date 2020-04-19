//checks if user is signed in and user type

let check = (adminOnly) => {
    //retrieves jwt
    let token = Cookies.get("token");

    //defining headers
    let headers = {headers: {'Authorization': token}};

    //Makes request to API
    axios.get('http://localhost:4000/check', headers)
        .then((response) => {
            //admin check
            if (adminOnly) {
                //runs if user is admin
                if (response.data.isAdmin) {
                    console.log('Auth')
                    //display admin page in navbar
                    document.getElementById("admin").style.display = "block";
                //runs if user is not admin, but should be
                } else {
                    alert('Auth failed');
                    window.open("homePage.html", "_self");
                }
            }
            //runs if user is signed in and not required to be admin
            else {
                //hides or displays admin page in navbar
                if (response.data.isAdmin)
                    document.getElementById("admin").style.display = "block";
                else
                    document.getElementById("admin").style.display = "none";
                console.log('Auth')
            }
        })
        //procedure if either API is not reachable or Auth failed
        .catch((e) => {
            alert(e.response.data.message);
            window.open("homePage.html", "_self");
        })
};