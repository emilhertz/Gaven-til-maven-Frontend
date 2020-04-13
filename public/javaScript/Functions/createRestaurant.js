//function that creates a dynamic table that displays an admins restaurant
//example restaurant initialized, of which all belongs to admin
let resA1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");
let resA2 = new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],20,[],"Også en fin restaurant:)");
let resA3 = new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],30,[],"MEGET fin restaurant:)");

//array with example restaurants
let adminRes = [];

adminRes.push(resA1.tablePrepAdmin(), resA2.tablePrepAdmin(), resA3.tablePrepAdmin());


//table is appended to the document
document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));