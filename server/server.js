var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos}); //used object rather than array is flwxibility
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// var newTodo1 = new Todo({
// 	text: 'Proposed Shreekavya',
// });

// newTodo1.save().then((doc) => {
// 	console.log('Saved Todo', doc);
// }, (e) => {
// 	console.log('Unable to save');
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved Todo', doc);
// }, (e) => {
// 	console.log('Unable to save Todo');
// });



// var newUser = new User({
// 	email: 'avrcoder@gmail.com'
// });
// newUser.save().then((doc) => {
// 	console.log('Saved User',doc);
// }, (e) => {
// 	console.log(e);
// });

module.exports = {
	app
};