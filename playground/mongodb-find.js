// const mongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to mongodb server');

	db.collection('Todos').find({completed:true}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) =>{
		console.log('Unable to fetch data');
	});

	db.close();
	 
}); //url of the database, callback function which will fire when the connection is success or failure
