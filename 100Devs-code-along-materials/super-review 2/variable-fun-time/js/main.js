//--- Easy
//create a variable and assign it a number
const num = 20;

//minus 10 from that number
subs = num - 10;

//print that number to the console
console.log(subs);

// //--- Medium
// //create a variable that holds a value from the input
// let holdValueInput = Number(
//   document.querySelector("#danceDanceRevolution").value
// );

// //add 25 to that number
// holdValueInput += 25;

// //alert that number
// alert(holdValueInput);

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener("click", addTwo);

function addTwo() {
  let holdValueInput = Number(
    document.querySelector("#danceDanceRevolution").value
  );
  holdValueInput += 25;

  console.log(num + holdValueInput);
}
