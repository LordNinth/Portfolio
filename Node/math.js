const add = (x, y) => x + y;
const pi = 3.1415;
const square = (x) => x * x;

//two ways to export
// 1) module.exports.add = add //by default it is empty obj. This is what I want to explicitly export
// module.exports.pi = pi
// module.exports.square = square or exports.square = square

// 2) build on object and export that object

const math = {
  add: add,
  pi: pi,
  square: square,
};

module.exports.math = math;


// TLDR: We can require file we create, we dont automatically get acesss to all files. We have to explicitly set module.export to include whatever properties /func variable we want to export. 
//Modular export by default is empty obj. We can add properties to that. We can change modular export variable to anything but then it wont be exported. So dont use export as a variable name

//3: npm init is easy way to make json, package.json contains meta data abt projects like dependencies and so on
//It is useful for other team members to know what dependencies they need to use
// As a collaborator, I can download the code, go to package.json and type "npm install" to get all dependencies