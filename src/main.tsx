import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import('./App.tsx'))
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Suspense fallback={(
			<div className={`bg-white w-full h-full flex justify-center items-center fixed top-0 z-50 overflow-hidden`}>
				<img
					src={`/images/logo.svg`}
					alt={`لوگوی جاب ویژن`}
				/>
			</div>
		)}>
			<App />
		</Suspense>
	</BrowserRouter>
)
