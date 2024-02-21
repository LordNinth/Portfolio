Mongo DB General purpose document database. Mongo is no SQL. It uses JS syntax.
It structures data in documents which are similar to json objects. This model makes it easier to plan how app data will correspond to data in DB, it can model data of any shape: key-value, geo space. One format for any applications.

---

Document is basic unit data in MongoDB: { "key": value}. Every document requires an \_id field which acts as primary key. If doc have no id, MongoDb automatically generates it. By default, it supports polymorphic documents with flexible schema. It can change as requirement change.
Collection is grouping of the documents
A DB is container for collections
MongoDb is core of Atlas

---

Binary json(Bson) is very compact and it allows us to store more datatypes than json. However, it is not human readable like json.

Json supports: String, bool, number and array
Bson: ObjectId, String, Boolean, Number(int, float,long,decimal...), Array, Date, Raw binary

commands:
Open shell //mongosh
Use animalShelter // creates a new collection
db // shows current collection

./ means this directory
../ one directory above current

Insert Methods
Specify collection you want to insert
When inserting if collections doesn't exists, it creates for us.

//Create
1: Inserting one object
db.dogs.insert({name: "charlie", age:3, breed:"corgi", likeCat: true}) //dogs is empty collection, so dog will be created and JS object will be inserted. Mongo methods will turn passed object into Bson.

inserting multiple obj in array
db.dogs.insert([{name:"wyat", breed:"golden"}, {name:"tonya", breed:"chihuahua"}])

show collections // show DBs
db.dogs.find() // shows all data of dog collection with unique id added

db.cats.insert([{name:"wyatss", breed:"golden"}, {name:"tonyaaa", breed:"chihuahua"}])

cats and dogs are in same DB.
if we switch db, by use local. we wont see the collections

#Reading
2: Selective search using .find()
db.dogs.find({breed:"corgi"}) //find corgi breed in dog collection

.find({}) //find everything
.find() returns a cursor, its a pointer/reference to the result. It is not the result itself. It prevents 1000s of result being returned at once. Instead, we can iterate over a cursor and get the desired result.

.findOne() //returns the actual result/document

#update
3: db.dogs.updateOne({name:'Charlie'}, {$set: {age:4}}) //first arg is selector to find, second arg is the update. Use $set operator

db.dogs.updateMany({catFriendly: true}, {$set:{isAvailable: false}}) //if catFriendly, change availability to false.

There are many other operator like
$currentDate:{ lastModified:true} // this will change last modified to current date.

#delete
4: db.cats.deleteOne({name:"blue Steele"})
db.dogs.deleteMany({isAvailable:false}) //delete multiple
db.dogs.deleteMany({}) deletes entire collection

5: special operators
$gt: greater than
$lt: less than
$in: 
    i: find breed which is mutt or corgi , less than 10 aged
    db.dogs.find({breed: {$in: ['mutt', 'corgi']}, age:{$lt:10}})

$or: set it equal to array which has multiple expression
    db.dogs.find({
        $or: [{"personality.catFriendly": true}, {age: {$ltc:2}}]
})


--  Module 
Node.js allows JS programs to split into separate modules that can be imported whne needed.

exports
imports


module.exports property exports empty obj by default and is used to export JS values from modules. 
It can then be imported from other files for use.

---
File directory example
User/app/index.js views

path.join('__dirname', 'views') = Look for views folder in which current file is located.
 Not from where I executed nodemon from. I could run nodemon from User, which would give me error as view engine
will search for views folder in User/ instead of app.
Therefore, path.join will set __dirname to /App and look for views.


---
app.set() method accepts 2 argument. Key/Property and its value.
We use it to set 'view engine' to 'ejs'

When we make new express app, by setting view engine to ejs. 
Express app will look for ejs templates in view dir.

app.set('views', path.join(__dirname, '/views')) adds views to index.js(roots)

app.use(express.static(('public', path.join'__dirname, 'public')) to serve static images from index.js/root