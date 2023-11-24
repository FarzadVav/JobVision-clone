import { useRoutes } from "react-router-dom";

import routes from "./routes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { useEffect } from "react";
// import supabase from "./utils/supabase.ts";

const App = () => {
	const router = useRoutes(routes)

	useEffect(() => {
		// const func = async () => {
		// 	const { data: jobAds } = await supabase
		// 		.from('jobAds')
		// 		.select('*')
		// 	const { data: company } = await supabase
		// 		.from('companies')
		// 		.select(`*`)
		// 		.eq('id', jobAds[0].company_id)
		// 	console.log(jobAds);
		// 	console.log(company);
		// }
		// func()
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