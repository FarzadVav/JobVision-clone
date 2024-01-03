import { lazy, ReactNode } from "react";
import LazyPage from "./components/LazyPage.tsx";

// import pages component as lazy for optimization app bundle size
const Home = lazy(() => import('./pages/Home.tsx'))
const JobAds = lazy(() => import('./pages/JobAds.tsx'))
const SingleJobAd = lazy(() => import('./pages/SingleJobAd.tsx'))
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
				<JobAds />
			</LazyPage>
		)
	},
	{
		path: '/single',
		element: (
			<LazyPage>
				<SingleJobAd />
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
						<LazyPage>
							<EmployerDashboard />
						</LazyPage>
					</PrivateRoute>
				),
			},
			{
				path: 'details',
				element: (
					<PrivateRoute>
						<LazyPage>
							<Details />
						</LazyPage>
					</PrivateRoute>
				),
			},
			{
				path: 'add-jobAd',
				element: (
					<PrivateRoute>
						<LazyPage>
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