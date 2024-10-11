import IMAGE from "../Astronaut.jpg";
import SVG from "../tree.svg";
import { useNavigate } from "react-router-dom";
import "./Common.css";
import "./Common.scss";

export const HomePage = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/info");
	};
	return (
		<div>
			<h1>React Typescript WebPack</h1>
			<img src={IMAGE} alt="Image" width="300" height="200" />
			<img src={SVG} alt="Image" width="300" height="200" />
			<div className="myClass">
				This text will be styled by the imported SCSS or LESS.
			</div>

			<button onClick={handleButtonClick}>Go to Info Page</button>
		</div>
	);
};
