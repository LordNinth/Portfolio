1: Embedded javascript

//npm i EJS (embedded javascript)


It allows us to add logic and interpolate dynamic values into HTML.
Syntax:
1: <%= >
If we code in between this, whatever value is inside will be outputted/rendered into the template

2:<% >
Data in between this wont be rendered into the template


2: Serving static files in express. This allows us to use css, jss, images 
app.use(express.static('public')) //public is the directory with //css, /js, /images


3:Partials 
Great tools to reduce code duplication

include function takes path to that template
<%- include('partials/head') %> 
<%- include('partials/nav') %> 