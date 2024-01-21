//Promises
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("connection time out");
      } else {
        resolve(`success`);
      }
    }, delay);
  });
};

fakeRequestPromise("page1") //makeS request and promise is returned
  .then((a) => {
    //this method is run if promise is resolved
    console.log(" page 1 works");
    fakeRequestPromise("page2")
      .then(() => {
        console.log(" page 2 works");
        fakeRequestPromise("page 3")
          .then(() => {
            console.log("page 3 works");
          })
          .catch(() => {
            console.log("page 3 error");
          });
      })
      .catch(() => {
        console.log("page 2 error");
      });
  })
  .catch((e) => {
    // this method runs if promise is rejected Only one of the
    //method runs depending on promise outcome
    console.log("error", e);
  });
fakeRequestPromise("page1")
  .then((a) => {
    console.log("page 1 work",a);
    //return a promise from our call back which allows us to chain .then method
    return fakeRequestPromise("page2");
  })
  .then((a) => {
    console.log("page 2 work", a);
    return fakeRequestPromise("page 3");
  })
  .then((a) => {
    console.log("page 3 work",a);
  })
  .catch((err) => {
    console.log("error",err);
  });

// creating own Promise
// Promise takes two parameter resolve and reject (can be any name)
// they are functions we can execute inside promise to represent promise status
new Promise((resolve, reject)=>{
  resolve()
})

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

fakeRequest()
.then(()=>{
  console.log('done with request')
})