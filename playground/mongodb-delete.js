const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        // add return, to stop function if error occurs
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // del

    // db.close();
});