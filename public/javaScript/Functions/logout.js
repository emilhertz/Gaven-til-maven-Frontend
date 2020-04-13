//function which deletes the signed in user from localStorage and returns user to home-page
let logout = ()=> {
    cookies.set('token', {expires: Date.now()});
    window.open("homePage.html", "_self");
};