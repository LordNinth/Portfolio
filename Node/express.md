It is a node package which we install and it gives us methods, addon/plugins to build web app and make our own API

Https req a server i.e. google "search" . Server job is to take that query/url/request, figure out what to respond with and build that response and send it back. Listening to incoming req, figure out what they are asking for i.e. q?, add data to server and so on.
Build response and send it back. 

Express help us do the server side job.

What is framework?
 Libraries and framework are codes other people have written for us. They are code we download using npm/ or script (if we are doing client side js i.e bootstrap Js/ axios (http req library) and so on). But there is a difference in scope they aspire to: "inversion of control". We can integrate libraries at any point, it gives us methods/ func which we decide when to incorporate and how to use it. I.e axios/ color libraries. we can decide when to use it, we have control over it. Libraries often do smaller things for us. Single purpose, single use changing color, making http request.

Framework gives us infrastructure for app (games, ios app and so on), and we are writing code according to how the framework works, we are following the rule. We abide by this rule because it enables us to make full applications. Framework have broader utility. We give us control/flexibility for speed of development and bunch of features that framework provide. Different frameworks have different level of control. For e.g ruby will even dictate how variables are named. Express is definitely simpler and easier t learn.

We need to learn to incorporate our code into the flow of the framework.

sendFile() function in Express. js is mainly used to send the file at the given path whereas the render() function is used to render a view and send the HTML string to the client as a response