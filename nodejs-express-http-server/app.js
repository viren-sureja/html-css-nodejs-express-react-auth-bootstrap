// MVC: model views controller
// and main aim to use this is to make code more cleaner, maintainble, reliable.

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

const dbURI = process.env.dbURI;
const PORT = process.env.PORT;

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>
		app.listen(PORT, () => console.log(`running on port ${PORT}`))
	)
	.catch((err) => console.log(err));

var app = express();

app.set('view engine', 'ejs');

// middleware and static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

// blogs route
// app.use(blogRoutes);     // this is to go and check in blogRoutes
app.use('/blogs', blogRoutes);
// whenever url starting with /blogs comes go to blogRoutes. so there's difference
// but don't forget to change the url/path for the same in blogRoutes.js
// caution: only to the handlers

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
