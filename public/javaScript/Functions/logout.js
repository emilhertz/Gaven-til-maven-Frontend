//function which deletes the signed in user from localStorage and returns user to home-page
let logout = ()=> {
    Cookies.remove('token', { path: 'Gaven-til-maven-Frontend' });
    window.open("homePage.html", "_self");
};