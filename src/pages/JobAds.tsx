import { useState, useEffect, useRef, useMemo } from 'react'
import { CloseRounded, NotificationAddRounded, Send } from "@mui/icons-material";
import { Alert } from '@mui/material';

import SearchJobForm from "../components/SearchJobAdsForm";
import JobAdFilters from "../components/JobAdFilters";
import Title from "../components/Title";
import tokenGenerator from "../utils/tokenGenerator";
import JobAdsBox from "../components/JobAdsBox";
import PopularCompanies from '../components/PopularCompanies';
import useJobAds from '../hooks/store/useJobAds';
import useJobAdsQuery from '../hooks/query/useJobAds';
import useFirstMount from '../hooks/useFirstMount';
import SingleJobAd from '../components/SingleJobAd';

const Jobs = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false)
	const { jobAds } = useJobAdsQuery()
	const { filteredJobAds, singleJobAd, hasFilter } = useJobAds(s => s)
	const firstMount = useFirstMount()

	const alertRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// hide alertBox on scroll to footer (in mobile size)
		if (firstMount) {
			window.addEventListener('scroll', () => {
				const footer = document.querySelector('footer')
				if ((footer?.getBoundingClientRect().top || 0) <= window.innerHeight) {
					alertRef.current?.classList.add('opacity-0', 'invisible')
				} else {
					alertRef.current?.classList.remove('opacity-0', 'invisible')
				}
			})
		}
	}, [])

	return (
		<>
			{/* handle all filterings on jobAds */}
			<div className={`light-shadow w-full pt-9 pb-3 relative z-10`}>
				<div className={`wrapper`}>
					<SearchJobForm />
					{/* <JobAdFilters jobAdsSelectHandler={jobAdsSelectHandler} /> */}
					<JobAdFilters />
				</div>
			</div>
			{/* handle all filterings on jobAds */}

			{/* jobAds */}
			<div className={`bg-jv-bright py-3`}>
				<div className={`wrapper`}>
					{/* alert */}
					<div
						className={`bg-jv-primary w-full h-12 flex justify-center items-center fixed z-30 bottom-0 left-0
						md:static md:z-0 md:justify-between md:pl-1 md:pr-5 md:rounded`}
						onClick={() => !showAlert && setShowAlert(prev => !prev)}
						ref={alertRef}
					>
						<div className={`h-full flex items-center absolute ${showAlert ? 'opacity-0 translate-x-full' : ''}
						md:opacity-100 md:translate-x-0 md:static`}>
							<NotificationAddRounded className={`text-white ml-3`} />
							<Title>
								<h1 className={`!dana-base text-white !text-base`}>
									باخبر شدن از جدید ترین آگهی های مرتبط
								</h1>
							</Title>
						</div>
						<div
							className={`w-full h-full flex items-center pr-6 pl-1 ${showAlert ? 'justify-between' : 'opacity-0 -translate-x-full justify-center'} absolute md:w-max md:p-0 md:opacity-100 md:translate-x-0 md:static`}
							data-name="email-alert"
						>
							<div
								className={`flex items-center md:hidden`}
								onClick={() => setShowAlert(false)}
							>
								<CloseRounded className={`text-white`} />
							</div>
							<input
								dir="ltr"
								className={`bg-jv-primary text-white placeholder:text-white max-w-72 py-2 mr-auto md:w-72`}
								type="text"
								placeholder="example@gmail.com"
								data-name="email-alert"
							/>
							<button
								className={`btn btn-primary mr-3`}
								data-name="email-alert"
							>
								ثبت
								<Send className={`rotate-180`} fontSize="small" />
							</button>
						</div>
					</div>
					{/* alert */}

					<div className={`flex mt-3 lg:relative`}>
						{/* jobAds list */}
						<aside className={`bg-white w-full h-max flex flex-col items-center p-3 mb-6 rounded lg:ml-3 lg:w-5/12 xl:w-4/12`}>
							<div className={`w-full flex justify-between items-center`}>
								<p>
									{hasFilter ? filteredJobAds.length : jobAds?.length} آگهی
								</p>
								<select className={`bg-jv-bright cursor-pointer px-5 py-2 rounded`}>
									<option value="">مرتب سازی</option>
									<option value="">بیشترین حقوق</option>
									<option value="">جدید ترین</option>
									<option value="">قدیمی ترین</option>
								</select>
							</div>
							<div className={`w-full flex flex-col items-center gap-3 mt-3`}>
								{
									useMemo(() => {
										return (hasFilter && filteredJobAds.length) ? filteredJobAds.map(job => (
											<JobAdsBox
												key={tokenGenerator()}
												jobAd={job}
											/>
										)) : hasFilter ? (
											<div className={`w-full mt-3`} dir='ltr'>
												<Alert
													className={`!justify-between`}
													severity="warning"
												>
													آگهی با این فیلتر وجود ندارد
												</Alert>
											</div>
										) : null
									}, [hasFilter, filteredJobAds, singleJobAd])
								}
								{
									useMemo(() => {
										return (!hasFilter && jobAds?.length) ? jobAds.map(job => (
											<JobAdsBox
												key={tokenGenerator()}
												jobAd={job}
											/>
										)) : null
									}, [hasFilter, jobAds, singleJobAd])
								}
							</div>
						</aside>
						{/* jobAds list */}

						{/* selected jobAd */}
						<main className={`w-7/12 current-height hidden pb-6 sticky top-[calc(4.5rem+0.75rem)] lg:block xl:w-8/12`}>
							<SingleJobAd />
						</main>
						{/* selected jobAd */}
					</div>

					{/* other popular companies */}
					<div className={`my-12 md:my-16`}>
						<PopularCompanies />
					</div>
					{/* other popular companies */}
				</div >
			</div >
			{/* jobAds */}
		</>
	);
};

export default Jobs;