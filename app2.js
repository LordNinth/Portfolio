// 1: Promises
// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("connection time out");
//       } else {
//         resolve(`success`);
//       }
//     }, delay);
//   });
// };

// fakeRequestPromise("page1") //makes request and promise is returned
//   .then((a) => {
//     //this method is run if promise is resolved
//     console.log(" page 1 works");
//     fakeRequestPromise("page2")
//       .then(() => {
//         console.log(" page 2 works");
//         fakeRequestPromise("page 3")
//           .then(() => {
//             console.log("page 3 works");
//           })
//           .catch(() => {
//             console.log("page 3 error");
//           });
//       })
//       .catch(() => {
//         console.log("page 2 error");
//       });
//   })
//   .catch((e) => {
//     // this method runs if promise is rejected Only one of the
//     //method runs depending on promise outcome
//     console.log("error", e);
//   });
// fakeRequestPromise("page1")
//   .then((a) => {
//     console.log("page 1 work", a);
//     //return a promise from our call back which allows us to chain .then method
//     return fakeRequestPromise("page2");
//   })
//   .then((a) => {
//     console.log("page 2 work", a);
//     return fakeRequestPromise("page 3");
//   })
//   .then((a) => {
//     console.log("page 3 work", a);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// // 1.1: creating own Promise
// // Promise takes two parameter resolve and reject (can be any name)
// // they are functions we can execute inside promise to represent promise status
// new Promise((resolve, reject) => {
//   resolve();
// });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success!!!!!!!!!!!!");
//       reject("error!!!!!!!!!");
//     }, 2000);
//   });
// };

// fakeRequest()
//   .then((a) => {
//     console.log("done with request", a);
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });
// ----------
//2: Async function

// const sing = async () =>{
//   throw 'UH HO HHOHO'
// }
// sing()
// .then(data=>{
//     console.log('resolved with data', data)
// })
// .catch(error=>{
//   console.log('rejected with', error)
// })

//2.1: Declaring async function returns promise.
//returning value is resolved(), error is rejected()
//if we return a value, promise will be resolved with value
const login = async (username, password) => {
  //if either is missing throw error
  if (!username || !password) throw "Missing credentials";
  //if true, return else throw error
  if (password === "password") return "Welcome";
  throw "invalid password";
};
login("asdfas")
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

function delayedColorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve()
    }, delay);
  });
}
//delayColorChange returns promise and we attach .then method and return another promise
// delayedColorChange("red", 2000)
// .then(()=> delayedColorChange("green", 1000))
// .then(()=> delayedColorChange("blue", 1000))

//3: Async and await can enable us to avoid using .then method
async function rainbow() {
 await delayedColorChange('red', 2000) //waits for promise to resolve and returns promise
 await delayedColorChange('green', 1000)
 return 'all done' //returning value = resolved promise
}

rainbow().then(a=> console.log(a)) //printing the value promise resolved with

