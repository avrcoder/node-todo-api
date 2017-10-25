// const mongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to mongodb server');

	//delete many
	// db.collection('Todos').deleteMany({title:'Eat lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	//delete one
	// db.collection('Todos').deleteOne({title:'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//find one and delete
	db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
		console.log(result);
	});
	 
}); //url of the database, callback function which will fire when the connection is success or failure
