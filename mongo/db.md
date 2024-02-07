Mongo is no SQL. It uses JS syntax.

Binary json(Bson) is very compact and it allows us to store more datatypes than json. However, it is not human readable like json.

Json supports: String, bool, number and array
Bson: String, Boolean, Number(int, float,long,decimal...), Array, Date, Raw binary

commands:
    Open shell //mongosh
    Use animalShelter // creates a new collection
    db // shows current collection

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

db.cat.insert([{name:"wyatss", breed:"golden"}, {name:"tonyaaa", breed:"chihuahua"}])

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

There are many other operator like 
$currentDate:{ lastModified:true} // this will change last modified to current date.

#delete
4: db.cats.deleteOne({name:"blue Steele"})
db.dogs.deleteMany({isAvailable:false}) //delete multiple
db.dogs.deleteMany({}) deletes entire collection