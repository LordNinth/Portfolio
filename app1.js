//higher order function = accepts functions as parameters or returns function

function ageCheck(min, max) {
  return function (num) {
    return num > min && num < max;
  };
}
// executing ageCheck returns a function

const isChild = ageCheck(0,18);
//return function is captured in isChild variable. ageCheck and isChild both returns a function
//ageCheck returning another function is equivalent to assigning variable to ageCheck
//because variable will capture that return function

//we can use it as factory function to create more functions
const isSenior = ageCheck(18,65);

isChild(50) // false
isChild(5) // true
isSenior(50) //true
isSenior(5) //false