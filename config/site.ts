export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "projectX",
	description: "store your files and prove with zkps",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/manoranjith-shankar/projectx",
		twitter: "https://twitter.com/getnextui",
		docs: "https://projectx.0xc0d3rs.tech",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
