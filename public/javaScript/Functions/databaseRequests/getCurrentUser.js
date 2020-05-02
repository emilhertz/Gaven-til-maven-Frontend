//Makes request to API
let getCurrentUser = ()=>{
    //retrieves jwt
    let token = Cookies.get("token");

    //defining headers
    let headers = {headers: {'Authorization': token}};

    return axios.get('http://localhost:4000/check', headers)
        .then(response => {
            if (response.data.user.isAdmin) {
                response.data.user = new Admin(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            } else {
                response.data.user = new User(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email)
            }
            return response
        })
        .catch(e => {
            return e.response
        })
};