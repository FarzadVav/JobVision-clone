import { ReactNode, useState, useMemo, useEffect } from 'react'
import { CloseRounded, FavoriteBorderRounded, HelpRounded, NotificationAddRounded, PeopleAltRounded, Send, ShareOutlined } from "@mui/icons-material";

import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";
import Title from "../components/Title";
import JobsTypes, { JobAdsTypes } from "../types/Job.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyTypes from "../types/Company.types";
import JobBox from "../components/JobBox";
import Tabs from '../components/Tabs'

const testCompany: CompanyTypes = {
	id: tokenGenerator(),
	logo: 'https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70',
	title: 'تاکسی ماکسیم',
	score: 4.9,
	jobs: [],
	aboutCompany: 'ما به عنوان سازمانی یادگیرنده، همه تلاش خود را برای ارتقاء کیفیت و عدالت آموزشی بکار می گیریم. دانش و تخصصمان به ما کمک می کند در کنار حامیان خیرخواه و نیکوکار، راه حلهای کارآمدی برای یادگیری دانش آموزان، معلمان و والدین خلق کنیم. ما با بکارگیری فناوری های روز و دستاوردهای علمی نهاد آموزش را به عنوان یکی از الزامات توسعه پایدار تقویت می نماییم تا در مسیر شکل گیری جامعه یادگیرنده قدم برداریم.',
	employees: [10, 30]
}

const testJob: JobsTypes = {
	id: tokenGenerator(),
	categories: [{ title: 'front-end', id: tokenGenerator(), }],
	title: 'متخصص فرانت اند و بک اند (full-stack Developer)',
	company: testCompany,
	city: 'تهران',
	location: 'فرشته',
	salary: 32,
	remote: false,
	isUrgent: true,
	selected: false,
	knowledgeBasedCompany: true
}

const Jobs = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false)
	const [testTabs, setTestTabs] = useState<{
		id: string;
		title: string;
		content: ReactNode
	}[]>([])

	useEffect(() => {
		const testJobAds: JobAdsTypes = {
			id: tokenGenerator(),
			categories: [{ title: 'front-end', id: tokenGenerator(), }],
			title: 'متخصص فرانت اند و بک اند (full-stack Developer)',
			company: testCompany,
			city: 'تهران',
			location: 'فرشته',
			salary: 32,
			remote: false,
			isUrgent: true,
			knowledgeBasedCompany: true,
			cooperationType: 'full-time',
			businessTrips: [7, 'month'],
			benefits: ['بیمه', 'ناهار'],
			abilityForBoss: ['5 سال سابقه کار', 'ترجیحا ساکن ونکوور'],
			description: 'توسعه و بهبود وبسایتها و محصولات کارفرمایان خارجی و افزودن قابلیت‌های جدید به آنها (قابلیت‌های جدید باید ایمن، تست‌شده و بهینه باشند)',
			employmentConditions: {
				age: [18, 32],
				gender: 'custom',
				endOfMilitaryService: false,
				education: 'لیسانس مهندسی نرم افزار',
				applications: ['vs code', 'js', 'ts', 'react', 'next', 'bun']
			}
		}

		setTestTabs([
			{
				id: testJobAds.id,
				title: 'درباره شغل',
				content: (
					<p>
						{testJobAds.description}
					</p>
				)
			},
			{
				id: '1234',
				title: 'درباره شرکت',
				content: (
					<p>
						{testCompany.aboutCompany}
					</p>
				)
			}
		])
	}, [])

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
						<aside className={`bg-white w-full flex flex-col justify-center items-center p-3 rounded lg:ml-3 lg:w-5/12
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
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
								<JobBox {...testJob} />
							</div>
						</aside>

						<main className={`current-height list-scrollbar w-full top-[calc(4.5rem+0.75rem)] pb-6 overflow-y-auto
						absolute opacity-0 invisible translate-y-full lg:opacity-100 lg:visible lg:translate-y-0 lg:w-7/12 lg:sticky
						xl:w-8/12`}>
							<div className={`bg-white w-full h-full flex flex-col px-3 py-4 rounded`}>
								<div className={`w-full`}>
									<Title withOutIcon>
										<h2>
											برنامه نویس Front-End (ReactJs)
										</h2>
									</Title>
									<div className={`flex items-center mt-6`}>
										<span className={`text-jv-primary`}>
											ایران فاوا گسترش
										</span>
										<span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
											تهران ، یوسف اباد
										</span>
										<span className={`border-r border-solid border-jv-light italic pr-3 mr-3`}>
											امکان دورکاری
										</span>
										<span className={`text-jv-danger border-r border-solid border-jv-light italic pr-3 mr-3`}>
											فوری
										</span>
									</div>
									<div className={`w-full flex items-center justify-between mt-3`}>
										<span className={`italic`}>
											7 روز پیش
										</span>
										<div className={`flex items-center`}>
											<ShareOutlined className={`text-jv-primary cursor-pointer`} />
											<FavoriteBorderRounded className={`text-jv-danger mr-3 cursor-pointer`} />
											<button className={`btn btn-success mr-6`}>
												ارسال رزومه
											</button>
										</div>
									</div>
								</div>

								<div className={`bg-jv-bright w-full flex items-center px-5 py-2 mt-6 rounded`}>
									<div className={`flex items-center`}>
										<PeopleAltRounded className={`text-jv-light brightness-75`} />
										<span className={`mr-3`}>
											201 تا 500 نفر
										</span>
									</div>
									<div className={`flex items-center mr-6`}>
										<HelpRounded className={`text-jv-light brightness-75`} />
										<span className={`mr-3`}>
											شرکت ایران فاوا گسترش، وابسته به گروه صنعتی ایران خودرو
										</span>
									</div>
								</div>

								{
									useMemo(() => (
										<Tabs
											customClass={`mt-6`}
											tabs={testTabs}
										/>
									), [testTabs])
								}
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default Jobs;