import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import useDetailsJobAds from "./store/useDetailsJobAds.ts";
import useLoading from "./store/useLoading.ts";

const client = new QueryClient()

const App = () => {
	const router = useRoutes(routes)
	const { appLoading, pageLoading, startAppLoadingHandler, endAppLoadingHandler } = useLoading(s => s)
	const { getDetails } = useDetailsJobAds(s => s)

	useEffect(() => {
		startAppLoadingHandler()
		getDetails(endAppLoadingHandler)
	}, [])

	return (
		<QueryClientProvider client={client}>
			<AuthContextProvider>
				<Header />
				{router}
				{
					!location.pathname.includes('employer') ? <Footer /> : null
				}

				<div className={`bg-jv-primary h-0.5 fixed top-[4.5rem] left-0 z-50 ${(appLoading || pageLoading) ? 'loading-bar' : 'duration-1000 w-full opacity-0'}`}></div>
			</AuthContextProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;