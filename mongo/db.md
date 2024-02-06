Binary json(Bson) is very compact and it allows us to store more datatypes than json. However, it is not human readable like json.

Json supports: String, bool, number and array
Bson: String, Boolean, Number(int, float,long,decimal...), Array, Date, Raw binary

Insert Methods
When inserting if collections doesn't exists, it creates for us.

commands:
//inserting one object
db.dogs.insert({name: "charlie", age:3, breed:"corgi", likeCat: true}) //dogs is empty collection, so dog will be created and object will be inserted.

inserting multiple obj in array
db.dogs.insert([{name:"wyat", breed:"golden"}, {name:"tonya", breed:"chihuahua"}])

show collections // show DBs
db.dogs.find() // shows all data of dog collection with unique id added

db.cat.insert([{name:"wyatss", breed:"golden"}, {name:"tonyaaa", breed:"chihuahua"}])

cats and dogs are in same DB. 
if we switch db, by use local. we wont see the collections