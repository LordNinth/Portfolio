Backend

1: The back-end is all of the tech that are required to process the incoming requests and generate and send the response to the client. It has 3 major components:

i: server: The computer that receives the requests. A server is simply a computer that listens for an incoming requests. Any computer can be used as a server as long as it is connected to the internet and has appropriate software. In fact, you will be using your pc as a server when developing apps.  Server response can vary: html file, json or http status code which indicate what happened when server received the request.


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

-----

    Mapping out a request
    Let’s make all of this a bit more concrete, by following an example of the main steps that happen when a client makes a request to the server.

    1. Alice is shopping on SuperCoolShop.com. She clicks on a picture of a cover for her smartphone, and that click event makes a GET request to http://www.SuperCoolShop.com/products/66432.

    Remember, GET describes the kind of request (the client is just asking for data, not changing anything). The URI (uniform resource identifier) /products/66432 specifies that the client is looking for more information about a product, and that product, has an id of 66432.

    SuperCoolShop has an huge number of products, and many different categories for filtering through them, so the actual URI would be more complicated than this. But this is the general principle for how requests and resource identifiers work.

    2. Alice’s request travels across the internet to one of SuperCoolShop’s servers. This is one of the slower steps in the process, because the request cannot go faster than the speed of light, and it might have a long distance to travel. For this reason, major websites with users all over the world will have many different servers, and they will direct users to the server that is closest to them!

    3. The server, which is actively listening for requests from all users, receives Alice’s request!

    4. Event listeners that match this request (the HTTP verb: GET, and the URI: /products/66432) are triggered. The code that runs on the server between the request and the response is called middleware.

    5. In processing the request, the server code makes a database query to get more information about this smartphone case. The database contains all of the other information that Alice wants to know about this smartphone case: the name of the product, the price of the product, a few product reviews, and a string that will provide a path to the image of the product.

    6. The database query is executed, and the database sends the requested data back to the server. It’s worth noting that database queries are one of the slower steps in this process. Reading and writing from static memory is fairly slow, and the database might be on a different machine than the original server. This query itself might have to go across the internet!

    7. The server receives the data that it needs from the database, and it is now ready to construct and send its response back to the client. This response body has all of the information needed by the browser to show Alice more details (price, reviews, size, etc) about the phone case she’s interested in. The response header will contain an HTTP status code 200 to indicate that the request has succeeded.

    8. The response travels across the internet, back to Alice’s computer.

    9. Alice’s browser receives the response and uses that information to create and render the view that Alice ultimately sees!
