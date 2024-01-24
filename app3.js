//Fetch and Axios
//XMLHtppRequest doesn't support promises. Therefore, fetch and axios succeeded it.

//1: Fetch sends request to the url and f() returns a promise. which maybe resolved or rejected
// fetch("https://swapi.dev/api/people/1/")
//   //response object is what we get back if its resolved, .then allows us to access it
//   .then((res) => {
//     //promise is resolved as soon as it receives any header, which means it may not have full data i.e readable stream
//     console.log("resolved!", res);
//     //res.json method parses the json & gives full data and returns promise. So chain .then to see the data we got back
//     return res.json();
//   })
//   .then((data) => {
//     //accessing value promise resolved with
//     console.log("json done", data);
//     return fetch("https://swapi.dev/api/people/2/"); //nesting 2nd request should also return promise
//   })
//   .then((res2) => {
//     console.log("json done2 resolved", res2);
//     return res2.json();
//   })
//   .then((res2) => console.log("json2 data", res2))
//   .catch((e) => {
//     console.log("error!", e);
//   });

// //1.2 Fetch async enables us to refactor this code

// const loadCharacter = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/pe");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("error!", e);
//   }
// };

//TLDR: fetch returns promise, add .then/.catch to the res object. Res object is not automatically parsed, so we need to run .json method to fully parse the json

// [NOTE: Parsing of the json separately is needed to get full data!]

//3:Axios

//makes request and parses json and add it to the res object include
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log("error!", e);
//   });

// const getCharacter = async (num) => {
//   try {
//     const person = await axios.get(`https://swapi.dev/api/people/${num}/`);
//     console.log(person.data);
//   } catch (e) {
//     console.log("Error is:", e);
//   }
// };

//3.1: Axios and Header. Sometimes to request json, some API will have to specify headers, /json, or add &=json. In this e.g. we look at Accept header (object) set to application/json
// const jokes = document.querySelector("#joke");
// const button = document.querySelector("button");
// const hText = document.querySelector("h1");

// const dadJoke = async () => {
//   const config = { headers: { Accept: "application/json" } };
//   const res = await axios.get("https://icanhazdadjoke.com", config);
//   return res.data.joke;
// };
// //async function because we are waiting on promise value from dadJoke()
// const addJoke = async () => {
//   try {
//     const newJoke = await dadJoke(); //has to wait for dadJoke () to resolve promise, so await otherwise we get undefined result as there is no result
//     const liText = document.createElement("li"); //creating Li element
//     liText.append(newJoke); //setting li text
//     jokes.append(liText); //appending it to parent Ul element
//   } catch (e) {
//     console.log("error is", e);
//   }
// };

// button.addEventListener("click", addJoke); //only after clicking, dadJoke will execute

//3.2 TV show form
const form = document.querySelector("#searchForm");
const reset = document.querySelector("#clearImage");
form.addEventListener("click", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  //this config lets us add multiple variable to our search url
  const config = { params: { q: searchTerm } }; //making our query string object with property name params
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=`,
    config //whatever is under params, those key value pairs will be added
  );
  makeImages(res.data);
});

const container = document.querySelector("#container");
const uList = document.querySelector("#images");

// making image function
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      uList.append(img);
    }
  }
};

const clearImage = () => {
  const images = document.querySelectorAll("#images img");
  // for (let i = 0; i < images.length; i++) {
  //   images[i].remove()
  images.forEach(image => {image.remove()   
  });
  };
reset.addEventListener("click", clearImage);
