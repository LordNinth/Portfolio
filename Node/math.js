const add = (x, y) => x + y;
const pi = 3.1415;
const square = (x) => x * x;

//two ways to export
// 1) module.exports.add = add //by default it is empty obj. This is what I want to explicitly export
// module.exports.pi = pi
// module.exports.square = square or exports.square = square
//module.export by default gives us empty object

// 2) build on object and export that object

const math = {
  add: add,
  pi: pi,
  square: square,
};

module.exports.math = math;
