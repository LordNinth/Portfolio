const express = require("express");
const app = express();

// app.use((req, res)=>{
//     res.send('here is  ur response') //anytime we call res.send we are done for that req. HTTP req only have one response. After this response, it wont send anymore http response back. We cannot send two things back

// })

//app.get expects two things: path that we are matching and CB() which runs whenever a req comes in matching specified path.

app.get("/", (req, res) => {
  //this is home page
  res.send("this is the home page");
});


app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1> Browsthe ${subreddit} `)
})
app.get('/r/:subreddit/:postId', (req,res)=>{ //have to make 2 get because only one response per CB
    const {subreddit,postId} = req.params;
    res.send(`<h1> Browsing the ${subreddit} ${postId}`)
})


app.post("/cat", (req, res) => {
  res.send("this is different");
});
app.get("/cat", (req, res) => {
  //whenever req comes in matching /cat, the Cb() will run
  res.send("meow meow");
});

app.get("/dog", (req, res) => {
  res.send("woof");
});

app.get("*", (req, res) => {
  //it has to be at last, routes are matched in order that is written
  res.send(`I dont know that path`);
});
app.listen(8080, () => {
  console.log("we are listening on 8080");
});

//Summary
//request is an object made by express based on incoming htp req
//response is an object made by express and has bunch of methods including .send which we use to send back content for e.g. string that will be turned into html
//Both are passed into CB()
//npm i -g nodemon (it restarts detecting any change on file)