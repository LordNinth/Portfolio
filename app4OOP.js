//Prototype is a specific object/template that stores every method and properties for every array/string.
//Idea is object contains common properties and methods, that copies of other array/strings look up to find their common properties. Its a blueprint/template.

// Array.prototype is the actual object where we add methods/ properties . This is template object/prototype
// __proto__: Is a property name on any given Array/string. __proto__ is the property name that is used to reference prototype/ actual object

//1: Factory function is one way of creating object based off a pattern/recipe/blue-print

// This is a factory function. Makes us an object, starts empty we add property and Methods and  return that object. We defined a recipe function for color. However, it is not idea way to do it. Therefore, the invention of prototypes and Classes
// function makeColor(r, g, b) {
//   const color = {}; //empty object to start with
//   color.r = r; //properties
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const {r, g, b} = this; //this always refer to the nearest object to left
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color; // have to return at the end
// }

// const firstColor = makeColor(35, 255, 150); //instantiating a new obj with factory function. They have different reference so === false
// firstColor.hex(); //this is a method in makeColor func. its like. [arr].push (push is method to arr object
// //we don't need to add argument, method will look into first color object.
// firstColor.rgb();
// document.body.style.backgroundColor = firstColor.rgb();
// setTimeout(()=>{
//     document.body.style.backgroundColor = firstColor.hex(1);

// [NOTE: Each new Object created through Ff () will also have copy of properties and "methods". properties will always be needed as colors values will be different for each color.
// However, there is no need for unique copy of function itself.]
// [NOTE: every array built in array methods from one prototype Object.]

// },2000)

// 2: Constructor pattern
//constructor function for color. Upper case C
// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this) //this gives window object because this is a blueprint for object, not an object itself
//if we create method here, it will still be a unique copy. To avoid that we need to use prototype method outside this constructor
// }

//we need to use 'new' operator to instantiate object
//new operator wil:
//1) create a blank, plain JS Obj
//2)links (sets the constructor of) this object to another obj. i.e. prototype will have constructor set to Color ()
//3)passes the newly created obj  to this. i.e. this will refer to color obj in below example
//4)returns the object
// new Color(255,40,100)

// //To add a common method to __prototype__, we need to use prototype method. This can be accessed when needed,
// //wont make unique copy to every instance of color obj
// Color.prototype.rgb = function(){
//     const{r,g,b} =this;
//     return `rgb(${r},${g},${b})`
// }
// Color.prototype.hex = function(){
//     const{r,g,b} = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// //lets execute this method
// const color1 = new Color(40,50,60);
// const color2 = new Color(0,0,0)
//color1.hex === color2.rgb is true.
// NOTE: This is more efficient than factory ()approach, where we returned new obj every time it was executed and on that obj we added individual methods each time.

//[Cons: Constructor and methods are defined separately. Syntax aren't grouped together and looks clunky. Only benefit is it has one copy of function for all instances of Obj. To improve syntax, class keyword was introduced]

//3: Class

// class Color { //always capitalize class
//   constructor(r, g, b, name) { //first thing that needs to be defined
//     //constructor will always run immediately
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   //with class you can GROUP properties and methods together. They are added to the prototype automatically
//   innerRGB() {
//     const { r, g, b } = this; //destructure
//     return `${r},${g},${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`; //acessing other methods from within method
//   }
//   rgba(a = 1.0) {
//     return `rgb(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// }

// const red = new Color(255, 255, 89, "yellow");
// document.body.style.backgroundColor = red.rgba(0.5);


//3.1 Class extender will help reduce duplication of codes

class Pet{ //base class
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}
class Cat extends Pet{
    //sometimes you want to rely on constructor from super class i.e Pet
    //E.g if i want additional info on cat
    constructor(name,age,lives=9){
        //super references the class that is being extended
        super(name,age) //this will call the Pet constructor and allows us to reuse functionality from pet constructor. I.e inheritance
        this.lives = lives;
    }
    meow(){
        return 'Meowh!';
    }
}
class Dog extends Pet{ //this is exact same constructor as Pet. It will call that constructor automatically
    bark(){
        return 'woof!'
    }
}

const newCat = new Cat('lil', 7);
const newDog = new Dog('bork',4);