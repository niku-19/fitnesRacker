import { Route, Routes } from "react-router-dom";
import { Exercise, Foods, Goals, Home } from "./pages";

function App() {
	return (
		<div className="flex flex-col  h-screen w-full">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercises" element={<Exercise />} />
				<Route path="/goals" element={<Goals />} />
				<Route path="/foods" element={<Foods />} />
			</Routes>
		</div>
	);
}

export default App;
