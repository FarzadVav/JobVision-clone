type LinkTypes = {
	title: string;
	link: string;
}

interface MenuTypes extends LinkTypes {
	query2: string;
	subLinks: LinkTypes[]
}

type MegaMenusTypes = {
	id: string;
	title: string;
	query: string;
	links: MenuTypes[]
}

export default MegaMenusTypes