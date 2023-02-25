import Netflix from "./netflix";
import Sdata from "./sdata";

function App() {
	return (
		<>
			{Sdata.map((currElem) => {
				return (
					<Netflix
						imgsrc={currElem.imgsrc}
						title={currElem.title}
						sname={currElem.sname}
						links={currElem.links}
					/>
				);
			})}
		</>
	);
}

export default App;
