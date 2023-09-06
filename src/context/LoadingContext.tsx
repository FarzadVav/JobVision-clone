import {createContext, ReactNode, useEffect, useState} from "react";
import {createPortal} from "react-dom";

type LoadingContext = {
	appLoading: boolean,
	pageLoading: boolean,
	setAppLoadingHandler: (status: boolean) => void,
	setPageLoadingHandler: (status: boolean) => void
}

const LoadingContext = createContext<LoadingContext>({} as LoadingContext)

export const LoadingContextProvider = ({children}: { children: ReactNode }) => {
	const [appLoading, setAppLoading] = useState<boolean>(true)
	const [pageLoading, setPageLoading] = useState<boolean>(false)

	useEffect(() => {
		setAppLoadingHandler(false)
	}, []);

	const setAppLoadingHandler = (status: boolean): void => setAppLoading(status)

	const setPageLoadingHandler = (status: boolean): void => setPageLoading(status)

	return (
		<LoadingContext.Provider
			value={{
				appLoading,
				pageLoading,
				setAppLoadingHandler,
				setPageLoadingHandler
			}}
		>
			{children}

			{
				(appLoading || pageLoading) && createPortal(
					<div className="bg-black bg-opacity-25 backdrop-blur-sm w-screen h-screen
            flex justify-center items-center fixed top-0 left-0 z-50 show-fade">
						loading...
					</div>,
					document.body
				)
			}
		</LoadingContext.Provider>
	)
}

export default LoadingContext