import {ReactNode, useContext, MouseEvent} from 'react'
import {useNavigate} from 'react-router-dom'

import LoadingContext from "../context/LoadingContext.tsx";

type CustomNavLinkProps = {
	path?: string,
	activeClassName?: string,
	conditionForActive?: boolean,
	conditionForAlwaysActive?: boolean,
	className?: string,
	scrollToTop?: boolean,
	clickHandler?: () => void,
	children: ReactNode
}
const CustomNavLink = ({
	path = '',
	activeClassName = '',
	conditionForActive = true,
	conditionForAlwaysActive = false,
	className = '',
	scrollToTop = true,
	clickHandler = () => {},
	children
}: CustomNavLinkProps) => {
	const loadingContext = useContext(LoadingContext)
	const to = useNavigate()

	const myLinkClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		clickHandler()
		scrollToTop && window.scrollTo(0, 0)
		if (path !== location.pathname) {
			loadingContext.setPageLoadingHandler(true)
			to(path)
		}
	}

	return (
		<a
			className={`${
				(
					(path === location.pathname && activeClassName && conditionForActive) || conditionForAlwaysActive
				)
					? activeClassName
					: className
			}
        cursor-pointer select-none`}
			onClick={myLinkClickHandler}
		>
			{children}
		</a>
	)
}

export default CustomNavLink