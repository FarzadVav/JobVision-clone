import { useRoutes } from "react-router-dom";

import routes from "./routs.tsx";
import Header from "./components/Header.tsx";

const App = () => {
	const router = useRoutes(routes)

	return (
		<div className={'bg-primary p-3'}>
			<Header/>
			{router}
		</div>
	);
};

export default App;