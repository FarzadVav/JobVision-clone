import { lazy } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import('./App.tsx'))
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
			<App />
	</BrowserRouter>
)
