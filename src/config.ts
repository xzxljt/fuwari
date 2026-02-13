import type {
	AntiLeechConfig,
	ExpressiveCodeConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "TianTian Blog",
	subtitle: "分享网络技术、服务器部署、Unity开发、AI技术应用与原理",
	description:
		"分享网络技术、服务器部署、Unity开发、AI技术应用与原理、作者为TianTian",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 361, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://image.cloudrunmax.top/random", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://image.cloudrunmax.top/random", // 优先使用新 API
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://img.312522.xyz/file/1770951586899_avatar.webp", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	apps: [
		{
			name: "Temp Email",
			url: "https://mali.312522.xyz/",
			image: "https://mali.312522.xyz/logo.png",
			description: "实用服务",
			external: true,
		},
		{
			name: "JianKang",
			url: "https://jk.312522.xyz/",
			image: "https://img.312522.xyz/file/1770953614467_logo.png",
			description: "域名监控",
			external: true,
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.Apps,
		LinkPreset.Donate,
		LinkPreset.Monitor,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "TianTian",
	bio: ["爱我所爱，我们是彼此永远的动力"],
	links: [],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

//图片回退
export const imageFallbackConfig: ImageFallbackConfig = {
	enable: true,
	originalDomain: "image.cloudrunmax.top", // 主力图床
	fallbackDomain: "img.micostar.cc", // 备用图床
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.312522.xyz",
	shareId: "X9ZZZ5l2xErS44Rc",
	timezone: "Asia/Shanghai",
};

// 防盗链/域名保护配置
export const antiLeechConfig: AntiLeechConfig = {
	enable: true,
	officialSites: [{ url: "https://blog.312522.xyz", name: "主站" }],
	debug: false,
	warningTitle: "⚠️ 域名安全警告",
	warningMessage:
		"您可能正在访问非官方网站，存在安全风险！建议跳转到官方网站。",
};

export const googleAnalyticsConfig = {
	enable: true,
	measurementId: "G-68S9RLWRP0",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
