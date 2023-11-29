import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { useEffect } from "react";
import useDetailsJobAds from "./store/useDetailsJobAds.ts";
import useLoading from "./store/useLoading.ts";

const App = () => {
	const router = useRoutes(routes)
	const { appLoading, pageLoading, startAppLoadingHandler, endAppLoadingHandler } = useLoading(s => s)
	const { getDetails } = useDetailsJobAds(s => s)

	useEffect(() => {
		startAppLoadingHandler()
		getDetails(endAppLoadingHandler)
	}, [])

	return (
		<AuthContextProvider>
			<Header />
			{router}
			{
				!location.pathname.includes('employer') ? <Footer /> : null
			}

			<div className={`bg-jv-primary h-0.5 fixed top-[4.5rem] left-0 z-50 ${(appLoading || pageLoading) ? 'loading-bar' : 'duration-1000 w-full opacity-0'}`}></div>
		</AuthContextProvider>
	);
};

export default App;