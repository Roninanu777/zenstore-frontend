import "./tailwind.css";
import AppRouter from "./routes/AppRouter";

const App = () => {
	return (
		<main>
			<div className="text-center">
				<AppRouter />
			</div>
		</main>
	);
};
export default App;
