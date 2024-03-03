//1: Higher order function = accepts functions as parameters or returns function

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


//1.1: high order function complex example
function wrapAsync(fn){
  return function(req,res,next){
    fn(req,res,next).catch(e=>next(e))
  }
}
app.get('/', wrapAsync(async(req,res,next)=>{
  //code
}))

//2 return value of function captured in x variable and returned
function bar(b){
  const c = b +1
  return c
}
function foo(a){
  if(a) x = bar(a) //different variable being assigned return value of bar()
  return x
}

function foo(a){
  if(a) a = bar(a) //a value being reassigned with the return value of bar()
  return a
}

console.log(foo(2))