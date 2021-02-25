import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new blog', body: 'lorem ipsum...', author: 'viren', id: 1 },
		{ title: 'Welcome user', body: 'lorem ipsum...', author: 'mario', id: 2 },
		{ title: 'support me!', body: 'lorem ipsum...', author: 'krish', id: 3 },
		{ title: 'i"m lucky', body: 'lorem ipsum...', author: 'mario', id: 4 },
	]);
	const [name, setName] = useState('mario');

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log('useEffect is ran!');
	}, []);

	return (
		<div className="home">
			<BlogList
				blogs={blogs}
				title="All Blogs"
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
