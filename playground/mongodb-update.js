// const mongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to mongodb server');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("59f0f63f9d573f32606e1c41")
	},{
		$set:{
			completed: true
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result)
	});

	db.close();
	 
}); //url of the database, callback function which will fire when the connection is success or failure
