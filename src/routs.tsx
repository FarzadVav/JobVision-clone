import { lazy, ReactNode } from "react";
import LazyPage from "./components/LazyPage.tsx";

const Home = lazy(() => import('./pages/Home.tsx'))
const Jobs = lazy(() => import('./pages/Jobs.tsx'))
const Employer = lazy(() => import('./pages/dashborad/Employer.tsx'))
const NotFound = lazy(() => import('./pages/NotFound.tsx'))
import PrivateRoute from "./components/PrivateRoute.tsx";

type routesProps = {
	path: string,
	element: ReactNode
}

const routes: routesProps[] = [
	{
		path: '/',
		element: (
			<LazyPage>
				<Home />
			</LazyPage>
		)
	},
	{
		path: '/jobs',
		element: (
			<LazyPage>
				<Jobs />
			</LazyPage>
		)
	},
	{
		path: '/d_employer',
		element: (
			<PrivateRoute>
				<LazyPage>
					<Employer />
				</LazyPage>
			</PrivateRoute>
		)
	},
	{
		path: '/404',
		element: (
			<LazyPage>
				<NotFound />
			</LazyPage>
		)
	},
	{
		path: '*',
		element: (
			<LazyPage>
				<NotFound />
			</LazyPage>
		)
	},
]

export default routes