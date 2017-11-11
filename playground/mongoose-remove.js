const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

// todo.remove

Todo.remove({}).then((result) => {
    console.log(result);
})

Todo.findByIdAndRemove('5a05516743084c1eb25e05c6').then((doc) => {
    console.log(todo);
});

// altern fineOneAndRemove({_id: '5a05516743084c1eb25e05c6'}).then...