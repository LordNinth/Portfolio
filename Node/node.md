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

