import "./Common.scss";

const InfoPage = () => {
	return (
		<div style={{ border: "2px solid red", margin: "auto", padding: "10px" }}>
			<div className="myClass">ENV_Mode: {process.env.NODE_ENV}</div>
			<div className="myClass">Plugin_Mode: {process.env.mode}</div>
			<div className="myClass">
				.ENV file: {process.env.REACT_APP_ENVIRONMENT}
			</div>
		</div>
	);
};

export default InfoPage;
