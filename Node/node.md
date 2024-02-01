Backend

1: The back-end is all of the tech that are required to process the incoming requests and generate and send the response to the client. It has 3 major components:

i: server: The computer that receives the requests. A server is simply a computer that listens for an incoming requests. Any computer can be used as a server as long as it is connected to the internet and has appropriate software. In fact, you will be using your pc as a server when developing apps.


ii: the app: This is the application running on the server that listens for requests, retrieves information form the database and sends a response.
    
     The server runs an app that contains the logic about how to response to various requests based on HTTP verb (get, post, patch etc) and uniform resource identifier (URI). The pair of an http verb and URI is called a route and matching them based on a request is called routing. Often, programmer will use framework like Express/ Ruby on Rails to simplify the logic of routing. Each route will have one or many handler functions (cb ()) that are executed whenever a request to that route( http verb & URI) is matched.

iii: database: DB are used to organize and persist data.

Examples of backend processing include: 
i: process an incoming webpage request
ii: running a script to generate html
iii: accessing data from a database using sql queries
iv: storing or updating records in database
v: encrypting and decrypting data
vi: handling file uploads and downloads
vii: processing user inputs via js (only client side process i.e runs in the web browser)


2: There are web server and app server. Both are tech that allows the exchange of data and services over the internet. The client-server architecture is the underlying mechanism of the internet. When you visit website, as a client (browser) request info from remote server and displays the response. A web server is a software component which will request for static data like images,files and text in response to client request. When it is unable to form appropriate response, it will relay the request to app server which will then run the business logic to compute response and returns to the client. Then, client will display the information.


2.1: Web servers: It is a computer system that hosts websites. Everything that happens before scripts generate content of the page is part of backend. When you enter URL in browser, the url is actually identifier of the web server.

2.2: App server: It extends the capabilities of a web server by supporting dynamic content generation, application logic and integration with various resources. It provides a runtime environment where you can run application code and interact with other software components like messaging system and databases. It uses business logic to transform data more meaningfully than a web server.

    i: Browser will use URL to find server IP address
    ii: Browser will sent HTTP request for information
    iii: Web server communicates with database server to find relevant data. 
        Web server returns static data in an http response to the browser & browser will display the information
    iv: If no response found, web server transfers the req to app server
    v: Ap server applies business logic and communicates with other servers and third party systems to fulfill the request
    vi: The app server renders a new html page and returns as a response to the web server
    vii: Web server returns content in as http response to the browser and browser will display the info to user


-----------

1: File exporting on node:
In client side, we can include src in .html page. However, server side we need to export it.
syntax: module.exports.add = add

We can require file we create, we don't automatically get access to all files. 
We have to explicitly set module.export to include whatever properties /func variable we want to export. 
Modular export by default is empty obj and we can add properties to that. 
We can change modular export variable to anything but then it wont be exported. So don't use export as a variable name

2: npm init is easy way to make json, package.json contains meta data abt projects like dependencies and so on. 
It is useful for other team members to know what dependencies they need to use
As a collaborator, I can download the code, go to directory with package.json and type "npm install" to get all dependencies. It saves us lot of time

To download modules globally. npm i -g [module name]. All packages are usually downloaded locally.

3: npm i figlet to resolve error "not found package.json" in node module.

