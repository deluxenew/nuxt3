import pugPlugin from "vite-plugin-pug"
import { fileURLToPath } from "url"
// @ts-ignore
import vitePluginVuePugIndentFix from "vite-plugin-vue-pug-indent-fix"

export default defineNuxtConfig({
	css: [
		"@/assets/main.scss",
	],
	tailwindcss: {
		// @ts-ignore
		content: [
			"/components/**/*.{vue,js,ts}",
			"/layouts/**/*.vue",
			"/pages/**/*.vue",
			"/composables/**/*.{js,ts}",
			"/plugins/**/*.{js,ts}",
			"/App.{js,ts,vue}",
			"/app.{js,ts,vue}",
			"/Error.{js,ts,vue}",
			"/error.{js,ts,vue}"
		],
		theme: {
			screens: {
				mobile: "320px",
				tablet: "640px",
				laptop: "1024px",
				desktop: "1280px",
			},
			spacing: {
				"1": "4px",
				"2": "8px",
				"3": "16px",
				"4": "24px",
				"5": "32px",
				"6": "48px",
			},
			fontSize: {
				sm: ["14px", "20px"],
				base: ["16px", "24px"],
				lg: ["20px", "28px"],
				xl: ["24px", "32px"],
			},
			extend: {
				fontFamily: {
					"sans": ["Proxima Nova"],
				},
				spacing: {
					"0": "0px",
				},
				width: {
					"48": "48px",
					"24": "24px",
					"16": "16px",
					"0": "0px",
					"50": "50%",
					"25": "25%"
				},
				height: {
					"48": "48px",
					"50": "50px",
				}
			},
		},
	},
	pages: true,
	vite: {
		plugins: [pugPlugin(), vitePluginVuePugIndentFix()],
	},
	modules: [
		"@nuxtjs/tailwindcss",
		["@pinia/nuxt", {
			autoImports: [
				"defineStore", "storeToRefs", "mapActions",
			],
		}],
	],
	alias: {
		"SRC": fileURLToPath(new URL("./", import.meta.url)),
		"COMPONENTS": fileURLToPath(new URL("./components", import.meta.url)),
	}
})
