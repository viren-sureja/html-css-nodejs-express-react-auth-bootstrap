import { Link } from 'react-router-dom';

const Navbar = () => {
	// it doesn't matter if its arrow function or not.
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	);
};

export default Navbar;
