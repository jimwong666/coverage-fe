// import logo from "./logo.svg";
import "./App.css";
import NotFound from "./NotFound";
import Home from "./Home";
import Page from "./Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	console.log("process.env.gitconfig", process.env.gitconfig);
	const localTime = new Date().getTime();
	if (localTime === 0) {
		console.log("localTime is 0");
	} else {
		console.log("localTime is ", localTime);
	}

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}

				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/page" element={<Page />} />
						<Route
							path="*"
							caseSensitive={true}
							element={<NotFound />}
						/>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
