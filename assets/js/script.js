var current = $("#currentDay");

console.log(current);

var today;
console.log(today);


// set today's date((
today = moment().format("dddd, MMMM DD");
current.text(today);


