const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
const {Todo} = require('./../models/todo');

//lets run some code before each test case
beforeEach((done) => {
	Todo.remove({}).then(() => done()); //deletes all todos
});

describe('POST /todos', () => {
	it('SHould create a new Todo', (done) => {
		var test = 'Test todo text';

		request(app).post('./todos').send({text}).expect(200).expect((res) => {
			expect(res.body.text).toBe(text);
		}).end((err,res) => {
			if(err){
				return done(err);
			}

			Todo.find().then((todos) => {
				expect(todos.length).toBe(1);
				expect(todos[0].text).tobe(text);
				done();
			}).catch((err) => {
				done(e);
			});
		});
	});

	it('Should not create todo with invalid body data', (done) => {
		request(app)
		.post('/todos').send({}).expect(400).end((err,res) => {
			if(err){
				return done(err);
			}

			Todo.fine().then((todos) => {
				expect(todos.length).toBe(0);
				done();
			}).catch((e) => done(e));
		});
	});
});