import { ReactNode, useState, useEffect, useRef } from 'react'
import { CloseRounded, FavoriteBorderRounded, HelpRounded, InfoOutlined, NotificationAddRounded, PeopleAltRounded, Send, ShareOutlined, StarRateRounded, Verified } from "@mui/icons-material";

import SearchJobForm from "../components/SearchJobForm";
import FilterJob from "../components/FilterJob";
import Title from "../components/Title";
import JobAdsTypes from "../types/Job.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyTypes from "../types/Company.types";
import JobBox from "../components/JobBox";
import Tabs from '../components/Tabs'
import PopularCompanies from '../components/PopularCompanies';

const testCompany: CompanyTypes = {
	id: tokenGenerator(),
	logo: 'https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70',
	name: 'تاکسی ماکسیم',
	score: 4.1,
	jobs: [],
	aboutCompany: 'ما به عنوان سازمانی یادگیرنده، همه تلاش خود را برای ارتقاء کیفیت و عدالت آموزشی بکار می گیریم. دانش و تخصصمان به ما کمک می کند در کنار حامیان خیرخواه و نیکوکار، راه حلهای کارآمدی برای یادگیری دانش آموزان، معلمان و والدین خلق کنیم. ما با بکارگیری فناوری های روز و دستاوردهای علمی نهاد آموزش را به عنوان یکی از الزامات توسعه پایدار تقویت می نماییم تا در مسیر شکل گیری جامعه یادگیرنده قدم برداریم.',
	employees: [10, 30],
	year: 1397,
	activity: 'تاکسی رانی اینترنتی',
	ownership: 'pv'
}

const testJobAds: JobAdsTypes[] = [
	{
		id: tokenGenerator(),
		category: { title: 'programming', id: tokenGenerator(), },
		jobTags: [
			{ title: 'full-stack', id: tokenGenerator() },
			{ title: 'front-end', id: tokenGenerator() },
			{ title: 'back-end', id: tokenGenerator() }
		],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer)',
		company: testCompany,
		province: 'khorasan-razavi',
		city: 'مشهد',
		location: 'احمدآباد',
		salary: [15, 20],
		remote: true,
		isUrgent: false,
		knowledgeBasedCompany: false,
		cooperationType: 'as-projects',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: '7 روز در مار',
		benefits: ['بیمه', 'ناهار', 'پاداش', 'بیمه درمان تکمیلی', 'بسته ها و هدایای مناسبتی'],
		abilityForBoss: ['5 سال سابقه کار', 'ترجیحا ساکن ونکوور'],
		description: 'توسعه و بهبود وبسایتها و محصولات کارفرمایان خارجی و افزودن قابلیت‌های جدید به آنها (قابلیت‌های جدید باید ایمن، تست‌شده و بهینه باشند)',
		employmentConditions: {
			age: [18, 32],
			gender: 'male',
			endOfMilitaryService: false,
			education: ['لیسانس مهندسی نرم افزار'],
			languages: [
				{ name: 'english', power: 90 }
			],
			techs: [
				{ name: 'Javascript', power: 100 },
				{ name: 'React.js', power: 90 },
				{ name: 'Typescript', power: 75 },
			]
		},
		selected: false,
		createAt: new Date()
	},
	{
		id: tokenGenerator(),
		category: { title: 'programming', id: tokenGenerator(), },
		jobTags: [
			{ title: 'front-end', id: tokenGenerator() }
		],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer) 2',
		company: testCompany,
		province: 'tehran',
		city: 'تهران',
		location: 'فرشته',
		salary: 3,
		remote: false,
		isUrgent: true,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: null,
		benefits: ['بیمه', 'ناهار', 'پاداش', 'بیمه درمان تکمیلی', 'بسته ها و هدایای مناسبتی'],
		abilityForBoss: ['5 سال سابقه کار', 'ترجیحا ساکن ونکوور'],
		description: 'توسعه و بهبود وبسایتها و محصولات کارفرمایان خارجی و افزودن قابلیت‌های جدید به آنها (قابلیت‌های جدید باید ایمن، تست‌شده و بهینه باشند)',
		employmentConditions: {
			age: [18, 32],
			gender: 'male',
			endOfMilitaryService: false,
			education: ['لیسانس مهندسی نرم افزار'],
			languages: [
				{ name: 'english', power: 90 }
			],
			techs: [
				{ name: 'Javascript', power: 100 },
				{ name: 'React.js', power: 90 },
				{ name: 'Typescript', power: 75 },
			]
		},
		selected: false,
		createAt: new Date()
	},
	{
		id: tokenGenerator(),
		category: { title: 'programming', id: tokenGenerator(), },
		jobTags: [
			{ title: 'front-end', id: tokenGenerator(), }
		],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer) 3',
		company: testCompany,
		province: 'tehran',
		city: 'تهران',
		location: 'ونک',
		salary: 32,
		remote: false,
		isUrgent: true,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: 'همیشه در سفر',
		benefits: ['بیمه', 'ناهار', 'پاداش', 'بیمه درمان تکمیلی', 'بسته ها و هدایای مناسبتی'],
		abilityForBoss: ['5 سال سابقه کار', 'ترجیحا ساکن ونکوور'],
		description: 'توسعه و بهبود وبسایتها و محصولات کارفرمایان خارجی و افزودن قابلیت‌های جدید به آنها (قابلیت‌های جدید باید ایمن، تست‌شده و بهینه باشند)',
		employmentConditions: {
			age: [18, 32],
			gender: 'male',
			endOfMilitaryService: false,
			education: ['لیسانس مهندسی نرم افزار'],
			languages: [
				{ name: 'english', power: 90 }
			],
			techs: [
				{ name: 'Javascript', power: 100 },
				{ name: 'React.js', power: 90 },
				{ name: 'Typescript', power: 75 },
			]
		},
		selected: false,
		createAt: new Date()
	},
	{
		id: tokenGenerator(),
		category: { title: 'programming', id: tokenGenerator(), },
		jobTags: [
			{ title: 'front-end', id: tokenGenerator(), }
		],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer) 4',
		company: testCompany,
		province: 'tehran',
		city: 'تهران',
		location: 'ونک',
		salary: 40,
		remote: true,
		isUrgent: true,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: 'همیشه در سفر',
		benefits: ['بیمه', 'ناهار', 'پاداش', 'بیمه درمان تکمیلی', 'بسته ها و هدایای مناسبتی'],
		abilityForBoss: ['5 سال سابقه کار', 'ترجیحا ساکن ونکوور'],
		description: 'توسعه و بهبود وبسایتها و محصولات کارفرمایان خارجی و افزودن قابلیت‌های جدید به آنها (قابلیت‌های جدید باید ایمن، تست‌شده و بهینه باشند)',
		employmentConditions: {
			age: [18, 32],
			gender: 'male',
			endOfMilitaryService: false,
			education: ['لیسانس مهندسی نرم افزار'],
			languages: [
				{ name: 'english', power: 90 }
			],
			techs: [
				{ name: 'Javascript', power: 100 },
				{ name: 'React.js', power: 90 },
				{ name: 'Typescript', power: 75 },
			]
		},
		selected: false,
		createAt: new Date()
	},
]

const Jobs = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false)
	const [jobAds, setJobAds] = useState<JobAdsTypes[]>(testJobAds)
	const [filteredJobAds, setFilteredJobAds] = useState<JobAdsTypes[]>([])
	const [selectedJobAds, setSelectedJobAds] = useState<JobAdsTypes>({} as JobAdsTypes)
	const [hasFilter, setHasFilter] = useState<boolean>(false)
	const [jobAdsTabs, setJobAdsTabs] = useState<{
		id: string;
		title: string;
		content: ReactNode
	}[]>([])

	const alertRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const footer = document.querySelector('footer')
			if ((footer?.getBoundingClientRect().top || 0) <= window.innerHeight) {
				alertRef.current?.classList.add('opacity-0', 'invisible')
			} else {
				alertRef.current?.classList.remove('opacity-0', 'invisible')
			}
		})

		if (window.innerWidth < 1024) {
			if (Object.keys(selectedJobAds).length) {
				setTimeout(() => {
					document.querySelector('#root')?.classList.add('overflow-hidden')
				}, 750);
			} else {
				document.querySelector('#root')?.classList.remove('overflow-hidden')
			}
		}
	}, [selectedJobAds])

	const setFilteredJobAdsHandler = (newJobAds: JobAdsTypes[]) => setFilteredJobAds(newJobAds)

	const setJobAdsToDefault = () => setFilteredJobAds([])

	const jobAdsSelectHandler = (singleJobAd: JobAdsTypes) => {
		setJobAdsTabs([
			{
				id: singleJobAd.id,
				title: 'درباره شغل',
				content: (
					<div key={1} className={`w-full flex flex-col`}>
						<Title withOutIcon>
							<span className='!text-xl'>
								مشخصات موقعیت شغلی
							</span>
						</Title>
						<div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
							<div className={`w-full px-3 sm:w-1/2`}>
								<span className={`dana-bold block`}>
									روز و ساعت کاری
								</span>
								<span className={`block text-sm mt-1`}>
									{singleJobAd.workTimes}
								</span>
							</div>
							<div className={`w-full px-3 sm:w-1/2`}>
								<span className={`dana-bold block`}>
									نوع همکاری
								</span>
								<span className={`block text-sm mt-1`}>
									{
										singleJobAd.cooperationType === 'full-time' ? 'تمام وقت'
											: singleJobAd.cooperationType === 'part-time' ? 'پاره وقت'
												: 'پروژه ای'
									}
								</span>
							</div>
							<div className={`w-full px-3 sm:w-1/2`}>
								<span className={`dana-bold block`}>
									سفر های کاری
								</span>
								<span className={`block text-sm mt-1`}>
									{singleJobAd.businessTrips || '-'}
								</span>
							</div>
							<div className={`w-full px-3 sm:w-1/2`}>
								<span className={`dana-bold block`}>
									مزایا و تسهیلات
								</span>
								<div className={`text-sm mt-1`}>
									{
										singleJobAd.benefits.length ? singleJobAd.benefits.map((benefit, i) => {
											if (i < singleJobAd.benefits.length - 1) {
												return (
													<div
														key={i}
														className={`inline-block ml-2`}
													>
														{benefit}
														<span className={`inline-block mr-2 opacity-25`}>
															/
														</span>
													</div>
												)
											} else {
												return (
													<span
														key={i}
														className={`inline-block`}
													>
														{benefit}
													</span>
												)

											}
										}) : '---'
									}
								</div>
							</div>
						</div>

						<Title
							customClass={`mt-6 sm:mt-3`}
							withOutIcon
						>
							<span className='!text-xl'>
								شاخص های کلیدی از نظر کارفرما
							</span>
						</Title>
						<ul className={`w-full flex flex-col`}>
							{
								singleJobAd.abilityForBoss.length ? singleJobAd.abilityForBoss.map(ability => (
									<li
										key={tokenGenerator()}
										className={`flex items-center mt-2 pr-2 first:mt-3`}
									>
										<Verified className='text-jv-primary ml-3' fontSize='small' />
										{ability}
									</li>
								)) : '---'
							}
						</ul>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								شرح شغل و وظایف
							</span>
						</Title>
						<p className={`w-full mt-3 pr-2`}>
							{singleJobAd.description}
						</p>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								شرایط احراز شغل
							</span>
						</Title>
						<ul className={`w-full flex flex-col mt-3`}>
							<li className={`w-full flex items-center`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									سن
								</span>
								<span className={`bg-jv-bright block w-8/12 px-3 py-1.5 sm:w-10/12`}>
									{`${singleJobAd.employmentConditions.age[0]} - ${singleJobAd.employmentConditions.age[1]}`}
									<span className={`mr-1.5`}>
										سال
									</span>
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									جنسیت
								</span>
								<span className={`bg-jv-bright block w-8/12 px-3 py-1.5 sm:w-10/12`}>
									{
										singleJobAd.employmentConditions.gender === 'male' ? 'مرد'
											: singleJobAd.employmentConditions.gender === 'female' ? 'زن'
												: 'فرقی ندارد'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									سربازی
								</span>
								<span className={`bg-jv-bright block w-8/12 px-3 py-1.5 sm:w-10/12`}>
									{
										singleJobAd.employmentConditions.endOfMilitaryService ? 'پایان خدمت یا معاف از سربازی' : 'مهم نیست'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									تحصیلات
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-8/12 p-1.5 overflow-x-auto sm:w-10/12`}>
									{
										singleJobAd.employmentConditions.education.length ? singleJobAd.employmentConditions.education.map((education, i) => (
											<div
												key={i}
												className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
											>
												{education}
											</div>
										)) : 'فرقی ندارد'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									زبان ها
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-8/12 p-1.5 overflow-x-auto sm:w-10/12`}>
									{
										singleJobAd.employmentConditions.languages.length ? singleJobAd.employmentConditions.languages.map((language, i) => (
											<div
												key={i}
												className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
											>
												{`${language.name} - ${language.power}%`}
											</div>
										)) : 'فرقی ندارد'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-4/12 px-3 py-1.5 ml-2 sm:w-2/12`}>
									تکنولوژی ها
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-8/12 p-1.5 overflow-x-auto sm:w-10/12`}>
									{
										singleJobAd.employmentConditions.techs.length ? singleJobAd.employmentConditions.techs.map((tech, i) => (
											<div
												key={i}
												className={`bg-jv-light min-w-max text-xs px-3 py-0.5 ml-1.5 rounded last:ml-0`}
											>
												{`${tech.name} - ${tech.power}%`}
											</div>
										)) : 'فرقی ندارد'
									}
								</span>
							</li>
						</ul>

						<div className={`border-t border-b border-solid border-jv-light w-full flex items-center py-1.5 mt-6`}>
							<button className={`btn underline decoration-jv-light`}>
								<InfoOutlined
									className={`opacity-25`}
									fontSize='small'
								/>
								ثبت مشکل و تخلف آگهی
							</button>
						</div>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								فرصت‌های شغلی مشابه
							</span>
						</Title>
						<div className={`w-full grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2`}>
							{
								jobAds.length ? jobAds.map((job, i) => {
									if (i < 6 && job.category.title === singleJobAd.category.title && job.id !== singleJobAd.id) {
										return <JobBox key={i} {...job} />
									}
								}) : 'آگهی وجود ندارد'
							}
						</div>
					</div>
				)
			},
			{
				id: singleJobAd.company.id,
				title: 'درباره شرکت',
				content: (
					<div className={`w-full flex flex-col`}>
						<Title withOutIcon>
							<span className='!text-xl'>
								امتیاز سازمان
							</span>
						</Title>
						<div className={`w-full flex items-center mt-3`}>
							<span className={`dana-bold h-5 ml-3`}>
								{singleJobAd.company.score}
							</span>
							{
								Array(Math.floor(singleJobAd.company.score || 0)).fill('').map(() => (
									<StarRateRounded
										key={tokenGenerator()}
										className={`text-jv-warning`}
									/>
								))
							}
							{
								Array(Math.ceil(5 - (singleJobAd.company.score || 0))).fill('').map(() => (
									<StarRateRounded
										key={tokenGenerator()}
										className={`text-jv-dark opacity-25`}
									/>
								))
							}
						</div>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								درباره {singleJobAd.company.name}
							</span>
						</Title>
						<p className={`w-full mt-3`}>
							{singleJobAd.company.aboutCompany}
						</p>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								{singleJobAd.company.name} در یک نگاه
							</span>
						</Title>
						<div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
							<div className={`w-1/2 px-3`}>
								<span className={`dana-bold block`}>
									سال تاسیس
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{singleJobAd.company.year}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`dana-bold block`}>
									اندازه سازمان
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{singleJobAd.company.employees[0]} تا {singleJobAd.company.employees[1]} نفر
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`dana-bold block`}>
									حوزه فعالیت
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{singleJobAd.company.activity}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`dana-bold block`}>
									نوع مالکیت
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{
										singleJobAd.company.ownership === 'pv' ? 'خصوصی' : 'دولتی'
									}
								</span>
							</div>
						</div>
					</div>
				)
			},
			{
				id: 'other-jobAds',
				title: 'سایر آگهی های این شرکت',
				content: (
					<div className={`w-full grid grid-cols-1 gap-3 sm:grid-cols-2`}>
						{
							jobAds.length ? jobAds.map((job, i) => {
								if (job.company.id === singleJobAd.company.id && job.id !== singleJobAd.id) {
									return <JobBox key={i} {...job} />
								}
							}) : 'آگهی وجود ندارد'
						}
					</div>
				)
			}
		])
	}

	return (
		<>
			<div className={`light-shadow w-full pt-9 pb-3 relative z-10`}>
				<div className={`wrapper`}>
					<SearchJobForm />
					<FilterJob
						setJobAdsToDefault={setJobAdsToDefault}
						jobAds={jobAds}
						setFilteredJobAdsHandler={setFilteredJobAdsHandler}
						setHasFilter={setHasFilter}
					/>
				</div>
			</div>

			<div className={`bg-jv-bright py-3`}>
				<div className={`wrapper`}>
					<div
						className={`bg-jv-primary w-full h-12 flex justify-center items-center fixed z-40 bottom-0 left-0
						md:static md:z-0 md:justify-between md:pl-1 md:pr-5 md:rounded`}
						onClick={() => !showAlert && setShowAlert(prev => !prev)}
						ref={alertRef}
					>
						<div className={`h-full flex items-center absolute ${showAlert ? 'opacity-0 translate-x-full' : ''}
						md:opacity-100 md:translate-x-0 md:static`}>
							<NotificationAddRounded className={`text-white ml-3`} />
							<Title withOutIcon>
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

					<div className={`flex mt-3 lg:relative`}>
						<aside className={`bg-white w-full h-max flex flex-col items-center p-3 mb-6 rounded lg:ml-3 lg:w-5/12
						xl:w-4/12`}>
							<div className={`w-full flex justify-between items-center`}>
								<p>
									{hasFilter ? filteredJobAds.length : jobAds.length} آگهی
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
									(hasFilter && filteredJobAds.length) ? filteredJobAds.map(job => (
										<div
											key={job.id}
											className={`w-full`}
											onClick={() => {
												setFilteredJobAds(prev => {
													const newJobAds = prev.map(jobAd => {
														if (jobAd.id === job.id) {
															jobAd.selected = true
														} else {
															jobAd.selected = false
														}
														return jobAd
													})
													return newJobAds
												})
												jobAdsSelectHandler(job)
												setSelectedJobAds(job)
											}}
										>
											<JobBox {...job} />
										</div>
									)) : hasFilter ? (
										<div className={`bg-yellow-50 text-jv-warning w-full text-center px-5 py-2 mt-3 rounded`}>
											آگهی با این فیلتر پیدا نشد
										</div>
									) : null
								}
								{
									!hasFilter && jobAds.length ? jobAds.map(job => (
										<div
											key={job.id}
											className={`w-full`}
											onClick={() => {
												setFilteredJobAds(prev => {
													const newJobAds = prev.map(jobAd => {
														if (jobAd.id === job.id) {
															jobAd.selected = true
														} else {
															jobAd.selected = false
														}
														return jobAd
													})
													return newJobAds
												})
												jobAdsSelectHandler(job)
												setSelectedJobAds(job)
											}}
										>
											<JobBox {...job} />
										</div>
									)) : null
								}
							</div>
						</aside>

						<main className={`w-full h-screen fixed top-0 right-0 duration-700 z-50
						${Object.keys(selectedJobAds).length ? '' : 'translate-y-full opacity-0 invisible'} lg:pb-6 lg:opacity-100
						lg:visible lg:translate-y-0 lg:current-height lg:w-7/12 lg:sticky lg:top-[calc(4.5rem+0.75rem)] lg:z-auto
						xl:w-8/12`}>
							<div className={`list-scrollbar bg-white w-full h-full flex flex-col px-3 py-4 rounded overflow-y-auto`}>
								{
									Object.keys(selectedJobAds).length ? (
										<>
											<div className={`w-full`}>
												<div className={`w-full flex justify-between items-center mb-6 lg:hidden`}>
													<button
														className={`btn-sm btn-bright`}
														onClick={() => {
															setSelectedJobAds({} as JobAdsTypes)
															setFilteredJobAds(prev => {
																return prev.map(job => {
																	if (job.id === selectedJobAds.id) {
																		job.selected = false
																	}
																	return job
																})
															})
														}}
													>
														بستن <CloseRounded fontSize='inherit' />
													</button>
													<div className={`flex items-center`}>
														<span className={`text-sm`}>
															{selectedJobAds.createAt.toLocaleDateString('fa-ir').split('/').reverse().join(' / ')}
														</span>
														<button className={`btn-sm bg-blue-50 rounded-full mr-4`}>
															<ShareOutlined className={`text-jv-primary cursor-pointer`} />
														</button>
														<button className={`btn-sm bg-red-50 rounded-full mr-1.5`}>
															<FavoriteBorderRounded className={`text-jv-danger cursor-pointer`} />
														</button>
													</div>
												</div>
												<div className={`w-full flex justify-between`}>
													<Title withOutIcon>
														<h2>
															{selectedJobAds.title}
														</h2>
													</Title>
													<span className={`min-w-max hidden text-sm lg:block`}>
														{selectedJobAds.createAt.toLocaleDateString('fa-ir').split('/').reverse().join(' / ')}
													</span>
												</div>
												<div className={`flex items-center mt-4 lg:mt-6`}>
													<span className={`text-jv-primary`}>
														{selectedJobAds.company.name}
													</span>
													<span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
														{selectedJobAds.city} ، {selectedJobAds.location}
													</span>
													{
														selectedJobAds.remote && (
															<span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
																امکان دورکاری
															</span>
														)
													}
													{
														selectedJobAds.isUrgent && (
															<span className={`text-jv-danger border-r border-solid border-jv-light italic pr-3 mr-3`}>
																فوری
															</span>
														)
													}
												</div>
												<div className={`w-full flex items-center justify-between mt-4`}>
													<span className={`text-jv-success`}>
														{
															typeof selectedJobAds.salary === 'number' ? `${selectedJobAds.salary} میلیون`
																: selectedJobAds.salary === 'none' ? 'حقوق توافقی'
																	: selectedJobAds.salary?.length ? selectedJobAds.salary?.map((price, index) => {
																		if (index > 0) {
																			return ` تا ${price} میلیون`
																		} else {
																			return `${price}`
																		}
																	}) : null
														}
													</span>
													<div className={`flex items-center`}>
														<div className={`hidden items-center lg:flex`}>
															<ShareOutlined className={`text-jv-primary cursor-pointer`} />
															<FavoriteBorderRounded className={`text-jv-danger mr-3 cursor-pointer`} />
														</div>
														<button className={`btn btn-success sm:mr-6`}>
															ارسال رزومه
														</button>
														<img
															className={`w-10 h-10 mr-3 rounded-full`}
															src={jobAds[0].company.logo}
														/>
													</div>
												</div>
											</div>

											<div className={`bg-jv-bright w-full flex flex-col p-3 mt-6 rounded md:flex-row md:items-center md:px-5
											md:py-2`}>
												<div className={`flex items-center`}>
													<PeopleAltRounded className={`text-jv-light brightness-75`} />
													<span className={`mr-3`}>
														{selectedJobAds.company.employees[0]} تا {selectedJobAds.company.employees[1]} نفر
													</span>
												</div>
												<div className={`flex items-center mt-1.5 md:mr-6 md:mt-0`}>
													<HelpRounded className={`text-jv-light brightness-75`} />
													<p className={`mr-3`}>
														{selectedJobAds.company.activity}
													</p>
												</div>
											</div>

											<Tabs
												customClass={`mt-6`}
												tabs={jobAdsTabs}
											/>
										</>
									) : (
										<div className={`w-full flex flex-col items-center mt-3`}>
											<img
												src="/images/job-detail-empty-state.svg"
											/>
											<span className={`text-center opacity-50 -translate-y-6`}>
												جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت <br /> راست انتخاب کنید.
											</span>
										</div>
									)
								}
							</div>
						</main>
					</div>

					<div className={`my-12 md:my-16`}>
						<PopularCompanies />
					</div>
				</div >
			</div >
		</>
	);
};

export default Jobs;