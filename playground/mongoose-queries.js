const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

const userId = '5a03dc4368f9404664aab130';

if(!ObjectID.isValid(userId)) {
    console.log('user id not valid');
}

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('can not find user');
    }
    console.log(user)
}).catch((e) => {
    console.log(e);
});



// const id = '5a05516743084c1eb25e05c511';

// if(!ObjectId.isValid(id)) {
//     console.log('id is not valid');
// }

// // video mongoose queries
// // return array
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // returns object
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todoById) => {
//     if(!todoById) {
//         return console.log('id not found');
//     }
//     console.log('todoById', todoById);
// }).catch((e) => console.log(e));