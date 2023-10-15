import { useContext, useEffect, useRef, useState, AnimationEvent } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { MenuRounded, CloseRounded, KeyboardArrowLeftRounded, PersonRounded, NavigateBeforeRounded, LogoutRounded } from '@mui/icons-material';

import tokenGenerator from "../utils/tokenGenerator.ts";
import MegaMenusTypes from "../types/megaMenu.types.ts";
import LoginPopUp from "./LoginPopUp.tsx";
import authContext from "../context/AuthContext.tsx";

const megaMenus: MegaMenusTypes[] = [
	{
		id: tokenGenerator(),
		title: 'پربازدیدترین شغل ها',
		query: 'cat',
		links: [
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				query2: 'job',
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
					}
				]
			}
		]
	},
	{
		id: tokenGenerator(),
		title: 'استان و شهر',
		query: 'province',
		links: [
			{
				title: 'خراسان رضوی',
				link: 'khorasan-razavi',
				query2: 'city',
				subLinks: [
					{
						title: 'مشهد',
						link: 'مشهد'
					},
					{
						title: 'نیشابور',
						link: 'نیشابور'
					},
					{
						title: 'بیرجند',
						link: 'بیرجند'
					}
				]
			}
		]
	},
	{
		id: tokenGenerator(),
		title: 'نوع همکاری',
		query: 'cooperationType',
		links: [
			{
				title: 'تمام وقت',
				link: 'full-time',
				query2: 'cooperationType-city',
				subLinks: [
					{
						title: 'در تهران',
						link: 'full-time__تهران'
					},
					{
						title: 'در تبریز',
						link: 'full-time__تبریز'
					}
				]
			},
			{
				title: 'پروژه ای',
				link: 'as-projects',
				query2: 'cooperationType-city',
				subLinks: [
					{
						title: 'در مشهد',
						link: 'as-projects__مشهد'
					}
				]
			}
		]
	}
]

const Header = () => {
	const redirect = useNavigate()
	const auth = useContext(authContext)
	const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
	const [showMobileMenuJobs, setShowMobileMenuJobs] = useState<boolean>(false)
	const [showLogin, setShowLogin] = useState<boolean>(false)
	const [showJobInMobileMenu, setShowJobInMobileMenu] = useState<{
		state: boolean,
		id: string
	}>({
		state: false,
		id: ''
	})

	const mobileMenuRef = useRef<HTMLMenuElement>(null)

	useEffect(() => {
		setShowMegaMenu(false)
		setShowMobileMenu(false)
		setShowJobInMobileMenu({ state: false, id: '' })
	}, [location.href])

	const mobileMenuToggleHandler = () => {
		if (showMobileMenu) {
			mobileMenuRef?.current?.classList.remove('show-mobile-menu')
			mobileMenuRef?.current?.classList.add('hide-mobile-menu')
		} else {
			setShowMobileMenu(true)
		}
	}

	const megaMenuButtonLinkHandler = (link: string) => {
		redirect(link)
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
									<KeyboardArrowDownRoundedIcon
										className={`${showMegaMenu ? 'text-jv-primary -scale-y-100' : 'text-jv-dark'} mr-1 group-hover:text-jv-primary`}
									/>
								</button>
							</li>
							<li className={'h-full'}>
								<Link
									className={'nav-link'}
									to={`/jobs`}
								>
									محصولات
								</Link>
							</li>
							<li className={'h-full'}>
								<Link
									className={'nav-link'}
									to={``}
								>
									رده بندی شرکت ها
								</Link>
							</li>
							<li className={'h-full'}>
								<Link
									className={'nav-link'}
									to={``}
								>
									رزومه ساز
								</Link>
							</li>
							<li className={'h-full'}>
								<Link
									className={'nav-link text-jv-danger hover:text-jv-danger hover:brightness-90'}
									to={``}
								>
									گزارش کارنامه بازار کار
								</Link>
							</li>
						</ul>
					</nav>
					<div className={`h-full flex justify-center items-center`}>
						{
							auth.isLogin ? (
								<>
									{
										location.pathname.includes('/d_employer') ? (
											<button
												className={`btn btn-out-danger`}
												onClick={() => {
													redirect('/')
													auth.logOutHandler()
												}}
											>
												<LogoutRounded />
											</button>
										) : null
									}
									<NavLink
										className={link => `btn ${link.isActive ? 'btn-primary' : 'btn-out-primary'} mr-3`}
										to={`/d_employer`}
									>
										پنل کارفرمایان
									</NavLink>
								</>
							) : (
								<>
									<button
										className={`btn btn-out-primary`}
										onClick={() => setShowLogin(true)}
									>
										ورود / ثبت نام
									</button>
									<Link
										className={'nav-link mr-5 xl:mr-7'}
										to={``}
									>
										بخش کارفرمایان
									</Link>
								</>
							)
						}
						<Link
							className={`nav-link pr-4 mr-5 relative before:absolute before:w-[1px] before:h-10 before:right-0 before:content-[''] before:bg-slate-200 xl:mr-7 xl:pr-5`}
							to={``}
						>
							<img
								src="/images/logo.svg"
								alt="لوگوی جاب ویژن"
							/>
						</Link>
					</div>
				</div>
				<div className={`wrapper h-full flex justify-between items-center px-4 lg:hidden`}>
					<menu
						className={`h-full flex items-center relative`}
						onClick={mobileMenuToggleHandler}
					>
						<MenuRounded
							className={`text-white ${showMobileMenu ? 'opacity-0 -translate-y-3' : ''}`}
							fontSize='large'
						/>
						<CloseRounded
							className={`text-white absolute ${!showMobileMenu ? 'opacity-0 translate-y-3' : ''}`}
							fontSize='large'
						/>
					</menu>
					<Link
						className={`nav-link`}
						to={`/`}
					>
						<img
							className={`scale-90`}
							src="/images/logo-white.svg"
							alt="لوگوی جاب ویژن"
						/>
					</Link>
					<button
						className={`h-full flex items-center`}
						onClick={() => setShowLogin(true)}
					>
						<PersonRounded className={`text-white`} fontSize='large' />
					</button>
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
									className={`h-full flex items-center cursor-pointer group hover:text-jv-primary`}>
									<span
										className={`border-l border-solid border-jv-light h-1/2 flex items-center px-6 dana-bold`}>
										{menu.title}
									</span>
									<ul
										className={`bg-white columns-5 absolute top-16 bottom-0 left-0 right-0 cursor-default p-3 pt-0 rounded-b-xl 
										overflow-y-auto duration-0 opacity-0 invisible ${showMegaMenu && 'group-hover:visible group-hover:opacity-100 group-hover:z-50'}`}>
										{
											menu.links.map(link => (
												<li
													key={tokenGenerator()}
													className={`h-max max-h-max m-1`}
												>
													<button
														className={`text-jv-dark dana-bold w-full h-full flex flex-col px-3 py-1 cursor-pointer hover:text-jv-primary`}
														onClick={() => megaMenuButtonLinkHandler(`/jobs?${menu.query}=${link.link}`)}
													>
														{link.title}
														{
															link.subLinks.length ? (
																<ul className={`w-full py-2 px-1 cursor-default`}>
																	{
																		link.subLinks.map(subLink => (
																			<li
																				key={tokenGenerator()}
																				className={`dana-base w-full flex items-center mt-2 first:mt-0 group/sub`}
																			>
																				<KeyboardArrowLeftRounded
																					className={`no-trans text-jv-dark ml-1 opacity-60 group-hover/sub:text-jv-primary
																					group-hover/sub:opacity-100`}
																					fontSize='small'
																				/>
																				<Link
																					className={`text-jv-dark w-full inline-block text-sm text-right
																					hover:text-jv-primary`}
																					to={`/jobs?${link.query2}=${subLink.link}`}
																					onClick={event => {
																						event.stopPropagation()
																					}}
																				>
																					{subLink.title}
																				</Link>
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
						<Link
							className={`text-jv-primary underline decoration-jv-light h-full flex items-center mr-6`}
							to={'/jobs'}
						>
							همه آگهی ها
						</Link>
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
								<Link
									className={`hover:text-jv-primary`}
									to={``}
								>
									لینک پیوست 1
								</Link>
							</li>
							<li>
								<Link
									className={`mx-7 hover:text-jv-primary`}
									to={``}
								>
									لینک پیوست 2
								</Link>
							</li>
							<li>
								<Link
									className={`hover:text-jv-primary`}
									to={``}
								>
									لینک پیوست 3
								</Link>
							</li>
						</ul>
					</div>
					<div className={`bg-jv-light w-12 h-1 rounded-full absolute left-1/2 bottom-1.5 -translate-x-1/2`}>
					</div>
				</div>
			</div>

			{
				showMobileMenu && (
					<menu
						ref={mobileMenuRef}
						className={`show-mobile-menu bg-jv-primary flex flex-col items-center rounded-t-[2rem] fixed bottom-0 top-32 right-0 left-0 origin-bottom overflow-hidden z-50 lg:hidden`}
						onAnimationEnd={(event: AnimationEvent<HTMLElement>) => {
							if (event.animationName === 'hide-mobile-menu') {
								setShowMobileMenu(false)
							}
						}}
					>
						<div className={`bg-jv-primary brightness-125 w-12 h-1 rounded-full absolute top-3`}></div>

						<ul className={`w-full flex flex-col px-6 absolute top-9 duration-500 cubic-1
						${(!showMobileMenuJobs && !showJobInMobileMenu.state) ? 'translate-x-0' : '-translate-x-full'}`}>
							<li
								className={`w-full flex justify-between items-center py-2 cursor-pointer`}
								onClick={() => setShowMobileMenuJobs(true)}
							>
								<span className={`text-white text-xl`}>
									فرصت های شغلی
								</span>
								<NavigateBeforeRounded className={`text-white`} />
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-3`}>
								<Link
									className={`text-white text-xl`}
									to={`/`}
								>
									محصولات
								</Link>
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-3`}>
								<Link
									className={`text-white text-xl`}
									to={`/`}
								>
									رده بندی شرکت ها
								</Link>
							</li>
							<li
								className={`border-b border-solid border-[#ffffff25] border-opacity-25 w-full flex justify-between items-center pt-2 pb-5 mt-3`}>
								<Link
									className={`text-white text-xl`}
									to={`/`}
								>
									رزومه ساز
								</Link>
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-4`}>
								<Link
									className={`text-white text-xl`}
									to={`/`}
								>
									کارفرمایان
								</Link>
							</li>
							<li className={`w-full flex justify-between items-center mt-3`}>
								<Link
									className={`btn btn-danger text-xl w-full`}
									to={`/`}
								>
									گزارش کارنامه بازار کار
								</Link>
							</li>
						</ul>

						<ul className={`w-full flex flex-col px-6 absolute top-9 duration-500 cubic-1
						${(showMobileMenuJobs && !showJobInMobileMenu.state) ? 'translate-x-0' : (!showMobileMenuJobs && showJobInMobileMenu.state) ? '-translate-x-full' : 'translate-x-full'}`}>
							<li
								className={`border-b border-solid border-[#ffffff25] brightness-125 w-full flex justify-between items-center 
								pt-2 pb-5 cursor-pointer`}
								onClick={() => setShowMobileMenuJobs(false)}
							>
								<button className={`text-white text-xl`}>
									بازگشت
								</button>
								<NavigateBeforeRounded className={`text-white rotate-180`} />
							</li>
							<li className={`w-full flex justify-between items-center py-2 mt-4 cursor-pointer`}>
								<Link
									className={`text-jv-warning underline w-full text-xl`}
									to={'/jobs'}
								>
									همه آگهی ها
								</Link>
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
										<NavigateBeforeRounded className={`text-white`} />
									</li>
								))
							}
						</ul>

						<ul className={`w-full h-full flex flex-col px-6 absolute top-9 overflow-y-auto duration-500 cubic-1
						${(!showMobileMenuJobs && showJobInMobileMenu.state) ? 'translate-x-0' : 'translate-x-full'}`}>
							<li
								className={`bg-jv-primary border-b border-solid border-[#ffffff25] w-full flex justify-between items-center sticky top-0 pt-2 pb-5 mb-4 cursor-pointer`}
								onClick={() => {
									setShowMobileMenuJobs(true)
									setShowJobInMobileMenu({ state: false, id: '' })
								}}
							>
								<button className={`text-white text-xl`}>
									بازگشت
								</button>
								<NavigateBeforeRounded className={`text-white rotate-180`} />
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
													className={`w-full text-white text-xl text-right`}
													onClick={() => megaMenuButtonLinkHandler(`/jobs?${menu.query}=${link.link}`)}
												>
													{link.title}
												</button>
												{
													link.subLinks.length ? (
														<ul className={`w-full flex flex-col my-4`}>
															{
																link.subLinks.map(subLink => (
																	<li
																		key={tokenGenerator()}
																		className={`py-1 my-1 first:pt-0 first:mt-0 last:pb-0 last:mb-0`}
																	>
																		<Link
																			className={`dana-base w-full block text-white text-base`}
																			to={`/jobs?${link.query2}=${subLink.link}`}
																		>
																			<span className={`ml-1.5`}>-</span> {subLink.title}
																		</Link>
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

			<LoginPopUp
				showLogin={showLogin}
				setShowLogin={setShowLogin}
			/>
		</>
	);
};

export default Header;