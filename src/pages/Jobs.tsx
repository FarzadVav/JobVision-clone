import { ReactNode, useState } from 'react'
import { CloseRounded, FavoriteBorderRounded, HelpRounded, InfoOutlined, NotificationAddRounded, PeopleAltRounded, Send, ShareOutlined, StarRateRounded, Verified } from "@mui/icons-material";

import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";
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
		categories: [{ title: 'front-end', id: tokenGenerator(), }],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer)',
		company: testCompany,
		city: 'تهران',
		location: 'فرشته',
		salary: [15, 20],
		remote: true,
		isUrgent: false,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: [7, 'month'],
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
		categories: [{ title: 'front-end', id: tokenGenerator(), }],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer) 2',
		company: testCompany,
		city: 'تهران',
		location: 'فرشته',
		salary: 32,
		remote: false,
		isUrgent: true,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: [7, 'month'],
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
		categories: [{ title: 'front-end', id: tokenGenerator(), }],
		title: 'متخصص فرانت اند و بک اند (full-stack Developer) 3',
		company: testCompany,
		city: 'تهران',
		location: 'فرشته',
		salary: 32,
		remote: false,
		isUrgent: true,
		knowledgeBasedCompany: true,
		cooperationType: 'full-time',
		workTimes: 'شنبه تا چهارشنبه از ساعت 08:00 الی 16:30 و پنجشنبه ها تا ساعت 12:00',
		businessTrips: [7, 'month'],
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
	const [jobAdsTabs, setJobAdsTabs] = useState<{
		id: string;
		title: string;
		content: ReactNode
	}[]>([])
	const [selectedJobAds, setSelectedJobAds] = useState<JobAdsTypes>({} as JobAdsTypes)

	const jobAdsSelectHandler = (jobAd: JobAdsTypes) => {
		setJobAdsTabs([
			{
				id: jobAd.id,
				title: 'درباره شغل',
				content: (
					<div key={1} className={`w-full flex flex-col`}>
						<Title withOutIcon>
							<span className='!text-xl'>
								مشخصات موقعیت شغلی
							</span>
						</Title>
						<div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									روز و ساعت کاری
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{jobAd.workTimes}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									نوع همکاری
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{
										jobAd.cooperationType === 'full-time' ? 'تمام وقت'
											: jobAd.cooperationType === 'part-time' ? 'پاره وقت'
												: 'پروژه ای'
									}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									سفر های کاری
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{
										jobAd.businessTrips === 'ever' ? 'همیشه در سفر'
											: jobAd.businessTrips === 'some-times' ? 'در صورت نیاز'
												: jobAd.businessTrips === 'none' ? '---'
													: `${jobAd.businessTrips[0]}
														${jobAd.businessTrips[1] === 'month' ? 'روز' : 'ماه'}
														در
														${jobAd.businessTrips[1] === 'month' ? 'ماه' : 'سال'}`
									}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									مزایا و تسهیلات
								</span>
								<div className={`opacity-75 text-sm mt-1`}>
									{
										jobAd.benefits.length ? jobAd.benefits.map((benefit, i) => {
											if (i < jobAd.benefits.length - 1) {
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
							customClass={`mt-3`}
							withOutIcon
						>
							<span className='!text-xl'>
								شاخص های کلیدی از نظر کارفرما
							</span>
						</Title>
						<ul className={`w-full flex flex-col`}>
							{
								jobAd.abilityForBoss.length ? jobAd.abilityForBoss.map(ability => (
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
						<p className={`w-full mt-3 px-3`}>
							{jobAd.description}
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
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									سن
								</span>
								<span className={`bg-jv-bright block w-10/12 px-3 py-1.5`}>
									{`${jobAd.employmentConditions.age[0]} - ${jobAd.employmentConditions.age[1]}`}
									<span className={`mr-1.5`}>
										سال
									</span>
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									جنسیت
								</span>
								<span className={`bg-jv-bright block w-10/12 px-3 py-1.5`}>
									{
										jobAd.employmentConditions.gender === 'male' ? 'مرد'
											: jobAd.employmentConditions.gender === 'female' ? 'زن'
												: 'فرقی ندارد'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									سربازی
								</span>
								<span className={`bg-jv-bright block w-10/12 px-3 py-1.5`}>
									{
										jobAd.employmentConditions.endOfMilitaryService ? 'پایان خدمت یا معاف از سربازی' : 'مهم نیست'
									}
								</span>
							</li>
							<li className={`w-full flex items-center mt-2`}>
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									تحصیلات
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-10/12 p-1.5 overflow-x-auto`}>
									{
										jobAd.employmentConditions.education.length ? jobAd.employmentConditions.education.map((education, i) => (
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
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									زبان ها
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-10/12 p-1.5 overflow-x-auto`}>
									{
										jobAd.employmentConditions.languages.length ? jobAd.employmentConditions.languages.map((language, i) => (
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
								<span className={`bg-jv-bright block w-2/12 px-3 py-1.5 ml-2`}>
									تکنولوژی ها
								</span>
								<span className={`list-scrollbar bg-jv-bright flex items-center w-10/12 p-1.5 overflow-x-auto`}>
									{
										jobAd.employmentConditions.techs.length ? jobAd.employmentConditions.techs.map((tech, i) => (
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
						<div className={`w-full grid grid-cols-2 gap-3 mt-3`}>
							{
								jobAds.length ? jobAds.map((job, i) => {
									if (i < 6) {
										return <JobBox key={i} {...job} />
									}
								}) : 'آگهی وجود ندارد'
							}
						</div>
					</div>
				)
			},
			{
				id: jobAd.company.id,
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
								{jobAd.company.score}
							</span>
							{
								Array(Math.floor(jobAd.company.score || 0)).fill('').map(() => (
									<StarRateRounded
										key={tokenGenerator()}
										className={`text-jv-warning`}
									/>
								))
							}
							{
								Array(Math.ceil(5 - (jobAd.company.score || 0))).fill('').map(() => (
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
								درباره {jobAd.company.name}
							</span>
						</Title>
						<p className={`w-full mt-3`}>
							{jobAd.company.aboutCompany}
						</p>

						<Title
							customClass={`mt-6`}
							withOutIcon
						>
							<span className='!text-xl'>
								{jobAd.company.name} در یک نگاه
							</span>
						</Title>
						<div className={`w-full flex flex-wrap gap-y-3 mt-3`}>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									سال تاسیس
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{jobAd.company.year}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									اندازه سازمان
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{jobAd.company.employees[0]} تا {jobAd.company.employees[1]} نفر
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									حوزه فعالیت
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{jobAd.company.activity}
								</span>
							</div>
							<div className={`w-1/2 px-3`}>
								<span className={`block`}>
									نوع مالکیت
								</span>
								<span className={`opacity-75 block text-sm mt-1`}>
									{
										jobAd.company.ownership === 'pv' ? 'خصوصی' : 'دولتی'
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
					<div className={`w-full grid grid-cols-2 gap-3`}>
						{
							jobAds.length ? jobAds.map((job, i) => (
								<JobBox key={i} {...job} />
							)) : 'آگهی وجود ندارد'
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
					<JobsFiltersBar />
				</div>
			</div>

			<div className={`bg-jv-bright py-3`}>
				<div className={`wrapper`}>
					<div
						className={`bg-jv-primary w-full h-12 flex justify-center items-center fixed z-40 bottom-0 left-0
						md:static md:z-0 md:justify-between md:pl-1 md:pr-5 md:rounded`}
						onClick={() => !showAlert && setShowAlert(prev => !prev)}
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

					<div className={`flex mt-3 relative`}>
						<aside className={`bg-white w-full flex flex-col justify-center items-center p-3 mb-6 rounded lg:ml-3 lg:w-5/12
						xl:w-4/12`}>
							<div className={`w-full flex justify-between items-center`}>
								<span>2291 آگهی</span>
								<select className={`bg-jv-bright cursor-pointer px-5 py-2 rounded`}>
									<option value="">مرتب سازی</option>
									<option value="">بیشترین حقوق</option>
									<option value="">جدید ترین</option>
									<option value="">قدیمی ترین</option>
								</select>
							</div>
							<div className={`w-full flex flex-col justify-center items-center gap-3 mt-3`}>
								{
									jobAds.length ? jobAds.map(job => (
										<div
											key={job.id}
											className={`w-full`}
											onClick={() => {
												setJobAds(prev => {
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
									)) : 'آگهی وجود ندارد'
								}
							</div>
						</aside>

						<main className={`current-height w-full top-[calc(4.5rem+0.75rem)] pb-6 absolute opacity-0 invisible
						translate-y-full lg:opacity-100 lg:visible lg:translate-y-0 lg:w-7/12 lg:sticky xl:w-8/12`}>
							<div className={`list-scrollbar bg-white w-full h-full flex flex-col px-3 py-4 rounded overflow-y-auto`}>
								{
									Object.keys(selectedJobAds).length ? (
										<>
											<div className={`w-full`}>
												<div className={`w-full flex justify-between`}>
													<Title withOutIcon>
														<h2>
															{selectedJobAds.title}
														</h2>
													</Title>
													<span className={`min-w-max text-sm`}>
														{selectedJobAds.createAt.toLocaleDateString('fa-ir').split('/').reverse().join(' / ')}
													</span>
												</div>
												<div className={`flex items-center mt-6`}>
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
												<div className={`w-full flex items-center justify-between mt-3`}>
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
														<ShareOutlined className={`text-jv-primary cursor-pointer`} />
														<FavoriteBorderRounded className={`text-jv-danger mr-3 cursor-pointer`} />
														<button className={`btn btn-success mr-6`}>
															ارسال رزومه
														</button>
														<img
															className={`w-10 h-10 mr-3 rounded-full`}
															src={jobAds[0].company.logo}
														/>
													</div>
												</div>
											</div>

											<div className={`bg-jv-bright w-full flex items-center px-5 py-2 mt-6 rounded`}>
												<div className={`flex items-center`}>
													<PeopleAltRounded className={`text-jv-light brightness-75`} />
													<span className={`mr-3`}>
														{selectedJobAds.company.employees[0]} تا {selectedJobAds.company.employees[1]} نفر
													</span>
												</div>
												<div className={`flex items-center mr-6`}>
													<HelpRounded className={`text-jv-light brightness-75`} />
													<span className={`mr-3`}>
														{selectedJobAds.company.activity}
													</span>
												</div>
											</div>

											<Tabs
												customClass={`mt-6`}
												tabs={jobAdsTabs}
											/>
										</>
									) : 'آگهی انتخاب نشده است'
								}
							</div>
						</main>
					</div>

					<div className={`my-12 md:my-16`}>
						<PopularCompanies />
					</div>
				</div>
			</div>
		</>
	);
};

export default Jobs;