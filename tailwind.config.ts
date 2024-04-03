import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				black: "#202020",
				blue: "#0c5ae9",
				gray: "#84919e",
				sky: "#00b0f0",
				white: "#fff",
			},
			fontFamily: {
				sans: [
					"var(--font-inter)",
					"Helvetica Neue",
					"Arial",
					"var(--font-noto-sans-jp)",
					"Hiragino Kaku Gothic ProN",
					"Hiragino Sans",
					"Meiryo",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
export default config;
