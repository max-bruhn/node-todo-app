const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        // add return, to stop function if error occurs
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59faaa3b234bc3110e8ee660')
    // }).toArray().then((docs) => {
    //     console.log('todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('59faaa3b234bc3110e8ee660')
    // }).count().then((count) => {
    //     console.log('todos count:' + count);
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Max'}).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log('unable to find data', err)
    });

    // db.close();
});