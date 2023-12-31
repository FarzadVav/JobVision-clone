import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ApartmentOutlined, AssignmentTurnedIn, BusinessCenter, Diversity3Rounded, KeyboardBackspaceRounded, TouchAppRounded } from "@mui/icons-material";

import IranAnimation from "../components/IranAnimation";
import SearchJobForm from "../components/SearchJobAdsForm";
import Title from "../components/Title";
import JobAdsBox from "../components/JobAdsBox";
import PopularCompanies from "../components/PopularCompanies";
import CtaBox from "../components/CtaBox";
import HonorBox from "../components/HonorBox";
import Accordion from "../components/Accordion";
import tokenGenerator from "../utils/tokenGenerator";
import useOneScroll from "../hooks/useOnScrool";
import useJobAds from "../hooks/query/useJobAds";

// accordions
const accordions: { title: string; text: string }[] = [
	{
		title: 'مورد اعتماد بهترین سازمان‌های ایران',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	},
	{
		title: 'هوشمندترین سیستم پیشنهاد و اطلاع‌رسانی شغل',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	},
	{
		title: 'رزومه ساز دوزبانه و استاندارد',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	},
	{
		title: 'بستری برای ملاقات با مدیران شرکت ها در نمایشگاه کار',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	},
	{
		title: 'سیستم هوشمند انطباق',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	},
	{
		title: 'قوی‌ترین شبکه‌های اجتماعی در بین سایت‌های کاریابی ایرانی',
		text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
	}
]

const Home = () => {
	const { jobAds } = useJobAds()
	// custom hook for scroll effects
	useOneScroll(['employee-baner', 'cta-1', { id: 'cta-2', delay: 150 }])

	return (
		<>
			<div className={`wrapper mt-12 md:mt-3`}>
				{/* hero section */}
				<main className={`w-full flex flex-col justify-center items-center`}>
					<div className={`w-full flex justify-center items-center`}>
						{/* details */}
						<div className={`w-full flex flex-col justify-center items-center text-center md:w-1/2 md:text-right md:items-start`}>
							<Title customClass={`justify-center md:justify-start`}>
								<h1 className={`md:mt-16`}>
									در
									<span className={`text-jv-primary`}>
										484
									</span>
									شهر
									<span className={`text-jv-primary`}>
										37,540
									</span>
									آگهی شغلی <br className={`sm:hidden`} /> ثبت شده
								</h1>
							</Title>
							<p className={`text-sm leading-loose mt-3.5 md:text-base md:leading-relaxed`}>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
							</p>
							<div className={`hidden items-center mt-5 lg:flex`}>
								<Link
									className={`text-jv-primary`}
									to={'/'}
								>
									ثبت شرکت
								</Link>
								<Link
									className={`text-jv-primary border-r border-solid border-slate-200 pr-3 mr-4`}
									to={'/'}
								>
									ساخت رزومه
								</Link>
							</div>
						</div>
						{/* details */}
						{/* iran map animation */}
						<div className={`w-1/2 hidden justify-center items-center md:flex`}>
							<IranAnimation />
						</div>
					</div>
					{/* iran map animation */}

					{/* filter jobAds with searchBar */}
					<div className={`w-full mt-12`}>
						<SearchJobForm />
					</div>
					{/* filter jobAds with searchBar */}
				</main>
				{/* Hero section */}

				{/* suggested jobAds */}
				<div className={`mt-12 md:mt-16`}>
					<Title withIcon>
						<h2>
							{
								JSON.parse(localStorage.getItem('prevCategories') || '[]').length
									? 'آگهی‌ های شغلی پیشنهادی برای شما'
									: 'تازه‌ترین آگهی های شغلی'
							}
						</h2>
					</Title>
					<div className={`w-full grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 lg:grid-cols-3`}>
						{
							jobAds?.slice(0, 6)?.map(jobAd => (
								<JobAdsBox
									key={tokenGenerator()}
									jobAd={jobAd}
								/>
							))
						}
						<div className={`w-full flex justify-center mt-8 md:col-span-2 md:mt-12 lg:col-span-3`}>
							<Link
								className={`btn btn-out-primary`}
								to={`/jobs`}
							>
								همه آگهی ها
								<KeyboardBackspaceRounded fontSize="small" />
							</Link>
						</div>
					</div>
				</div>
				{/* suggested jobAds */}

				{/* popular companies */}
				<div className={`mt-12 md:mt-16`}>
					<PopularCompanies />
				</div>
				{/* popular companies */}

				{/* employment baner */}
				<div
					id={`employee-baner`}
					className={`bg-jv-bright flex flex-col-reverse justify-center items-center mt-12 p-5 pb-9 rounded-md
					md:flex-row md:justify-evenly md:mt-16 md:px-0 md:py-9`}
				>
					<div className={`flex flex-col justify-center items-center md:items-start md:w-1/2`}>
						<Title customClass={`justify-center md:justify-start`}>
							<h3 >
								استخدام‌های سراسری و دولتی
							</h3>
						</Title>
						<p className={`mt-3 text-sm text-justify md:text-right`}>
							در این قسمت، آخرین فرصت‌های استخدام سراسری و دولتی به‌طور مرتب به‌روزرسانی و منتشر می‌شوند. به صفحه استخدام‌های
							سراسری سر بزنید و از بررسی روزانه ده‌ها سایت و مرجع خبری دیگر بی‌نیاز شوید.
						</p>
						<Link
							className={`btn btn-out-dark dana-bold w-max mt-5`}
							to={'/'}
						>
							مشاهده فرصت‌های شغلی
						</Link>
					</div>
					<img
						className={`w-44 h-44 md:w-auto md:h-auto`}
						src={`/images/employment.svg`}
						alt={`استخدام‌های سراسری و دولتی`}
						loading={`lazy`}
					/>
				</div>
				{/* employment baner */}

				{/* honors section */}
				<div className={`mt-12 md:mt-16`}>
					<Title customClass={'justify-center'}>
						<h4>
							<span className={`text-jv-primary !mr-0`}>
								جاب‌ویژن
							</span> دستیار استخدامی شما
						</h4>
					</Title>
					<div className={`mt-10 flex flex-wrap justify-center items-center gap-y-12 sm:gap-16 md:mt-12 lg:gap-24 xl:gap-28`}>
						<HonorBox
							icon={<Diversity3Rounded />}
							count={2_000_000}
							text={'کارجوی همراه'}
						/>
						<HonorBox
							icon={<ApartmentOutlined />}
							count={59_900}
							text={'سازمان همراه'}
						/>
						<HonorBox
							icon={<BusinessCenter />}
							count={38_000}
							text={'موقعیت‌ شغلی فعال'}
						/>
						<HonorBox
							icon={<AssignmentTurnedIn />}
							count={132_000}
							text={'استخدام موفق'}
						/>
					</div>
				</div>
				{/* honors section */}

				{/* CTA section */}
				<div className={`flex flex-col gap-4 mt-12 md:mt-16 lg:flex-row`}>
					<CtaBox
						id={`cta-1`}
						src={`/images/cv.svg`}
						title={`رزومه ساز جاب ویژن`}
						text={`رزومه ای استاندارد به دو زبان فارسی و انگلیسی بسازید.`}
						btn={`ساخت رزومه`}
					/>
					<CtaBox
						id={`cta-2`}
						src={`/images/salary.svg`}
						title={`ماشین حساب حقوق و دستمزد`}
						text={`از حقوق دریافتی افراد در مشاغل مختلف آگاه شوید و تخمین دقیق تری از حقوق منصفانه خود داشته باشید.`}
						btn={`حقوق خود را محاسبه کنید`}
					/>
				</div>
				{/* CTA section */}

				{/* accordions */}
				<div className={`flex flex-col justify-center items-center mt-12 md:mt-16`}>
					<Title customClass={'justify-center'}>
						<h6>
							چرا باید <span className={`text-jv-primary`}>
								جاب‌ویژن
							</span> را انتخاب کنید
						</h6>
					</Title>
					<ul className={`w-full flex flex-col justify-center items-center pr-1 mt-8 relative sm:pl-0 sm:pr-16`}>
						<div className={`bg-jv-light w-[1px] absolute hidden top-0 bottom-0 translate-x-[1px] right-6 sm:block`}>
						</div>
						{
							useMemo(() => {
								return accordions.map((accordion, index) => (
									<Accordion
										key={tokenGenerator()}
										length={index + 1}
										{...accordion}
									/>
								))
							}, [])
						}
					</ul>
				</div>
				{/* accordions */}
			</div>

			{/* CTA section in end */}
			<div className={`hidden w-full relative group mt-12 sm:block md:mt-16`}>
				<div className={`bg-gradient-to-t from-jv-light to-white w-full h-full absolute left-0 top-0`}></div>
				<div className={`w-full flex flex-col justify-center items-center py-9 relative`}>
					<p className={`text-center text-xl leading-loose px-5 rounded-full`}>
						از آخرین فرصت‌های شغلی معتبرترین شرکت‌های ایران باخبر شده و در آنها استخدام شوید.
					</p>
					<button
						className={`bg-jv-primary text-white h-14 flex justify-center items-center px-6 mt-6 rounded-md cursor-pointer`}
						onClick={() => { }}
					>
						<span className={`dana-bold h-full leading-[3.5rem] inline-block text-lg`}>
							ثبت نام کنید
						</span>
						<TouchAppRounded className={`h-full mr-3`} />
						{/* <div className={`bg-white text-jv-primary w-10 h-10 flex justify-center items-center rounded-md mr-7`}>
						</div> */}
					</button>
				</div>
			</div>
			{/* CTA section in end */}
		</>
	);
};

export default Home;