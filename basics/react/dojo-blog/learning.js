import logo from './logo.svg';
import './App.css';

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
	const [name, setName] = useState('mario'); // we made "name" reactive using useState hook
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
