//Makes request to API
let getCurrentUser = ()=>{
    //retrieves jwt
    let token = Cookies.get("token");
    if (token === undefined){
        throw "Auth failed"
    }
    //defining headers
    let headers = {headers: {'Authorization': token}};

    return axios.get('http://localhost:4000/check', headers)
        .then((response) => {
            if (response.data.user.isAdmin) {
                return new Admin(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            } else {
                return new User(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            }
        })
        .catch(e => {
            alert(e.response.data.message)
        })
};