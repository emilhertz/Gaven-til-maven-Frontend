// Table borrowed from eloquent javaScript - Overview of the restaurants.

//function which creates a html-table in which restaturants are displayed
buildTable = objects => {
        let table = document.createElement("table");
        //keys which displays all of the different restaurant key's
        let keys = Object.keys(objects[0]);
        //row for keys
        let headRow = document.createElement("tr");
        //every header is appended to a cell in the head row
        keys.forEach(function(header) {
            let headCell = document.createElement("th");
            //key from keys-array is first converted to a text-node and then appended to head-table row
            headCell.appendChild(document.createTextNode(header));
            headRow.appendChild(headCell);
        });
    //headrow with all the restaurant keys is appended to the main table
    table.appendChild(headRow);

    //runs through all the different objects in the database, and creates individual rows
    objects.forEach(function(object) {
        let row = document.createElement("tr");
        //runs through all the properties of the current restaurant and creates cells
        keys.forEach(function(key) {
            let cell; //Cell variable is created in the correct scope
            if(key === "Book") {
                cell = document.createElement("button");
                cell.innerHTML = key;
                cell.onclick = ()=>{
                    reservationConfigurator(object.Book);
                    document.getElementById("restaurants").style.display = "none";
                }

            } else if(key === "slet") {
                cell = document.createElement("button");
                //cell.setAttribute("id", object.id);
                cell.innerHTML = key;
                cell.onclick = ()=>{
                    alert('Restaurant er slettet');
                }
            } else if(key === "Afmeld") {
                cell = document.createElement("button");
                cell.innerHTML = key;
                cell.onclick = deleteReservation;
            } else {
                cell = document.createElement("td");
                cell.appendChild(document.createTextNode(object[key]))
            }
            //table cell (td) is appended to a table row
            row.appendChild(cell);
        });
        table.appendChild(row)
    });
    return table;
};