// 1: JS is single threaded, one code at a time. However, JS call stack hands things to browser WEB Api
// which can do certain tasks like (making requests or setTImeout).
//The JS call stack recognizes these Web API functions and passes them to the browser to take care of.
//Once the browser finish those tasks, they return and are pushed onto the stack as a callback. This is how JS can perform multitask simultaneously.

console.log("js run1"); //runs first in callStack, sends request to server
setTimeout(() => {
  //JS cs recognize it as special web api fc() and pass it to WEB API
  console.log("code delayed for 2 second"); //after 2seconds are finished, web api will put it back to CB queue and then to callstack where JS will take over and run that CB.
}, 2000);
console.log("js run2");

// -----------------

//1.1: Callbacks are used to delay code execution. It is often used when there are dependent actions, i.e only after first thing is finished, second thing can happen
// searchMoviesAPI(amadeus, ()=>{ //it will search for that movie and then execute callback f()
//   saveToMyDB(movies, ()=>{
//     //success('if it works run this CB') as CB is called, I am also passing info in.
//   }, ()=>{
//     //failure('if it doesn't work, run this CB')
//   },()=>{
//     //if API is down, or request failed CB
//   })
// })
//Too many nested callbacks, i.e callback hell.
// --------------------

//1.2:  Making request with call back always require 2 callbacks (success, failure).
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("connection timeout") //according to mdn doc: failure msg is passed to failure callback
    } else {
      success(`here is your data from ${url}`) //success msg passed to success CB
    }
  }, delay);
}

fakeRequestCallback("books.com/page1",
  //data will print whatever was passed to the callback function
  function (data) {
    console.log("it work", data);
    //if I want to do second request, it gets very nested
    fakeRequestCallback("books.com/page2",
      function (data) {
        console.log("page 2 work", data);
      },
      function (err){
        console.log("page 2",err)
      })
    },  //this line ends success block
    function (err) {
    console.log("error", err);
  } //this line ends failure block
);

// 2: Promises
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
// const login = async (username, password) => {
//   //if either is missing throw error
//   if (!username || !password) throw "Missing credentials";
//   //if true, return else throw error
//   if (password === "password") return "Welcome";
//   throw "invalid password";
// };
// login("asdfas")
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function delayedColorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve()
//     }, delay);
//   });
// }
//delayColorChange returns promise and we attach .then method and return another promise
// delayedColorChange("red", 2000)
// .then(()=> delayedColorChange("green", 1000))
// .then(()=> delayedColorChange("blue", 1000))

//3: Async and await can enable us to avoid using .then method
// async function rainbow() {
//  await delayedColorChange('red', 2000) //waits for promise to resolve and returns promise
//  await delayedColorChange('green', 1000)
//  return 'all done' //returning value = resolved promise
// }

// rainbow().then(a=> console.log(a)) //printing the value promise resolved with
