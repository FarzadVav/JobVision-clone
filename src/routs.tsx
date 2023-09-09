import {lazy, ReactNode} from "react";
import LazyPage from "./components/LazyPage.tsx";

const Home = lazy(() => import('./pages/Home.tsx'))
const Jobs = lazy(() => import('./pages/Jobs.tsx'))

type routesProps = {
	path: string,
	element: ReactNode
}

const routes: routesProps[] = [
	{
		path: '/',
		element: (
			<LazyPage>
				<Home/>
			</LazyPage>
		)
	},
	{
		path: '/jobs',
		element: (
			<LazyPage>
				<Jobs/>
			</LazyPage>
		)
	},
]

export default routes