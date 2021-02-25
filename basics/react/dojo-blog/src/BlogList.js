// const BlogList = (props) => {
const BlogList = ({ blogs, title, handleDelete }) => {
	// another way to take props from parent component
	// props takes all the argument at a time
	// const blogs = props.blogs;
	// const title = props.title;

	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
