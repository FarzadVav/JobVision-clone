import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './main.css'
import AntDesignConfig from "./components/AntDesignConfig.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AntDesignConfig>
		<App/>
	</AntDesignConfig>
)
