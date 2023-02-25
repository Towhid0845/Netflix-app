import React from "react";

const Netflix = (props) => {
	console.log(props);
	return (
		<>
			<div className="cards">
				<div className="card">
					<img src={props.imgsrc} alt="error" />
					<div className="card_info">
						<span className="card_category">{props.title}</span>
						<h3 className="card_title">{props.sname}</h3>
						<a href={props.links} target="_blank" rel="noreferrer">
							<button>Watch Now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Netflix;
