//1: Process object is always available in node. It is in the global scope. First two element is always ignored if we want to see arguments.
// console.log("hello from args file")
// console.log(process.argv)

//process.argv[2] //to ignore first 2 index

//2: File system module crash course.  All modules need to be require first before using. We do not have to download but its also not available by default. Therefore, we need to tell node we need access to it.

const fs = require("fs");

const folderName = process.argv[2] || "Project";
//async
// fs.mkdir('Dogs',{recursive:true},(err)=>{
//     console.log('In the call back')
//     if(err) throw err;
// });
// console.log('COme after mkdir')

//synchronous version
try {
  fs.mkdirSync(folderName);
  //this method requires file name (first argument) and the "data" argument. Data is the content you want written in file.
  fs.writeFileSync(`${folderName}/index.html`, ""); //'data' is empty string bcas we making empty file.
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("something went wrong", e);
}
