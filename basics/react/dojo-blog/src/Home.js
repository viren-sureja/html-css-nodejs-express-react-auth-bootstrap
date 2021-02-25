import { useState } from 'react';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new blog', body: 'lorem ipsum...', author: 'viren', id: 1 },
		{
			title: 'Welcome to roadmap',
			body: 'lorem ipsum...',
			author: 'vidan',
			id: 2,
		},
		{
			title: 'plz support me!',
			body: 'lorem ipsum...',
			author: 'krish',
			id: 3,
		},
		{
			title: 'feeling lucky :)',
			body: 'lorem ipsum...',
			author: 'shiv',
			id: 4,
		},
	]);

	return (
		<div className="home">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
