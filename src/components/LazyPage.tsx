import { ReactNode, Suspense } from "react";

type LazyPageProps = {
	children: ReactNode;
}
const LazyPage = ({ children }: LazyPageProps) => {
	return (
		<Suspense
			fallback={'loading...'}
		>
			{children}
		</Suspense>
	);
};

export default LazyPage;