//Dummy opening hours:
let openingTime = "12:00";
let closingTime = "01:00";
let dummybruger =  new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com");
let br = document.createElement("br");

let bookingRestaurant = restaurant =>{
    // Navigates to the div where the form is made
    let bookingDiv = document.getElementById("bookingForm");

    // CREATING PARAGRAPH ABOUT THE CHOSEN RESTAURANT:
    // Creating a new paragraph
    let restaurantParagraph = document.createElement("p");
    // Creating a string for the paragraph
    let restaurantString = `Bookning til følgende restaurant: ${restaurant.name}, ${restaurant.address.streetName} ${restaurant.address.streetNumber}, ${restaurant.address.zipCode} ${restaurant.address.city} ${restaurant.address.country}`;
    // Turning restaurantString into a text node and appending it to the paragraph
    restaurantParagraph.appendChild(document.createTextNode(restaurantString));
    bookingDiv.appendChild(restaurantParagraph);

    // CREATING PARAGRAPH ABOUT THE OPENING HOURS:
    // Creating a new paragraph
    let openingHoursParagraph = document.createElement("p");
    // Creating a string for the paragraph
    let openingHoursString = `Restauranten åbner kl. ${openingTime} og der kan sidst bestilles bord kl. ${closingTime}`;
    // Turning openingHoursString into a text node and appending it to the paragraph
    openingHoursParagraph.appendChild(document.createTextNode(openingHoursString));
    bookingDiv.appendChild(openingHoursParagraph);


    // CREATING THE BACK BUTTON:
    // Creating a new button
    let backButton = document.createElement("button");
    // Adding text to the button
    backButton.innerHTML = "Tilbage";
    // Creating button function
    backButton.onclick = ()=>{
        //The div that contains the form is cleared
        bookingDiv.innerHTML = "";
        //The tabel showing all the restaurant is made visible
        document.getElementById("restaurants").style.display = "block";
    };
    //The button is added to the div containing the form
    bookingDiv.appendChild(backButton);

    bookingDiv.appendChild(br);
    bookingDiv.appendChild(br.cloneNode());

    // CREATING THE FORM:
    // The form is created
    let bookingForm = document.createElement("form");

    // Creating selector
    let pax = document.createElement("select");
    // Giving the selector an id
    pax.id = "pax";
    // Adding options that can be selected:
    // Looping the same amount of times as there are seats in the restaurant
    for (let i=0; i<restaurant.seats; i++){
        // Creating an option
        let seats = document.createElement("option");
        // Adding text to the option
        seats.innerHTML = `${i+1} person(er)`;
        // Adding a value to the option
        seats.value = i+1;
        // Appending the option to the selector
        pax.appendChild(seats);
    }
    // Appending the selector to the form
    bookingForm.innerHTML += "Vælg antal personer: ";
    bookingForm.appendChild(pax);
    bookingForm.appendChild(br.cloneNode());

    //Creating date selector
    let date = document.createElement("input");
    date.type = "date";
    bookingForm.innerHTML += "Vælg dag: ";
    bookingForm.appendChild(date);
    bookingForm.appendChild(br.cloneNode());

    // Creating start time selector:
    let startTime = document.createElement("input");
    startTime.type = "time";
    startTime.id = "startTime";
    // Executes a callback function on blur
    startTime.onblur = ()=> {
        if ((closingTime > openingTime && (closingTime < startTime.value || startTime.value < openingTime)) || (closingTime < openingTime && closingTime < startTime.value && startTime.value < openingTime)){
            startTime.value = "";
            alert(`Der kan kun reserveres borde mellem kl. ${openingTime} og kl. ${closingTime}`)
        }
    };


    bookingForm.innerHTML += "Vælg tidspunkt: ";
    bookingForm.appendChild(startTime);
    bookingForm.appendChild(br.cloneNode());

    bookingForm.appendChild(br.cloneNode());
    let comments = document.createElement("textarea");
    comments.rows = "5";
    comments.placeholder = "Eventuelle kommentarer";
    bookingForm.appendChild(comments);
    bookingForm.appendChild(br.cloneNode());

    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Anmod reservation";
    submitButton.onclick = (event)=>{
        event.preventDefault();
        console.log(new Reservation(dummybruger.id,["test"], dummybruger, pax.value, comments.value));
    };
    bookingForm.appendChild(submitButton);



    bookingDiv.appendChild(bookingForm);

};
