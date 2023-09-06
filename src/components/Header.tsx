import CustomNavLink from './CustomNavLink.tsx';
import {useState} from "react";

const Header = () => {
	const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false)

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
					<menu className={`h-full flex justify-center items-center px-3`}>
						<svg className="stroke-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								 strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
						</svg>
					</menu>
					<CustomNavLink
						className={'nav-link'}
					>
						<img

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

			<div className={`current-height bg-black bg-opacity-25 backdrop-blur-sm pb-9 absolute
				top-[4.5rem] left-0 right-0 ${showMegaMenu ? 'opacity-100' : 'opacity-0'}`}>
				<div className={`bg-white w-11/12 h-full mx-auto rounded-b-xl pb-3
					relative duration-300 ${showMegaMenu ? 'translate-0' : '-translate-y-9 scale-x-[0.975]'}`}>
					<div className={`bg-slate-300 w-12 h-1 rounded-full absolute left-1/2 bottom-1.5 -translate-x-1/2`}>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;