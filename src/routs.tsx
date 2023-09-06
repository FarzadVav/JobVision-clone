import {ReactNode} from "react";

import Home from "./pages/Home.tsx";

type routesProps = {
	path: string,
	element: ReactNode
}

const routes: routesProps[] = [
	{path: '/', element: <Home/>}
]

export default routes