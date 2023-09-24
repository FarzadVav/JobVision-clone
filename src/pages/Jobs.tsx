import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";
import { NotificationAddRounded, Send } from "@mui/icons-material";

import Title from "../components/Title";
import JobsTypes from "../types/Job.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyTypes from "../types/Company.types";
import JobBox from "../components/JobBox";
import { useState } from "react";

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
						className={`bg-jv-primary w-full h-12 flex justify-center items-center p-2 pr-5 fixed z-50
						bottom-0 left-0 md:static md:z-0 md:justify-between md:rounded`}
						onClick={() => setShowAlert(prev => !prev)}
					>
						<div className={`flex items-center absolute ${showAlert ? '' : 'opacity-0 translate-x-full'} md:static`}>
							<NotificationAddRounded className={`text-white ml-3`} />
							<Title withOutIcon>
								<h1 className={`!dana-base text-white !text-base`}>
									باخبر شدن از جدید ترین آگهی های مرتبط
								</h1>
							</Title>
						</div>
						<div
							className={`flex justify-center items-center absolute ${showAlert ? 'opacity-0 -translate-x-full' : ''} 
								md:static`}
							data-name="email-alert"
						>
							<input
								dir="ltr"
								className={`bg-jv-primary text-white placeholder:text-white max-w-72 py-2 md:w-72`}
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
							<div className={`w-full h-full bg-white p-3 rounded`}>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default Jobs;