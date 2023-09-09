import {ReactNode, Suspense} from "react";
import {createPortal} from "react-dom";

const PageLoader = () => {
	return createPortal(
		<>
			<div className={`bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50`}>
				<span className={`text-white text-2xl`}>
					...Loading
				</span>
			</div>
		</>,
		document.body
	)
};

const LazyPage = ({children}: { children: ReactNode }) => {
	return (
		<Suspense fallback={<PageLoader/>}>
			{children}
		</Suspense>
	);
};

export default LazyPage;