const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

// if PORT variable exists (heroku) will use it, otherwise 3000 (local)
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        // https://httpstatuses.com/
        res.status(400).send(e);
    });
});

// list resources video
app.get('/todos/', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// video: getting an individual request
// get /todos/123091283908
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {

        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    })
});

app.delete('/todos/:id', (req, res) => {
    // get id
    let id = req.params.id;

    // validate id, otherwise return 404
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    };

    Todo.findByIdAndRemove(id).then((todo) => {
        
        if(!todo) {
            return res.status(404).send();
        }

        res.send(todo);

    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () =>{
    console.log('startet on port ' + port);
} );

module.exports = {app};