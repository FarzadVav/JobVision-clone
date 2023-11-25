import { lazy, ReactNode } from "react";
import LazyPage from "./components/LazyPage.tsx";

// import pages component as lazy for optimization app bundle size
const Home = lazy(() => import('./pages/Home.tsx'))
const Jobs = lazy(() => import('./pages/JobAds.tsx'))
const Employer = lazy(() => import('./pages/dashborad/Employer.tsx'))
const EmployerDashboard = lazy(() => import('./pages/dashborad/EmployerDashboard.tsx'))
const Details = lazy(() => import('./pages/dashborad/Details.tsx'))
const AddJobAd = lazy(() => import('./pages/dashborad/AddJobAd.tsx'))
const NotFound = lazy(() => import('./pages/NotFound.tsx'))
import PrivateRoute from "./components/PrivateRoute.tsx";

type routesProps = {
	path: string;
	element: ReactNode;
	children?: {
		path: string;
		element: ReactNode;
	}[]
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
		path: '/employer',
		element: (
			<PrivateRoute>
				<LazyPage>
					<Employer />
				</LazyPage>
			</PrivateRoute>
		),
		children: [
			{
				path: '',
				element: (
					<PrivateRoute>
						<LazyPage minimal>
							<EmployerDashboard />
						</LazyPage>
					</PrivateRoute>
				),
			},
			{
				path: 'details',
				element: (
					<PrivateRoute>
						<LazyPage minimal>
							<Details />
						</LazyPage>
					</PrivateRoute>
				),
			},
			{
				path: 'add-jobAd',
				element: (
					<PrivateRoute>
						<LazyPage minimal>
							<AddJobAd />
						</LazyPage>
					</PrivateRoute>
				),
			}
		]
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