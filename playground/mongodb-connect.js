// const mongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

mongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined, 2)); //ops stores all the documents inserted
	// });

	db.collection('Users').insertOne({
		name: 'Vishwatej',
		age: 22,
		lover: 'Shreekavya'
	}, (err, result) => {
		if(err){
			console.log('Unable to insert', err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.close(); //closes the connection with the mongo server 
}); //url of the database, callback function which will fire when the connection is success or failure
