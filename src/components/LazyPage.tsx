import { ReactNode, Suspense } from "react";
import { Skeleton } from "@mui/material";
import { PuffLoader } from "react-spinners";

// preview for loading pages
const PageLoader = () => {
	return (
		<div className={`current-height wrapper my-12`}>
			<div className={`w-full flex`}>
				<Skeleton className={`!transform-none !w-2/3`} height={75} animation="wave" />
				<Skeleton className={`!transform-none !w-1/3 !mr-2`} height={75} animation="wave" />
			</div>
			<Skeleton className={`!transform-none !mt-2`} height={50} animation="wave" />
			<Skeleton className={`!transform-none !mt-2`} height={20} animation="wave" />
		</div>
	)
};

type LazyPageProps = {
	children: ReactNode;
	minimal?: boolean
}
const LazyPage = ({ children, minimal }: LazyPageProps) => {
	return (
		<Suspense
			fallback={
				minimal ? <PuffLoader color="#5660F2" /> : <PageLoader />
			}
		>
			{children}
		</Suspense>
	);
};

export default LazyPage;