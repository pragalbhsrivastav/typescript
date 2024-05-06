//  Write a MongoDB query to display all the documents in the collection restaurants.
db.data.find()

//  Write a MongoDB query to display the fields restaurant_id, name, 
// borough and cuisine for all the documents in the collection restaurant.

db.data.find({}, {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1} )

// Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
db.data.find({}, {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1, "_id": 0} )

// Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
db.data.find({"borough": "Bronx"})

// Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.data.find({"borough": "Bronx"}).limit(5)

// Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx
db.data.find({"borough": "Bronx"}).skip(5).limit(5)

// Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.data.find({"borough": "Bronx"})

// Write a MongoDB query to find the restaurants who achieved a score more than 90
db.data.find({ "grades.score": { $gt: 5 } })

db.collection.find({ "grades": { $not: { $elemMatch: { "score": { $lt: 90 } } } } }).count()

// Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100

db.collection.find({ "grades": {  $elemMatch: { "score": [ {$gt: 80, $lt: 100} ] } } } )