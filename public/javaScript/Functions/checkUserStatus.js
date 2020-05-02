//checks if user is signed in and user type
var currentUser;

let checkUserStatus = async (adminOnly) => {
    let response = await getCurrentUser();
    //admin checkUserStatus
    if (response.status === 200){
        currentUser = response.data.user;
        if (adminOnly) {
            //runs if user is admin
            if (currentUser instanceof Admin) {
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
            if (currentUser instanceof Admin){
                document.getElementById("admin").style.display = "block";
            } else{
                document.getElementById("admin").style.display = "none";
            }
        }
    } else {
        alert(response.data.message);
        window.open("homePage.html", "_self");
    }
};