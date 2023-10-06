import { useRoutes } from "react-router-dom";

import routes from "./routs.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const App = () => {
	const router = useRoutes(routes)

	return (
		<AuthContextProvider>
			<Header />
			{router}
			<Footer />
		</AuthContextProvider>
	);
};

export default App;