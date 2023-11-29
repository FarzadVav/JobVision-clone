import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { useEffect } from "react";
import useDetailsJobAds from "./store/useDetailsJobAds.ts";

const App = () => {
	const router = useRoutes(routes)
	const { getDetails } = useDetailsJobAds(s => s)

	useEffect(() => {
		getDetails()
	}, [])

	return (
		<AuthContextProvider>
			<Header />
			{router}
			{
				!location.pathname.includes('employer') ? <Footer /> : null
			}
		</AuthContextProvider>
	);
};

export default App;