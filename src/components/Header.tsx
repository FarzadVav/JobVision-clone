import CustomNavLink from './CustomNavLink.tsx';
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import tokenGenerator from "../utils/tokenGenerator.ts";
import MegaMenusTypes from "../types/megaMenu.types.ts";

const megaMenus: MegaMenusTypes[] = [
	{
		id: tokenGenerator(),
		title: 'پربازدیدترین شغل ها',
		links: [
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
					{
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					},
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: [
					{
						title: 'فرانت اند',
						link: 'front-end'
					},
					{
						title: 'بک اند',
						link: 'back-end'
					},
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			}
		]
	},
	{
		id: tokenGenerator(),
		title: 'استان و شهر',
		links: [
			{
				title: 'خراسان رضوی',
				link: 'khorasan-razavi',
				subLinks: [
					{
						title: 'مشهد',
						link: 'mashhad'
					},
					{
						title: 'نیشابور',
						link: 'neyshaboor'
					},
					{
						title: 'مشهد',
						link: 'mashhad'
					},
					{
						title: 'نیشابور',
						link: 'neyshaboor'
					}
				]
			},
			{
				title: 'تهران',
				link: 'tehran',
				subLinks: [
					{
						title: 'کرج',
						link: 'karaj',
					}
				]
			},
			{
				title: 'مازندران',
				link: '',
				subLinks: [
					{
						title: 'رشت',
						link: 'rasht',
					}
				]
			}
		]
	},
	{
		id: tokenGenerator(),
		title: 'نوع همکاری',
		links: [
			{
				title: 'دورکاری',
				link: 'remote',
				subLinks: [
					{
						title: 'در تهران',
						link: 'remote-in-tehran'
					},
					{
						title: 'در مشهد',
						link: 'remote-in-mashhad'
					},
					{
						title: 'با بالاترین حقوق',
						link: 'remote-max-salary'
					}
				]
			}
		]
	}
]

const Header = () => {
	const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
	const [showMobileMenuJobs, setShowMobileMenuJobs] = useState<boolean>(false)
	const [showJobInMobileMenu, setShowJobInMobileMenu] = useState<
		{ state: boolean, id: string }
	>({
		state: false,
		id: ''
	})

	const mobileMenuRef = useRef<HTMLMenuElement>(null)

	useEffect(() => {
		if (showMobileMenu) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
			mobileMenuRef?.current?.classList.remove('hide-mobile-menu')
			mobileMenuRef?.current?.classList.add('show-mobile-menu')
		}
	}, [showMobileMenu])

	const mobileMenuToggleHandler = () => {
		if (showMobileMenu) {
			mobileMenuRef?.current?.classList.remove('show-mobile-menu')
			mobileMenuRef?.current?.classList.add('hide-mobile-menu')
		} else {
			setShowMobileMenu(true)
		}
	}

	const megaMenuButtonLinkHandler = (link: string) => {
		console.log(link)
	}

	return (
		<>
			<header className={`bg-jv-primary light-shadow w-full h-[4.5rem] sticky top-0 z-50 lg:bg-white`}>
				<div className={`wrapper w-full h-full justify-between items-center hidden lg:flex`}>
					<nav className={'h-full flex'}>
						<ul className={'h-full flex'}>
							<li
								className={'h-full'}
								onClick={() => setShowMegaMenu(prev => !prev)}
							>
								<button className={`nav-link cursor-pointer group ${showMegaMenu && 'text-jv-primary'}`}>
									فرصت های شغلی
									<svg
										className={`svg-duration ${showMegaMenu ? 'shadow-jv-primary -scale-y-100' : 'stroke-jv-black'} group-hover:stroke-jv-primary w-4 h-4`}
										xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
									</svg>
								</button>
							</li>
							<li className={'h-full'}>
								<CustomNavLink
									className={'nav-link'}
									path={`/jobs`}
								>
									محصولات
								</CustomNavLink>
							</li>
							<li className={'h-full'}>
								<CustomNavLink
									className={'nav-link'}
								>
									رده بندی شرکت ها
								</CustomNavLink>
							</li>
							<li className={'h-full'}>
								<CustomNavLink
									className={'nav-link'}
								>
									رزومه ساز
								</CustomNavLink>
							</li>
							<li className={'h-full'}>
								<CustomNavLink
									className={'nav-link text-jv-danger hover:text-jv-danger hover:brightness-90'}
								>
									گزارش کارنامه بازار کار
								</CustomNavLink>
							</li>
						</ul>
					</nav>
					<div className={`h-full flex justify-center items-center`}>
						<CustomNavLink
							className={`btn btn-primary`}
						>
							ورود / ثبت نام کارجو
						</CustomNavLink>
						<CustomNavLink
							className={'nav-link mr-5 xl:mr-7'}
						>
							بخش کارفرمایان
						</CustomNavLink>
						<CustomNavLink
							className={`nav-link pr-4 mr-5 relative before:absolute before:w-[1px] before:h-10 before:right-0 before:content-[''] before:bg-slate-200 xl:mr-7 xl:pr-5`}
						>
							<img
								src="/images/logo.svg"
								alt="لوگوی جاب ویژن"
							/>
						</CustomNavLink>
					</div>
				</div>
				<div className={`wrapper h-full flex justify-between items-center px-3 lg:hidden`}>
					<menu
						className={`h-full flex justify-center items-center`}
						onClick={mobileMenuToggleHandler}
					>
						{
							showMobileMenu ? (
								<svg
									className={`stroke-white w-9 h-9`} xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg
									className={`stroke-white w-9 h-9`} xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
								</svg>
							)
						}
					</menu>
					<CustomNavLink
						className={`nav-link`}
						path={`/`}
					>
						<img
							className={`scale-90`}
							src="/images/logo-white.svg"
							alt="لوگوی جاب ویژن"
						/>
					</CustomNavLink>
					<CustomNavLink
						className={'text-white'}
					>
						ورود / ثبت نام
					</CustomNavLink>
				</div>
			</header>

			<div
				className={`current-height bg-black bg-opacity-25 backdrop-blur-sm pb-9 fixed top-[4.5rem] left-0 right-0  z-40 ${showMegaMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
				<div
					className={`bg-white w-11/12 h-full mx-auto rounded-b-xl flex flex-col relative duration-300 ${showMegaMenu ? 'translate-0' : '-translate-y-9 scale-x-[0.975]'}`}>
					<ul className={`mega-menu light-shadow w-full h-16 flex px-6`}>
						{
							megaMenus.map(menu => (
								<li
									key={tokenGenerator()}
									className={`h-full flex items-center cursor-pointer group last:ml-0 last:border-0 hover:text-jv-primary`}>
									<span
										className={`border-l border-solid border-slate-200 h-1/2 flex items-center pt-1 px-6 dana-bold`}>
										{menu.title}
									</span>
									<ul
										className={`bg-white columns-5 absolute top-16 bottom-0 left-0 right-0 cursor-default p-3 rounded-b-xl overflow-y-auto duration-0 opacity-0 invisible ${showMegaMenu && 'group-hover:visible group-hover:opacity-100'}`}>
										{
											menu.links.map(link => (
												<li
													key={tokenGenerator()}
													className={`h-max max-h-max m-1`}
												>
													<button
														className={`text-jv-dark dana-bold w-full h-full flex flex-col px-3 py-1 cursor-pointer hover:text-jv-primary`}
														onClick={() => megaMenuButtonLinkHandler(link.link)}
													>
														{link.title}
														{
															link.subLinks.length ? (
																<ul className={`w-full p-3 cursor-default`}>
																	{
																		link.subLinks.map(subLink => (
																			<li
																				key={tokenGenerator()}
																				className={`w-full flex items-center mt-2 first:mt-0`}
																			>
																				<svg
																					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
																					strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1.5"
																				>
																					<path strokeLinecap="round" strokeLinejoin="round"
																						d="M15.75 19.5L8.25 12l7.5-7.5" />
																				</svg>
																				<CustomNavLink
																					className={`text-jv-dark w-full inline-block text-right hover:text-jv-primary`}
																					path={`#${subLink.link}`}
																				>
																					{subLink.title}
																				</CustomNavLink>
																			</li>
																		))
																	}
																</ul>
															) : null
														}
													</button>
												</li>
											))
										}
									</ul>
								</li>
							))
						}
					</ul>
					<div className={`flex flex-col justify-center items-center mx-auto mt-5`}>
						<img
							className={'w-96'}
							src="/images/chart.svg"
							alt="نمودار بازارکار"
						/>
						<p className={`text-jv-dark mt-2 text-center`}>
							در این قسمت، آخرین فرصت‌های استخدام سراسری و دولتی به‌طور مرتب به‌روزرسانی و منتشر می‌شوند. به صفحه
							<br />
							استخدام‌های سراسری سر بزنید و از بررسی روزانه ده‌ها سایت و مرجع خبری دیگر بی‌نیاز شوید.
						</p>
						<ul className={`mt-5 flex justify-center items-center`}>
							<li>
								<CustomNavLink
									className={`hover:text-jv-primary`}
								>
									لینک پیوست 1
								</CustomNavLink>
							</li>
							<li>
								<CustomNavLink
									className={`mx-7 hover:text-jv-primary`}
								>
									لینک پیوست 2
								</CustomNavLink>
							</li>
							<li>
								<CustomNavLink
									className={`hover:text-jv-primary`}
								>
									لینک پیوست 3
								</CustomNavLink>
							</li>
						</ul>
					</div>
					<div className={`bg-slate-300 w-12 h-1 rounded-full absolute left-1/2 bottom-3 -translate-x-1/2`}>
					</div>
				</div>
			</div>

			{
				showMobileMenu && (
					<menu
						ref={mobileMenuRef}
						className={`show-mobile-menu bg-jv-primary flex flex-col items-center rounded-t-[2rem] fixed bottom-0 top-32 right-0 left-0 origin-bottom overflow-hidden z-40 lg:hidden`}
						onAnimationEnd={(event: React.AnimationEvent<HTMLElement>) => {
							if (event.animationName === 'hide-mobile-menu') {
								setShowMobileMenu(false)
							}
						}}
					>
						<div className={`bg-slate-200 bg-opacity-25 w-12 h-1 rounded-full absolute top-3`}>
						</div>
						<ul className={`w-full flex flex-col px-6 absolute top-9 duration-500 cubic-1
						${(!showMobileMenuJobs && !showJobInMobileMenu.state) ? 'translate-x-0' : '-translate-x-full'}`}>
							<li
								className={`w-full flex justify-between items-center py-2 cursor-pointer`}
								onClick={() => setShowMobileMenuJobs(true)}
							>
								<span className={`text-white text-xl`}>
									فرصت های شغلی
								</span>
								<svg
									className={`stroke-white w-5 h-5`} xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-3`}>
								<CustomNavLink
									className={`text-white text-xl`}
									path={`/`}
								>
									محصولات
								</CustomNavLink>
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-3`}>
								<CustomNavLink
									className={`text-white text-xl`}
									path={`/`}
								>
									رده بندی شرکت ها
								</CustomNavLink>
							</li>
							<li
								className={`border-b border-solid border-slate-200 border-opacity-25 w-full flex justify-between items-center pt-2 pb-5 mt-3`}>
								<CustomNavLink
									className={`text-white text-xl`}
									path={`/`}
								>
									رزومه ساز
								</CustomNavLink>
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-4`}>
								<CustomNavLink
									className={`text-white text-xl`}
									path={`/`}
								>
									کارفرمایان
								</CustomNavLink>
							</li>
							<li className={`w-full flex justify-between items-center mt-3`}>
								<CustomNavLink
									className={`btn btn-danger text-xl w-full`}
									path={`/`}
								>
									گزارش کارنامه بازار کار
								</CustomNavLink>
							</li>
						</ul>
						<ul className={`w-full flex flex-col px-6 absolute top-9 duration-500 cubic-1
						${(showMobileMenuJobs && !showJobInMobileMenu.state) ? 'translate-x-0' : (!showMobileMenuJobs && showJobInMobileMenu.state) ? '-translate-x-full' : 'translate-x-full'}`}>
							<li
								className={`border-b border-solid border-slate-200 border-opacity-25 w-full flex justify-between items-center pt-2 pb-5 cursor-pointer`}
								onClick={() => setShowMobileMenuJobs(false)}
							>
								<span className={`text-white text-xl`}>
									بازگشت
								</span>
								<svg
									className={`stroke-white w-5 h-5 rotate-180`} xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</li>
							{
								megaMenus.map(menu => (
									<li
										key={menu.id}
										className={`w-full flex justify-between items-center py-2 mt-4 cursor-pointer`}
										onClick={() => {
											setShowMobileMenuJobs(false)
											setShowJobInMobileMenu({ state: true, id: menu.id })
										}}
									>
										<span className={`text-white text-xl`}>
											{menu.title}
										</span>
										<svg
											className={`stroke-white w-5 h-5`} xmlns="http://www.w3.org/2000/svg" fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
										</svg>
									</li>
								))
							}
						</ul>
						<ul className={`w-full h-full flex flex-col px-6 absolute top-9 overflow-y-auto duration-500 cubic-1
						${(!showMobileMenuJobs && showJobInMobileMenu.state) ? 'translate-x-0' : 'translate-x-full'}`}>
							<li
								className={`bg-jv-primary border-b border-solid border-slate-200 border-opacity-25 w-full flex justify-between items-center sticky top-0 pt-2 pb-5 cursor-pointer`}
								onClick={() => {
									setShowMobileMenuJobs(true)
									setShowJobInMobileMenu({ state: false, id: '' })
								}}
							>
								<span className={`text-white text-xl`}>
									بازگشت
								</span>
								<svg
									className={`stroke-white w-5 h-5 rotate-180`} xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</li>
							{
								megaMenus.map(menu => {
									if (menu.id === showJobInMobileMenu.id) {
										return menu.links.map(link => (
											<li
												key={tokenGenerator()}
												className={`w-full flex flex-col my-2 cursor-pointer`}
											>
												<button
													className={`underline decoration-[#ffffff75] w-full text-white text-xl text-right`}
													onClick={() => megaMenuButtonLinkHandler(`#${link.link}`)}
												>
													{link.title}
												</button>
												{
													link.subLinks.length ? (
														<ul className={`w-full flex flex-col pr-5 my-4`}>
															{
																link.subLinks.map(subLink => (
																	<li
																		key={tokenGenerator()}
																		className={`py-1 my-1 first:pt-0 first:mt-0 last:pb-0 last:mb-0`}
																	>
																		<CustomNavLink
																			className={`dana-base underline decoration-[#ffffff75] w-full block text-white text-base`}
																			path={`#${subLink.link}`}
																		>
																			{subLink.title}
																		</CustomNavLink>
																	</li>
																))
															}
														</ul>
													) : null
												}
											</li>
										))
									} else {
										return null
									}
								})
							}
						</ul>
					</menu>
				)
			}
		</>
	);
};

export default Header;