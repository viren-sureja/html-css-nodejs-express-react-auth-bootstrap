var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyparser = require('body-parser');

// app.use(bodyparser.json);
var jsonParser = bodyparser.json(); // parses from string to object
var urlencodedParser = bodyparser.urlencoded({ extended: false });

var mysqlConnection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'shiva',
	password: 'hiviren@3',
	database: 'user_demo',
	multipleStatements: true, // this helps to execute multiple sql statements separated by ;
});

mysqlConnection.connect((err) => {
	if (!err) {
		console.log('db connected...');
	} else {
		console.log(
			'db connection failed! \nError: ' + JSON.stringify(err, undefined, 2)
		);
	}
});

// welcome home
app.get('/', (req, res) => {
	res.send('welcome');
});

// get all the users
app.get('/users', (req, res) => {
	mysqlConnection.query('select * from user_info', (err, rows, fields) => {
		if (!err) {
			res.send(JSON.stringify(rows));
		} else {
			console.log(err);
		}
	});
});

// get an user
app.get('/users/:id', (req, res) => {
	mysqlConnection.query(
		'SELECT * FROM user_info WHERE user_id = ?',
		[req.params.id],
		(err, rows, fields) => {
			if (!err) {
				res.send(JSON.stringify(rows));
			} else {
				console.log(err);
			}
		}
	);
});

// delete an user
app.delete('/users/:id', (req, res) => {
	mysqlConnection.query(
		'DELETE FROM user_info WHERE user_id = ?',
		[req.params.id],
		(err, rows, fields) => {
			if (!err) {
				res.send(`${req.params.id} is successfully deleted`);
			} else {
				console.log(err);
			}
		}
	);
});

// add new user
app.post('/users/add', jsonParser, (req, res) => {
	let user = req.body; // here we have taken object in user to type less

	var sql =
		'set @user_id = ?; set @fname = ?; set @no_of_visit = ?; set @product_price = ?; \
        call UserAddorEdit(@user_id, @fname, @no_of_visit,@product_price);';
	mysqlConnection.query(
		sql,
		[user.id, user.name, user.visits, user.price],
		(err, rows, fields) => {
			if (!err) {
				res.send(`${user.name} is successfully added`);
			} else {
				console.log(err);
			}
		}
	);
});

// update user details
app.put('/users/add', jsonParser, (req, res) => {
	let user = req.body; // here we have taken object in user to type less

	var sql =
		'set @user_id = ?; set @fname = ?; set @no_of_visit = ?; set @product_price = ?; \
        call UserAddorEdit(@user_id, @fname, @no_of_visit,@product_price);';
	mysqlConnection.query(
		sql,
		[user.id, user.name, user.visits, user.price],
		(err, rows, fields) => {
			if (!err) {
				res.send(`${user.name} is successfully added`);
			} else {
				console.log(err);
			}
		}
	);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`express server is running at port no: ${port}...`)
);
