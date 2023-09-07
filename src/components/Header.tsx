import CustomNavLink from './CustomNavLink.tsx';
import {useState} from "react";
import tokenGenerator from "../utils/tokenGenerator.ts";

interface LinkTypes {
	title: string;
	link: string;
}

interface MenuTypes extends LinkTypes {
	subLinks: LinkTypes[]
}

type MegaMenusTypes = {
	title: string,
	links: MenuTypes[]
}

const megaMenus: MegaMenusTypes[] = [
	{
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
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					}
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
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					}
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
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					}
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
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					}
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
						title: 'برنامه نویسسی موبایل',
						link: 'mobile-programming'
					}
				]
			},
			{
				title: 'برنامه نویسی و توسعه نرم افزار',
				link: 'programming',
				subLinks: []
			},
		]
	},
	{
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
					}
				]
			},
			{
				title: 'تهران',
				link: 'tehran',
				subLinks: []
			}
		]
	},
	{
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

	const megaMenuButtonLinkHandler = (link: string) => {
		console.log(link)
	}

	return (
		<>
			<header className={`light-shadow bg-white w-full h-[4.5rem] sticky top-0 z-50`}>
				<div className={`container w-full h-full justify-between items-center hidden lg:flex`}>
					<nav className={'h-full flex'}>
						<ul className={'h-full flex'}>
							<li
								className={'h-full'}
								onClick={() => setShowMegaMenu(prev => !prev)}
							>
								<CustomNavLink
									className={`nav-link group ${showMegaMenu && 'text-jv-primary'}`}
								>
									فرصت های شغلی
									<svg
										className={`${showMegaMenu ? 'shadow-jv-primary -scale-y-100' : 'stroke-jv-black'}
											group-hover:stroke-jv-primary w-4 h-4 duration-200`}
										xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
									</svg>
								</CustomNavLink>
							</li>
							<li className={'h-full'}>
								<CustomNavLink
									className={'nav-link'}
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
							className={'nav-link mr-7'}
						>
							بخش کارفرمایان
						</CustomNavLink>
						<CustomNavLink
							className={`nav-link pr-5 mr-5 relative before:absolute before:w-[1px] before:h-[60%] before:right-0
							before:content-[''] before:bg-slate-200`}
						>
							<img
								src="/images/logo.svg"
								alt="لوگوی جاب ویژن"
							/>
						</CustomNavLink>
					</div>
				</div>
				<div className={`bg-jv-primary w-full h-full flex justify-between items-center px-6 lg:hidden`}>
					<menu
						className={`h-full flex justify-center items-center px-3`}
						onClick={() => setShowMobileMenu(prev => !prev)}
					>
						<svg className="stroke-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								 strokeWidth={1.5} stroke="currentColor">
							{
								showMobileMenu ? (
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
								)
							}
						</svg>
					</menu>
					{
						showMobileMenu ? (
							<CustomNavLink
								className={`btn btn-danger`}
							>
								گزارش کارنامه بازار کار
							</CustomNavLink>
						) : (
							<>
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
							</>
						)
					}
				</div>
			</header>

			<div className={`current-height bg-black bg-opacity-25 backdrop-blur-sm pb-9 fixed
				top-[4.5rem] left-0 right-0 ${showMegaMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
				<div className={`bg-white w-11/12 h-full mx-auto rounded-b-xl flex flex-col
					relative duration-300 ${showMegaMenu ? 'translate-0' : '-translate-y-9 scale-x-[0.975]'}`}>
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
									<ul className={`bg-white columns-5 absolute top-16 bottom-0 left-0 right-0 cursor-default p-3
										rounded-b-xl overflow-y-auto duration-0 opacity-0 invisible ${showMegaMenu && 'group-hover:visible group-hover:opacity-100'}`}>
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
																				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
																						 strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1.5">
																					<path strokeLinecap="round" strokeLinejoin="round"
																								d="M15.75 19.5L8.25 12l7.5-7.5"/>
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
							<br/>
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
		</>
	);
};

export default Header;