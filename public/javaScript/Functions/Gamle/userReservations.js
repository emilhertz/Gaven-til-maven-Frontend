//dummy user
var loggedInUser1 = new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com");

//dummy restaurants
var reservation1 = new Reservation(1, 14.00, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 4, "4 flasker Möet til bordet");
var reservation2 = new Reservation(2, 17.00, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 8, "2 flasker Möet til bordet");
var reservation3 = new Reservation(3, 18.30, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 9, "9 flasker Möet til bordet");
var reservation4 = new Reservation(4, 20.00, new User(2,"Emil","Trækkerdreng","Grindrboi", "<=3", "hola@gmail.com"), 6,"Ingen Möet");

//Array with all dummy reservations
var reservationsArr = [];

//dummy reservations pushed to array
reservationsArr.push(reservation1.tablePrepReservation(), reservation2.tablePrepReservation(), reservation3.tablePrepReservation(), reservation4.tablePrepReservation());

//Array with the reservations of the signedIn user
var loggedInReservations = [];

//loop'et er ikke nødvendigt med node
//for-loop that pushe's the correct restaurants to the new array
for (i=0; i < reservationsArr.length; i++ ){
    if (loggedInUser1.id === reservationsArr[i].Afmeld.customer.id){
        loggedInReservations.push(reservationsArr[i]);
    }
}

deleteReservation = ()=> {
    alert("Reservationen er afmeldt");
    //mere logik i fremtiden
};

//table is appended to the document
document.getElementById("reservations").appendChild(buildTable(loggedInReservations));
