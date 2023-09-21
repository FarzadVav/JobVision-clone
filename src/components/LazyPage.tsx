import { ReactNode, Suspense } from "react";
import { Skeleton } from "@mui/material";

const PageLoader = () => {
	return (
		<div className={`wrapper my-12`}>
			<Skeleton className={`!transform-none`} height={45} animation="wave" />
			<Skeleton className={`!transform-none opacity-70 !mt-2 !w-2/3`} height={30} animation="wave" />
			<Skeleton className={`!transform-none !mt-2`} height={225} animation="wave" />
			<div className={`w-full mt-4 opacity-50`}>
				<Skeleton className={`!transform-none !w-2/3`} height={12} animation="wave" />
				<Skeleton className={`!transform-none !mt-2`} height={12} animation="wave" />
				<Skeleton className={`!transform-none !mt-2 !w-5/6`} height={12} animation="wave" />
			</div>
		</div>
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