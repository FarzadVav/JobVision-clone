import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const App = () => {
	const router = useRoutes(routes)

	return (
		<AuthContextProvider>
			<Header />
			{router}
			{
				!location.pathname.includes('d_employer') ? <Footer /> : null
			}
		</AuthContextProvider>
	);
};

export default App;