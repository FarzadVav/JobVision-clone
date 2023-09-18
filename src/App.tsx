import { useRoutes } from "react-router-dom";

import routes from "./routs.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
	const router = useRoutes(routes)

	return (
		<div>
			<Header />
			{router}
			<Footer />
		</div>
	);
};

export default App;