import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { ApartmentOutlined, AssignmentTurnedIn, BusinessCenter, Diversity3Rounded, KeyboardArrowLeftRounded, KeyboardBackspaceRounded } from "@mui/icons-material";

import tokenGenerator from "../utils/tokenGenerator";
import SearchJobForm from "../components/SearchJobForm";
import Title from "../components/Title";
import JobAdsBox from "../components/JobAdsBox";
import HonorBox from "../components/HonorBox";
import CtaBox from "../components/CtaBox";
import Accordion from "../components/Accordion";
import useOneScroll from "../hooks/useOnScrool";
import PopularCompanies from "../components/PopularCompanies";
import useJobAdsStore from "../store/useJobAds";
import useLoading from "../store/useLoading";

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
	const { startPageLoadingHandler, endPageLoadingHandler } = useLoading(s => s)
	const { jobAds, getJobAds } = useJobAdsStore(s => s)
	const [svgPath, setSvgPath] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

	// custom hook for scroll effects
	useOneScroll(['employee-baner', 'cta-1', { id: 'cta-2', delay: 150 }])

	const runAnimationRef = useRef<boolean>(false)
	const messageBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// get all jobAds and handel loading for it
		startPageLoadingHandler()
		getJobAds(endPageLoadingHandler)

		// play animation on first app running
		const oneAnimate = () => {
			activeRandomCircle()
			setTimeout(() => {
				messageBoxRef.current?.classList.remove('show-message-box')
				messageBoxRef.current?.classList.add('hidden-message-box')
			}, 4000);
		}

		// animation function
		const animate = () => {
			activeRandomCircle()
			setTimeout(() => {
				messageBoxRef.current?.classList.remove('show-message-box')
				messageBoxRef.current?.classList.add('hidden-message-box')
			}, 4000);
		}

		// inital animation interVal
		let interVal: ReturnType<typeof setInterval> | number = 0

		// handle remove animation in mobile size and play again in larger sizes
		const windowSizeHandler = () => {
			const width = window.innerWidth
			if (width < 768 && runAnimationRef.current) {
				setSvgPath({ x: 0, y: 0 })
				clearInterval(interVal)
				runAnimationRef.current = false
			} else if (width >= 768 && !runAnimationRef.current) {
				oneAnimate()
				interVal = setInterval(animate, 5000)
				runAnimationRef.current = true
			}
		}
		window.addEventListener('resize', windowSizeHandler)

		// check window size for handeling playing animation in first app runnig
		windowSizeHandler()

		return () => clearInterval(interVal)
	}, [])

	// handle active a circle in iran map animation
	const activeRandomCircle = () => {
		const number = Math.floor(Math.random() * (916 - 476 + 1) + 476)
		const prevCircleElem = document.querySelector('.active-circle')
		prevCircleElem?.classList.remove('active-circle')
		const nextCircleElem = document.querySelector<SVGCircleElement>(`#dot-${number}`)
		nextCircleElem?.classList.add('active-circle')
		messageBoxRef.current?.classList.remove('hidden-message-box')
		messageBoxRef.current?.classList.add('show-message-box')
		setSvgPath({
			x: nextCircleElem?.cx.animVal.value || 0,
			y: nextCircleElem?.cy.animVal.value || 0
		})
	}

	return (
		<>
			<div className={`wrapper mt-12 md:mt-3`}>
				{/* hero section */}
				<main className={`h-max grid grid-rows-[1fr_13.5rem] grid-cols-1 gap-y-9 sm:grid-rows-[1fr_10rem] md:grid-cols-2
				lg:grid-rows-[1fr_3rem] md:gap-y-16`}>
					{/* details */}
					<div className={`flex flex-col justify-center items-center text-center md:text-right md:items-start`}>
						<Title
							customClass={`justify-center md:justify-start`}
							withOutIcon
						>
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
					<div className={`hidden justify-center items-center md:flex`}>
						<svg
							id="iran-svg"
							className={`w-full h-full overflow-visible`}
							viewBox="0 0 500 300" fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="map_circle">
								<circle id="dot-476" cx="425.969" cy="264.233" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-477" cx="415.282" cy="264.233" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-478" cx="404.586" cy="264.233" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-494" cx="425.969" cy="253.542" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-495" cx="415.282" cy="253.542" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-496" cx="404.586" cy="253.542" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-513" cx="415.282" cy="242.846" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-514" cx="404.586" cy="242.846" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-533" cx="415.282" cy="232.155" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-534" cx="404.586" cy="232.155" r="3.565"
									fill="#E8E8E8"></circle>
								<g id="selected dots">
									<circle id="dot-459" cx="393.899" cy="296.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-460" cx="393.899" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-461" cx="383.204" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-462" cx="372.508" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-463" cx="361.821" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-464" cx="351.126" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-465" cx="340.438" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-466" cx="329.743" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-467" cx="319.055" cy="285.62" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-468" cx="393.899" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-469" cx="383.204" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-470" cx="372.508" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-471" cx="361.813" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-472" cx="351.118" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-473" cx="340.422" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-474" cx="329.727" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-475" cx="319.032" cy="274.928" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-479" cx="393.899" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-480" cx="383.204" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-481" cx="372.516" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-482" cx="361.821" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-483" cx="351.133" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-484" cx="340.438" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-485" cx="329.751" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-486" cx="319.055" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-487" cx="308.368" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-488" cx="297.672" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-489" cx="286.985" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-490" cx="276.29" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-491" cx="265.602" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-492" cx="254.907" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-493" cx="244.219" cy="264.233" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-497" cx="393.899" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-498" cx="383.204" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-499" cx="372.516" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-500" cx="361.821" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-501" cx="351.133" cy="253.542" r="3.565"
										fill="#E8E8E8" className="light-on"></circle>
									<circle id="dot-502" cx="340.438" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-503" cx="329.751" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-504" cx="319.055" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-505" cx="308.368" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-506" cx="297.672" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-507" cx="286.985" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-508" cx="276.29" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-509" cx="265.602" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-510" cx="254.907" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-511" cx="244.219" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-512" cx="233.524" cy="253.542" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-515" cx="393.899" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-516" cx="383.204" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-517" cx="372.516" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-518" cx="361.821" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-519" cx="351.133" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-520" cx="340.438" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-521" cx="329.751" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-522" cx="319.055" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-523" cx="308.368" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-524" cx="297.672" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-525" cx="286.985" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-526" cx="276.29" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-527" cx="265.602" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-528" cx="254.907" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-529" cx="244.219" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-530" cx="233.524" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-531" cx="222.836" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-532" cx="212.141" cy="242.846" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-535" cx="393.899" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-536" cx="383.204" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-537" cx="372.516" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-538" cx="361.821" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-539" cx="351.133" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-540" cx="340.438" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-541" cx="329.751" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-542" cx="319.055" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-543" cx="308.368" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-544" cx="297.672" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-545" cx="286.985" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-546" cx="276.29" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-547" cx="265.602" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-548" cx="254.907" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-549" cx="244.219" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-550" cx="233.524" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-551" cx="222.836" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-552" cx="212.141" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-553" cx="201.454" cy="232.155" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-554" cx="383.204" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-555" cx="372.516" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-556" cx="361.829" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-557" cx="351.141" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-558" cx="340.454" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-559" cx="329.766" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-560" cx="319.079" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-561" cx="308.391" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-562" cx="297.704" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-563" cx="287.016" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-564" cx="276.329" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-565" cx="265.641" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-566" cx="254.954" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-567" cx="244.266" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-568" cx="233.579" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-569" cx="222.891" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-570" cx="212.204" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-571" cx="201.516" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-572" cx="190.829" cy="221.463" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-573" cx="383.204" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-574" cx="372.516" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-575" cx="361.821" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-576" cx="351.133" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-577" cx="340.438" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-578" cx="329.751" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-579" cx="319.055" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-580" cx="308.368" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-581" cx="297.672" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-582" cx="286.985" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-583" cx="276.29" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-584" cx="265.602" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-585" cx="254.907" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-586" cx="244.219" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-587" cx="233.524" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-588" cx="222.836" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-589" cx="212.141" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-590" cx="201.454" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-591" cx="190.758" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-592" cx="180.071" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-593" cx="169.376" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-594" cx="158.688" cy="210.768" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-595" cx="383.204" cy="200.081" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-596" cx="372.508" cy="200.077" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-597" cx="361.805" cy="200.073" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-598" cx="351.11" cy="200.069" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-599" cx="340.407" cy="200.065" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-600" cx="329.711" cy="200.061" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-601" cx="319.008" cy="200.057" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-602" cx="308.313" cy="200.053" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-603" cx="297.61" cy="200.049" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-604" cx="286.915" cy="200.045" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-605" cx="276.211" cy="200.042" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-606" cx="265.516" cy="200.038" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-607" cx="254.813" cy="200.034" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-608" cx="244.118" cy="200.03" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-609" cx="233.415" cy="200.026" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-610" cx="222.719" cy="200.022" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-611" cx="212.016" cy="200.018" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-612" cx="201.321" cy="200.014" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-613" cx="190.618" cy="200.01" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-614" cx="179.922" cy="200.006" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-615" cx="169.219" cy="200.003" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-616" cx="158.524" cy="199.999" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-617" cx="393.899" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-618" cx="383.204" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-619" cx="372.516" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-620" cx="361.821" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-621" cx="351.133" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-622" cx="340.438" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-623" cx="329.751" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-624" cx="319.055" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-625" cx="308.368" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-626" cx="297.672" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-627" cx="286.985" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-628" cx="276.29" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-629" cx="265.602" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-630" cx="254.907" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-631" cx="244.219" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-632" cx="233.524" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-633" cx="222.836" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-634" cx="212.141" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-635" cx="201.454" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-636" cx="190.758" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-637" cx="180.071" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-638" cx="169.376" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-639" cx="158.688" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-640" cx="147.993" cy="189.381" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-641" cx="383.204" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-642" cx="372.516" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-643" cx="361.821" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-644" cx="351.133" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-645" cx="340.438" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-646" cx="329.751" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-647" cx="319.055" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-648" cx="308.368" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-649" cx="297.672" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-650" cx="286.985" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-651" cx="276.29" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-652" cx="265.602" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-653" cx="254.907" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-654" cx="244.219" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-655" cx="233.524" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-656" cx="222.836" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-657" cx="212.141" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-658" cx="201.454" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-659" cx="190.758" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-660" cx="180.071" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-661" cx="169.376" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-662" cx="158.688" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-663" cx="147.993" cy="178.698" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-664" cx="372.516" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-665" cx="361.829" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-666" cx="351.141" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-667" cx="340.454" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-668" cx="329.766" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-669" cx="319.079" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-670" cx="308.391" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-671" cx="297.704" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-672" cx="287.016" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-673" cx="276.329" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-674" cx="265.641" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-675" cx="254.954" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-676" cx="244.266" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-677" cx="233.579" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-678" cx="222.891" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-679" cx="212.204" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-680" cx="201.516" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-681" cx="190.829" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-682" cx="180.141" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-683" cx="169.454" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-684" cx="158.766" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-685" cx="148.079" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-686" cx="137.258" cy="167.995" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-687" cx="372.508" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-688" cx="361.829" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-689" cx="351.141" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-690" cx="340.469" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-691" cx="329.735" cy="157.303" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-692" cx="319.04" cy="157.303" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-693" cx="308.352" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-694" cx="297.657" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-695" cx="286.961" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-696" cx="276.266" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-697" cx="265.571" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-698" cx="254.883" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-699" cx="244.188" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-700" cx="233.501" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-701" cx="222.805" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-702" cx="212.11" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-703" cx="201.415" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-704" cx="190.727" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-705" cx="180.032" cy="157.303" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-706" cx="169.336" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-707" cx="158.649" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-708" cx="147.954" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-709" cx="137.258" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-710" cx="126.563" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-711" cx="115.868" cy="157.311" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-712" cx="372.508" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-713" cx="361.813" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-714" cx="351.118" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-715" cx="340.43" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-716" cx="329.735" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-717" cx="319.04" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-718" cx="308.352" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-719" cx="297.657" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-720" cx="286.961" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-721" cx="276.266" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-722" cx="265.571" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-723" cx="254.883" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-724" cx="244.188" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-725" cx="233.501" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-726" cx="222.805" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-727" cx="212.11" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-728" cx="201.415" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-729" cx="190.719" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-730" cx="180.032" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-731" cx="169.336" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-732" cx="158.649" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-733" cx="147.954" cy="146.612" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-734" cx="137.258" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-735" cx="126.563" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-736" cx="115.868" cy="146.608" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-737" cx="361.813" cy="135.917" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-738" cx="351.149" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-739" cx="340.469" cy="135.917" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-740" cx="329.79" cy="135.92" r="3.565" fill="#E8E8E8"
									></circle>
									<circle id="dot-741" cx="319.04" cy="135.92" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-742" cx="308.352" cy="135.92" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-743" cx="297.61" cy="135.92" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-744" cx="287.071" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-745" cx="276.391" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-746" cx="265.516" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-747" cx="254.883" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-748" cx="244.196" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-749" cx="233.415" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-750" cx="222.805" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-751" cx="212.11" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-752" cx="201.422" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-753" cx="190.727" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-754" cx="180.032" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-755" cx="169.344" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-756" cx="158.649" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-757" cx="147.954" cy="135.917" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-758" cx="137.258" cy="135.917" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-759" cx="126.563" cy="135.917" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-760" cx="115.868" cy="135.913" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-761" cx="361.829" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-762" cx="351.149" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-763" cx="340.469" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-764" cx="329.79" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-765" cx="319.047" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-766" cx="308.352" cy="125.225" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-767" cx="297.657" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-768" cx="286.961" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-769" cx="276.274" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-770" cx="265.579" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-771" cx="254.813" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-772" cx="244.188" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-773" cx="233.415" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-774" cx="222.719" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-775" cx="212.11" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-776" cx="201.407" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-777" cx="190.719" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-778" cx="180.032" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-779" cx="169.344" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-780" cx="158.649" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-781" cx="147.954" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-782" cx="137.258" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-783" cx="126.563" cy="125.229" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-784" cx="361.805" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-785" cx="351.11" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-786" cx="340.407" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-787" cx="329.711" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-788" cx="319.008" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-789" cx="308.313" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-790" cx="297.61" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-791" cx="286.915" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-792" cx="276.211" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-793" cx="265.516" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-794" cx="254.813" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-795" cx="244.118" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-796" cx="233.415" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-797" cx="222.719" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-798" cx="212.016" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-799" cx="201.321" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-800" cx="190.618" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-801" cx="179.922" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-802" cx="169.219" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-803" cx="158.524" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-804" cx="147.954" cy="114.53" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-805" cx="137.258" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-806" cx="126.563" cy="114.53" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-807" cx="115.868" cy="114.53" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-808" cx="105.219" cy="114.545" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-809" cx="361.813" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-810" cx="351.118" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-811" cx="340.407" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-812" cx="329.735" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-813" cx="319.047" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-814" cx="308.352" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-815" cx="297.657" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-816" cx="286.961" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-817" cx="276.266" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-818" cx="265.579" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-819" cx="254.883" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-820" cx="244.188" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-821" cx="233.501" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-822" cx="222.805" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-823" cx="212.11" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-824" cx="201.454" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-825" cx="190.727" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-826" cx="180.274" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-827" cx="169.344" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-828" cx="158.649" cy="103.866" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-829" cx="147.907" cy="103.866" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-830" cx="137.258" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-831" cx="126.618" cy="103.866" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-832" cx="115.868" cy="103.862" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-833" cx="105.18" cy="103.838" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-834" cx="94.438" cy="103.866" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-835" cx="361.805" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-836" cx="351.11" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-837" cx="340.407" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-838" cx="329.711" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-839" cx="319.008" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-840" cx="308.313" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-841" cx="297.61" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-842" cx="286.915" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-843" cx="276.211" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-844" cx="265.516" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-845" cx="254.813" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-846" cx="244.118" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-847" cx="233.415" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-848" cx="222.719" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-849" cx="201.454" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-850" cx="190.719" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-851" cx="179.993" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-852" cx="169.258" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-853" cx="158.532" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-854" cx="147.797" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-855" cx="137.071" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-856" cx="126.563" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-857" cx="116.063" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-858" cx="105.555" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
									<circle id="dot-859" cx="95.0552" cy="93.1783" r="3.565"
										fill="#E8E8E8"></circle>
								</g>
								<circle id="dot-860" cx="340.407" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-861" cx="329.711" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-862" cx="319.008" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-863" cx="308.313" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-864" cx="297.61" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-865" cx="286.915" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-866" cx="276.211" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-867" cx="265.516" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-868" cx="254.813" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-869" cx="244.118" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-870" cx="180.032" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-871" cx="169.344" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-872" cx="158.657" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-873" cx="147.969" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-874" cx="137.282" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-875" cx="126.594" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-876" cx="115.907" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-877" cx="105.219" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-878" cx="94.5318" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-879" cx="83.8443" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-880" cx="73.1568" cy="82.4478" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-881" cx="308.352" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-882" cx="297.61" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-883" cx="286.961" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-884" cx="276.274" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-885" cx="265.579" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-886" cx="254.883" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-887" cx="244.118" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-888" cx="158.657" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-889" cx="147.954" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-890" cx="137.251" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-891" cx="126.547" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-892" cx="115.844" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-893" cx="105.141" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-894" cx="94.438" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-895" cx="83.7349" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-896" cx="73.0318" cy="71.7603" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-897" cx="147.954" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-898" cx="137.251" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-899" cx="126.547" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-900" cx="115.844" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-901" cx="105.141" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-902" cx="94.438" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-903" cx="83.7349" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-904" cx="73.0318" cy="61.065" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-905" cx="147.954" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-906" cx="137.258" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-907" cx="126.571" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-908" cx="94.438" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-909" cx="83.7974" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-910" cx="73.1568" cy="50.3736" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-911" cx="147.969" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-912" cx="137.258" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-913" cx="126.555" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-914" cx="94.4849" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-915" cx="83.7974" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
								<circle id="dot-916" cx="73.1021" cy="39.69" r="3.565"
									fill="#E8E8E8"></circle>
							</g>
							{
								(svgPath.x !== 0 && svgPath.y !== 0) ? (
									<foreignObject
										className={`w-40 h-10 -translate-x-20 translate-y-[0.9rem] overflow-visible`}
										x={svgPath.x} y={svgPath.y}
									>
										<div
											ref={messageBoxRef}
											className={`show-message-box bg-white border border-solid border-[#00000025] w-full h-full flex justify-center items-center text-center rounded-full px-5 relative test`}>
											<div className={`bg-white border-t border-l border-solid border-[#00000025] w-3 h-3 rotate-45 absolute -top-[0.39rem] z-0`}></div>
											<span className={`text-[60%] z-10`}>
												یک رزومه برای شرکت دیجیکالا در تهران ارسال شد
											</span>
										</div>
									</foreignObject>
								) : null
							}
						</svg>
					</div>
					{/* iran map animation */}

					{/* filter jobAds with searchBar */}
					<SearchJobForm />
					{/* filter jobAds with searchBar */}
				</main>
				{/* Hero section */}

				{/* suggested jobAds */}
				<div className={`mt-12 md:mt-16`}>
					<Title>
						<h2>
							تازه‌ترین آگهی‌های شغلی برای شما
						</h2>
					</Title>
					<div className={`w-full grid gap-4 grid-rows-(1fr_auto) grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3`}>
						{
							jobAds.length ? jobAds.map(jobAd => (
								<JobAdsBox
									key={tokenGenerator()}
									{...jobAd}
								/>
							)) : null
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
						<Title
							customClass={`justify-center md:justify-start`}
							withOutIcon
						>
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
			<div className={`bg-jv-bright h-80 relative group mt-7 overflow-hidden sm:mt-12 md:h-72 md:mt-16`}>
				<div className={`bg-gradient-to-t from-jv-bright via-jv-bright to-white absolute top-0 bottom-0
				right-0 left-0 duration-300 sm:group-hover:opacity-0 sm:bg-gradient-to-r
				sm:from-white sm:via-jv-bright sm:to-white`}></div>
				<div className={`flex flex-col justify-between items-center py-11 px-5 absolute top-0 bottom-0 right-0 left-0
				z-10 sm:py-12`}>
					<Title
						customClass={`justify-center`}
						withOutIcon
					>
						<h2 className={`text-jv-primary text-center sm:!text-4xl`}>
							زندگی شغلی رویایی خود را با <br className={`sm:hidden`} /> جاب ویژن بسازید
						</h2>
					</Title>
					<p className={`text-center leading-loose`}>
						از آخرین فرصت‌های شغلی معتبرترین شرکت‌های ایران باخبر شده و در آنها استخدام شوید.
					</p>
					<Link
						className={`bg-jv-primary text-white text-xl p-1.5 pr-7 flex justify-center items-center rounded-md`}
						to={``}
					>
						ثبت نام کنید
						<div className={`bg-white text-jv-primary w-12 h-12 flex justify-center items-center rounded-md mr-7`}>
							<KeyboardArrowLeftRounded fontSize="large" />
						</div>
					</Link>
				</div>
			</div>
			{/* CTA section in end */}
		</>
	);
};

export default Home;