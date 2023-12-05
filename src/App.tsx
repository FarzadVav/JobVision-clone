import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import useLoading from "./store/useLoading.ts";
import supabase from "./utils/supabase.ts";
import useAuth from "./store/useAuth.ts";

const App = () => {
	const router = useRoutes(routes)
	const { appLoading, pageLoading } = useLoading(s => s)
	const { getToken, logOutHandler } = useAuth(s => s)

	useEffect(() => {
		const func = async () => {
			const { data: companies } = await supabase
				.from('companies')
				.select('*')

			let validation = false
			const myToken = getToken()
			companies?.forEach(company => {
				if (company._id === myToken) {
					validation = true
				}
			})

			!validation && logOutHandler()
		}
		func()
	}, [])

	return (
		<>
			<Header />
			{router}
			{
				!location.pathname.includes('employer') ? <Footer /> : null
			}

			<div className={`bg-jv-primary h-0.5 fixed top-[4.5rem] left-0 z-50 ${(appLoading || pageLoading) ? 'loading-bar' : 'duration-1000 w-full opacity-0'}`}></div>
		</>
	);
};

export default App;