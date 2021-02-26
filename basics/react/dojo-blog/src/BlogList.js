import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
	return (
		<div className="blog-list">
			<h1>All Blogs</h1>
			{blogs
				.slice(0)
				.reverse()
				.map((blog) => (
					<div className="blog-preview" key={blog.id}>
						<Link to={`/blogs/${blog.id}`}>
							<h2>{blog.title}</h2>
							<p>Written by {blog.author}</p>
						</Link>
					</div>
				))}
		</div>
	);
};

export default BlogList;
