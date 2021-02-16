const Blog = require('../models/blog');

// blog_index
const blog_index = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) =>
			res.render('blogs/index', {
				title: 'All Blogs',
				blogs: result,
			})
		)
		.catch((err) => console.log(err));
};

// blog_details
const blog_detail = (req, res) => {
	const id = req.params.id;

	Blog.findById(id)
		.then((result) => {
			res.render('blogs/details', { blog: result, title: 'Blog details' });
		})
		.catch((err) => res.render('404', { title: 'blog not found' }));
};

// blog_create_get
const blog_create_get = (req, res) => {
	res.render('blogs/create', { title: 'Create a new blog' });
};

// blog_create_post
const blog_create_post = (req, res) => {
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
};

// blog_delete
const blog_delete = (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => console.log(err));
};

// if we are exporting blog: blog then we can simply write blog
module.exports = {
	blog_index,
	blog_detail,
	blog_create_get,
	blog_create_post,
	blog_delete,
};
