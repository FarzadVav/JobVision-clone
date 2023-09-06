import CustomNavLink from './CustomNavLink.tsx';

const Header = () => {
	return (
		<header className={`light-shadow bg-white w-full h-[4.5rem] sticky top-0 z-50`}>
			<div className={`container w-full h-full flex justify-between items-center`}>
				<nav className={'h-full flex'}>
					<ul className={'h-full flex'}>
						<li className={'h-full'}>
							<CustomNavLink
								className={'nav-link mega-nav-link'}
							>
								فرصت های شغلی
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
					</ul>
					<div className={`h-full flex justify-center items-center mr-8`}>
						<CustomNavLink
							className={`badge badge-danger`}
						>
							گزارش کارنامه بازار کار
						</CustomNavLink>
					</div>
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
		</header>
	);
};

export default Header;