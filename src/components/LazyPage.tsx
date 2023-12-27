import { ReactNode, Suspense } from "react";

type LazyPageProps = {
	children: ReactNode;
}
const LazyPage = ({ children }: LazyPageProps) => {
	window.scrollTo(0, 0)

	return (
		<Suspense fallback={<div className={`skeleton`}></div>}>
			{children}
		</Suspense>
	);
};

export default LazyPage;