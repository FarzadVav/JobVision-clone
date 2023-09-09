import {useRoutes} from "react-router-dom";

import routes from "./routs.tsx";
import Header from "./components/Header.tsx";

const App = () => {
	const router = useRoutes(routes)

	return (
		<div>
			<Header/>
			{router}
		</div>
	);
};

export default App;