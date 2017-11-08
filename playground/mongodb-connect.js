const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        // add return, to stop function if error occurs
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Max',
    //     age: 29,
    //     location: 'Chiang Mai'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to connect to server');
    //     }9

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.close();
});