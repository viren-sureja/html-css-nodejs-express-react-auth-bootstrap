function App() {
	// basic learning

	const title = 'Welcome to the new Blog';
	const likes = 50;
	const link = 'www.google.com';
	return (
		<div className="App">
			<div className="content">
				<h1>{title}</h1>
				<p>Liked {likes} times</p>
				{/* it can't output the json object/ boolean value */}
				<p>{10}</p>
				<p>{'hello world'}</p>
				<p>{[1, 2, 3, 4, 5]}</p>
				<p>{Math.random()}</p>
				<a href={link}>google.com</a>
			</div>
		</div>
	);
}

// ans for que: how to handle events...
const Home = () => {
	const handleClick = () => {
		console.log('hello, all');
	};

	const handleClickAgain = (name, e) => {
		console.log('hello ' + name, e.target);
	};
	return (
		<div className="home">
			<h2>this is home page</h2>
			<button onClick={handleClick}>Click me</button>
			<button onClick={(e) => handleClickAgain('viren', e)}>
				click me again!
			</button>
		</div>
	);
};

// how to use useState hook
const Home = () => {
	const [name, setName] = useState('mario'); // we made "name" reactive using useState hook "setName"
	const [age, setAge] = useState(25);
	const handleClick = () => {
		setName('luigi');
		setAge(30);
	};
	// useState hook is used to make reactive element
	// and also provide a way to change value when we want to...

	return (
		<div className="home">
			<h2>Home Page</h2>
			<p>
				{name} is {age} old
			</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

// reusing component with filter of only mario's blogs.
<BlogList
	blogs={blogs.filter((blog) => blog.author === 'mario')}
	title="Mario's Blogs"
/>;

// this function run every render
useEffect(() => {
	console.log('useEffect is ran!');
}, [name]);
// empty array [] means run single time at starting render
// [names] means run at (starting render + when name changes)

// we can pass function as prop
<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />;
const handleDelete = (id) => {
	const newBlogs = blogs.filter((blog) => blog.id !== id);
	setBlogs(newBlogs);
};

/* use blogs && to avoid load data when it is null so will fetch from json server and display. */
{
	blogs && (
		<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
	);
}

// to handle props
// const BlogList = (props) => {
const BlogList = ({ blogs, title, handleDelete }) => {
	// another way to take props from parent component
	// props takes all the argument at a time
	// const blogs = props.blogs;
	// const title = props.title;
};
