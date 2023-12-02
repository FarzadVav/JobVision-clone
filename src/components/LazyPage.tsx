import { ReactNode, Suspense } from "react";

const skeleton = () => <div className={`skeleton`}></div>

type LazyPageProps = {
	children: ReactNode;
}
const LazyPage = ({ children }: LazyPageProps) => {
	return (
		<Suspense
			fallback={skeleton()}
		>
			{children}
		</Suspense>
	);
};

export default LazyPage;