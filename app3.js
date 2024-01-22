//Fetch and Axios
//XMLHtppRequest doesn't support promises. Therefore, fetch and axios succeeded it.

//1: Fetch sends request to the url and f() returns a promise. which maybe resolved or rejected
fetch("https://swapi.dev/api/people/1/")
  //response object is what we get back if its resolved, .then allows us to access it
  .then((res) => {
    //promise is resolved as soon as it receives any header, which means it may not have full data i.e readable stream
    console.log("resolved!", res);
    //res.json method parses the json & gives full data and returns promise. So chain .then to see the data we got back
    return res.json();
  })
  .then((data) => { //accessing value promise resolved with
    console.log("json done", data);
    return fetch("https://swapi.dev/api/people/2/"); //nesting 2nd request should also return promise
  })
  .then((res2) => {
    console.log("json done2 resolved", res2);
    return res2.json();
  })
  .then((res2) => console.log("json2 data", res2))
  .catch((e) => {
    console.log("error!", e);
  });
