import { useState } from "react";
import { CloseRounded, FavoriteBorderRounded, HelpRounded, NotificationAddRounded, PeopleAltRounded, Send, ShareOutlined } from "@mui/icons-material";

import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";
import Title from "../components/Title";
import JobsTypes from "../types/Job.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyTypes from "../types/Company.types";
import JobBox from "../components/JobBox";
import Tabs from '../components/Tabs'

const TestCompany: CompanyTypes = {
	id: tokenGenerator(),
	logo: 'https://fileapi.jobvision.ir/api/v1.0/files/getimage?fileid=3518088&width=70&height=70',
	title: 'تاکسی ماکسیم',
	score: 4.9,
	jobs: []
}

const TestJob: JobsTypes = {
	id: tokenGenerator(),
	categories: [{ title: 'front-end', id: tokenGenerator(), }],
	title: 'متخصص فرانت اند و بک اند (full-stack Developer)',
	company: TestCompany,
	city: 'تهران',
	location: 'فرشته',
	salary: 32,
	remote: false,
	isUrgent: true
}

const testTabs = [
	{
		id: tokenGenerator(),
		title: 'تب 1',
		content: (<p className={`text-red-500`}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, debitis?
		</p>)
	},
	{
		id: tokenGenerator(),
		title: 'تب 2',
		content: (<p className={`text-purple-500`}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, debitis?
		</p>)
	}
]

const Jobs = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false)

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
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
								<JobBox {...TestJob} />
							</div>
						</aside>

						<main className={`current-height w-full top-[calc(4.5rem+0.75rem)] pb-6 overflow-y-auto absolute opacity-0
						invisible translate-y-full lg:opacity-100 lg:visible lg:translate-y-0 lg:w-7/12 lg:sticky xl:w-8/12`}>
							<div className={`bg-white w-full h-full flex flex-col px-3 py-4 rounded`}>
								<div className={`w-full`}>
									<Title withOutIcon>
										<h2>
											برنامه نویس Front-End (ReactJs)
										</h2>
									</Title>
									<div className={`flex items-center mt-6`}>
										<span className={`text-jv-primary border-l border-solid border-l-jv-light pl-3`}>
											ایران فاوا گسترش
										</span>
										<span className={`italic mr-3`}>
											تهران ، یوسف اباد
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

								<Tabs
									customClass={`mt-6`}
									tabs={testTabs}
								/>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default Jobs;