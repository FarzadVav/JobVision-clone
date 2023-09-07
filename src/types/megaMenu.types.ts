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

export default MegaMenusTypes