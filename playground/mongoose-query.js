const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = '59f106cf4d9b3f0e8c376111';

if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todos',todo);
});

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo by Id',todo);
}).catch((e) => console.log(e));