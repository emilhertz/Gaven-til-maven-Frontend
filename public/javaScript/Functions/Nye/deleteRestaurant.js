function deleteRestaurant(restaurantId) {

    //retrieves jwt from cookie
    let token = Cookies.get('token');

    //Sends delete requst to the endpoint below, with jwt token in the header and the restaurant id in the body
    axios.delete('http://localhost:4000/restaurant', {headers: {Authorization: token}, data: {restaurantId: restaurantId}})
        //waits for response from API and executes one of the following
        .then((response) => {
            alert(response.data.message);
    })
        .catch((e)=>{
            alert(e.response.data.message)
        })
}
