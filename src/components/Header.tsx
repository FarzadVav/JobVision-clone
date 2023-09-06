import CustomNavLink from "./CustomNavLink.tsx";

const Header = () => {
	return (
		<header className={`w-full h-20`}>
			<div className="container w-full h-full flex justify-between items-center">
				<nav className={'h-full'}>
					<ul className={'h-full'}>
						<li className={'h-full'}>
							<CustomNavLink>
								فرصت های شغلی
							</CustomNavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;