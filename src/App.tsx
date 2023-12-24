import "./App.css";
import "./App.scss";
import IMAGE from "./Astronaut.jpg";
import SVG from "./tree.svg";

const App = () => {
	return (
		<>
			<h1>React Typescript WebPack</h1>
			<img src={IMAGE} alt="Image" width="300" height="200" />
			<img src={SVG} alt="Image" width="300" height="200" />
			<div className="myClass">
				This text will be styled by the imported SCSS or LESS.
			</div>
		</>
	);
};

export default App;
