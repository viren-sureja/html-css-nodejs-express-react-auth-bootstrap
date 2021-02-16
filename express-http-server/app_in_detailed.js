const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// mongoose is ODM(object document mapping) lib
const Blog = require('./models/blog');
require('dotenv').config();

const dbURI = process.env.dbURI;
const PORT = process.env.PORT;

const dbURI = process.env.dbURI;

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>
		app.listen(PORT, () => console.log(`running on port ${PORT}`))
	)
	.catch((err) => console.log(err));

// express app
var app = express();

// register engine
app.set('view engine', 'ejs');
// app.set('views', '<name_of_desired_folder>')  // this is to change default folder.

// listening at port 3000
// app.listen(3000);

// middleware and static
app.use(express.static('public'));
// here we have allowed file in the "public" folder to be accessed by the browser.
// before that browser was not allowed to access any file.
app.use(express.urlencoded({ extended: true })); // here it means url encoded data to object data so that we can use.
app.use(morgan('dev'));

/* 
// mongoose and mongo sandbox routes.

// add/save the blog to db
app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'new blog',
		snippet: 'so on a wonderful day...',
		body: 'so this is my story written on a wonderful day...',
	});
	blog
		.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
});


// get all the blog
app.get('/all-blogs', (req, res) => {
	Blog.find()
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

// find single blog
app.get('/single-blog', (req, res) => {
	Blog.findById('602779a42dbdee08a8e20ee4')
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});
*/

/* app.use((req, res, next) => {
	console.log(
		'new request made:: ',
		'host: ',
		req.hostname,
		' path: ',
		req.path,
		' method: ',
		req.method
	);
	// console.log('host: ', req.hostname);
	// console.log('path: ', req.path);
	// console.log('method: ', req.method);
	next();
});

// next() is used to tell express to go to next after executed by this middle ware.
 */

// routes

app.get('/', (req, res) => {
	const blogs = [
		{
			title: 'Yoshi finds eggs',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
		{
			title: 'Mario finds stars',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
		{
			title: 'How to defeat bowser',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
	];
	// send is to send some html/some kind of snippet
	// sendFile is to send the whole static html
	// render is to render the ejs template.

	// res.send('<p>home page</p>');
	// res.sendFile('./views/index.html', { root: __dirname }); // here root: is to tell from where our browser should consider the path
	// res.render('index', { title: 'Home', blogs: blogs });
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	// res.send('<p>about page</p>');
	// res.sendFile('./views/about.html', { root: __dirname });
	res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // -1 means in descending order. can also use updatedAt.
		.then((result) =>
			res.render('index', { title: 'All Blogs', blogs: result })
		)
		.catch((err) => console.log(err));
});

app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'Create a new blog' });
});

app.post('/blogs', (req, res) => {
	const blog = new Blog(req.body);

	// saving the blog.
	blog
		.save()
		.then((result) => {
			res.redirect('/blogs');
		})
		.catch((err) => {
			console.log(err);
		});
});

// routes with the parameters
app.get('/blogs/:id', (req, res) => {
	const id = req.params.id;

	Blog.findById(id)
		.then((result) => {
			res.render('details', { blog: result, title: 'Blog details' });
		})
		.catch((err) => console.log(err));
});

app.delete('/blogs/:id', (req, res) => {
	const id = req.params.id;

	/* The redirect is usefull when handling normal requests 
	but won't work for AJAX requests (since browsers won't
	execute the 302 / redirect).This allows you to return 401
	responses for AJAX requests, which your javascript can then handle 
	by reloading the page */
	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => console.log(err));
});

/* // redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about');
}); */

// 404 page
// for eg. we go to '/abousldlf' then this will match at every route but will not match and will execute below portion.
app.use((req, res) => {
	// res.status(404).sendFile('./views/404.html', { root: __dirname });
	res.status(404).render('404', { title: '404' });
});
