function sayHello(country, time) {
    let greeting;
    let isMorning = time > 0 && time <12;
    let isEvening = time > 11 && time <24;
    let invalidTime = !isMorning && !isEvening; 
    
    while(isMorning === true){
    if(country === "Spain"){
        greeting ="buenos dias"
        console.log(greeting);
        break;
    }
    else if (country === "Mexico")
    {
        greeting ="buenos dias"
        console.log(greeting);
        break;
    } 
    else if (country ==="France")
    {
        greeting ="bon matin"
        console.log(greeting);
        break;
    }
    else {
        greeting = null
        console.log(greeting);
        break;
        }}
    
    while(isEvening){
        if(country === "Spain"){
            greeting = "buenas noches"
            console.log(greeting);
            break
        }
        else if (country === "Mexico")
        {
        greeting ="buenas noches"
        console.log(greeting);
        break;
        } 
        else if (country ==="France")
        {
            greeting ="bon soir"
            console.log(greeting);
            break;
        }
        else {
            greeting = null
            console.log(greeting);
            break;
        }}

    while(invalidTime){
        greeting = null
        console.log(greeting)
        break
    
        }
    // Don't change code below this line
    return greeting;
}

lexical scope:
let a;
let out = ()=>{
    let b= 0:
    console.log(a)
}
console.log(b) 
ref error because out of scope 


