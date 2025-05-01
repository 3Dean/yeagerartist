import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	projects: {
		path: "/projects",
		title: "projects",
	},
	/* blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	media: {
		path: "/media",
		title: "media",
	}, */
	about: {
		path: "/about",
		title: "about",
	},
};

export const SITE = {
	// Your site's detail?
	name: "Dean Yeager",
	title: "Dean Yeager",
	description: "Designer, Animator, and Illustrator",
	url: "https:yeagerartist.net",
	githubUrl: "#",
	listDrafts: true,
	image:
		"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "", // Example: FredKSchott
	// Author: Image external source
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"Designer, Animator, and Illustrator blending creativity with strategic design to inspire and engage audiences.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
