let storeUser = (user) => {
    axios.post('http://localhost:4000/user/create', user)
        .then(response => {
            // 201 = Status code for object created.
            if(response.status === 201){
                alert("Bruger oprettet!");
                //Procedure if no error
                window.open("login.html", "_self");
            }})
        .catch(err => {
            alert(`Kunne ikke oprette bruger, følgende fejl forårsaget det: ${err.response.data.errors}`);
        });
};