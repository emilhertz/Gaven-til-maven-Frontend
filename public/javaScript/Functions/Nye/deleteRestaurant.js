function deleteRestaurant(restaurantId) {

    let body = {
        restaurantId: restaurantId
    }

    console.log(Cookies.get("token"));

    axios.delete('http://localhost:4000/restaurant', body, {headers:{"authorization":`${Cookies.get("token")}`}})
        .then((response) => {
            alert(response.data.message);
    })
        .catch((e)=>{
            alert(e.response.data.message)
        })
}
