import SearchJobForm from "../components/SearchJobForm";
import JobsFiltersBar from "../components/FilterJob";
import { NotificationAddRounded } from "@mui/icons-material";

import Title from "../components/Title";
import JobsTypes from "../types/Job.types";
import tokenGenerator from "../utils/tokenGenerator";
import CompanyTypes from "../types/Company.types";
import JobBox from "../components/JobBox";

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
					<div className={`bg-jv-primary w-full flex justify-between items-center px-5 py-2 rounded`}>
						<NotificationAddRounded className={`text-white ml-3`} />
						<Title withOutIcon>
							<h1 className={`!dana-base text-white !text-base`}>
								باخبر شدن از جدید ترین آگهی های مرتبط
							</h1>
						</Title>
						<div className={`bg-white w-11 h-5 flex items-center rounded-full relative cursor-pointer group`}>
							<div className={`bg-jv-primary w-4 h-4 rounded-full absolute left-0.5 group-hover:w-5`}></div>
						</div>
					</div>
					<div className={`flex mt-3`}>
						<aside className={`bg-white w-4/12 flex flex-col justify-center items-center p-3 rounded ml-3`}>
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
								<JobBox {...TestJob} selected />
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
						<main className={`current-height w-8/12 sticky top-[calc(4.5rem+0.75rem)] pb-6 overflow-y-auto`}>
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