import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import useLoading from "./hooks/store/useLoading.ts";
import useAuth from "./hooks/store/useAuth.ts";
import useCompany from "./hooks/query/useCompany.ts";

const App = () => {
	const router = useRoutes(routes)
	const { company } = useCompany()
	const { loadingKeys } = useLoading(s => s)
	const { getToken, logOutHandler } = useAuth(s => s)

	useEffect(() => {
		if (company?.companies?.length) {
			let validation = false
			const myToken = getToken()

			company.companies.forEach(company => {
				if (company._id === myToken) {
					validation = true
				}
			})

			!validation && logOutHandler()
		}
	}, [company])

	return (
		<>
			<Header />
			{router}
			{!location.pathname.includes('employer') ? <Footer /> : null}

			<div className={`bg-jv-primary h-0.5 fixed top-[4.5rem] left-0 z-50 ${loadingKeys.length > 0 ? 'loading-bar' : 'duration-1000 w-full opacity-0'}`}></div>
		</>
	)
}

export default App;