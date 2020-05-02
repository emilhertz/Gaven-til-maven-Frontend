//Login request to API
let getSignedUserToken = (loginCredentials) => {
    return axios.post('http://localhost:4000/login', loginCredentials)
        .then((response) => {
            if (response.data.user.isAdmin){
                response.data.user = new Admin(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email);
            } else {
                response.data.user = new User(response.data.user._id, response.data.user.firstName, response.data.user.lastName, response.data.user.username, response.data.user.password, response.data.user.email);
            }
            return response;
        })
        .catch(e =>{
            return e.response
        })
};