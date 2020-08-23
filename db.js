const mongojs = require('mongojs');

const databaseUrl = 'todoList';
const collections = ['ListOfTodo'];
const db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
	console.log('Database Error:', error);
});

module.exports = {

	dbListFindbyId: (id) => {
		return new Promise((resolve, reject) => {
			db.ListOfTodo.find({ "_id": mongojs.ObjectId(id) }, (err, data) => {
				if (err)
					reject();
				resolve(data);
			});
		});
	},
	dbListFindAll: () => {
		return new Promise((resolve, reject) => {
			db.ListOfTodo.find({}, (err, data) => {
				if (err)
					reject();
				resolve(data);
			});
		});
	},
	dbListUpdate: (data) => {		
		return new Promise((resolve, reject) => {
			db.ListOfTodo.updateOne({ "_id": mongojs.ObjectId(data.id) }, { $set: { description: data.description, date: data.date } }, (err, data) => {				
				if (err)
					reject();
				resolve(data);
			});
		});
	},
	dbListDelete: (id) => {
		return new Promise((resolve, reject) => {
			db.ListOfTodo.remove({ "_id": mongojs.ObjectId(id) }, (err, data) => {
				if (err)
					reject();
				resolve(data);
			});
		});
	},
	dbListAdd: (data) => {
		return new Promise((resolve, reject) => {
			db.ListOfTodo.insert(data, (err, data) => {
				if (err)
					reject();
				resolve(data);
			});
		});
	}

}