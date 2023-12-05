import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App';
import './main.css'

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 30_000,
			gcTime: 30_000
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<BrowserRouter>
			<QueryClientProvider client={client}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider >
		</BrowserRouter>
	</>
)
