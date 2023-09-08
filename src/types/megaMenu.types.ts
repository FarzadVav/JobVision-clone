interface LinkTypes {
	title: string;
	link: string;
}

interface MenuTypes extends LinkTypes {
	subLinks: LinkTypes[]
}

type MegaMenusTypes = {
	id: string,
	title: string,
	links: MenuTypes[]
}

export default MegaMenusTypes