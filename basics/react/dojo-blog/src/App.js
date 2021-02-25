import Navbar from './Navbar';
import Home from './Home';

function App() {
	return (
		<div className="App">
			{/* navbar components */}
			<Navbar />
			<div className="content">
				{/* home components */}
				<Home />
			</div>
		</div>
	);
}

export default App;
