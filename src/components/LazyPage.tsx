import { ReactNode, Suspense } from "react";

const PageLoader = () => {
	return (
		<div className={`bg-jv-light w-full h-96 flex justify-center items-center`}>
			loading...
		</div >
	)
};

const LazyPage = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={<PageLoader />}>
			{children}
		</Suspense>
	);
};

export default LazyPage;