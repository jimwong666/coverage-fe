import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	console.log("Home");

	return (
		<>
			<div className="home">这里是home</div>
			<br />
			<br />
			<br />
			<div onClick={() => navigate("/page")}>==&gt; page</div>
		</>
	);
}

export default Home;
