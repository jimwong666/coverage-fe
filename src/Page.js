import { useNavigate } from "react-router-dom";

function Page() {
	const navigate = useNavigate();
	console.log("Page");

	return (
		<>
			<div className="page">page</div>
			<br />
			<br />
			<br />
			<div onClick={() => navigate("/")}>==&gt; home</div>
		</>
	);
}

export default Page;
