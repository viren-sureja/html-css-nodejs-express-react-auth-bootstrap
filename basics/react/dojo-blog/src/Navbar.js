const Navbar = () => {
	// it doesn't matter if its arrow function or not.
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/create">New Blog</a>
			</div>
		</nav>
	);
};

export default Navbar;
