//Set up a query object with the content and the amount number of days till expired
var Query = 
{
    "produce": 8,
    "dairy": 5,
    "meat":6,
    "frozen": 10,
}

//Set up a Food array of objects with the example food content provide in the fridge.

var Food = [
{
  content: "produce",
  expirationDate: 0,
  lbs: 2.2
},
{
  content: "produce",
  expirationDate: 0,
  lbs: 2.2
},
{
  content: "dairy",
  expirationDate: 4,
  lbs: 1.4
},
{
  content: "produce",
  expirationDate: 8,
  lbs: 1.5
},
{
  content: "meat",
  expirationDate: 6,
  lbs: 0.75
},
{
  content: "snacks",
  expirationDate: 9,
  lbs: 0.55
},
{
  content: "frozen",
  expirationDate: 10,
  lbs: 4.8
},
{
  content: "produce",
  expirationDate: 10,
  lbs: 0.8
}
];

//Filtering thru the Food array of objects 
const expiredFoodArray = Food.filter(
expiredFoodItems =>
//after filtering thru each expiredFoodItems is each one of the objects in Food & expiredFoodItems["expirationDate"] giving you the individual property expirationDate
  expiredFoodItems["expirationDate"] >= Query[expiredFoodItems.content]
  //Query[expiredFoodItems.content] is the expiration date I am using to see if the expiredFoodItem is actually expired
);


console.log(expiredFoodArray)
