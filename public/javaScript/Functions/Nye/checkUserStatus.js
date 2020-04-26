//checks if user is signed in and user type
var currentUser;

let check = (adminOnly) => {
    //retrieves jwt
    let token = Cookies.get("token");

    //defining headers
    let headers = {headers: {'Authorization': token}};

    //Makes request to API
    axios.get('http://localhost:4000/check', headers)
        .then((response) => {
            if (response.data.user.isAdmin){
                currentUser = new Admin(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            } else {
                currentUser = new User(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            }

            //admin check
            if (adminOnly) {
                //runs if user is admin
                if (currentUser instanceof Admin) {
                    console.log('Auth');
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
                if (currentUser instanceof Admin)
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