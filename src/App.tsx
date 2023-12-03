import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import useLoading from "./store/useLoading.ts";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const App = () => {
	const router = useRoutes(routes)
	const { appLoading, pageLoading } = useLoading(s => s)

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