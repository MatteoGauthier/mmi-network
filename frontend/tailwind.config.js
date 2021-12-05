const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			boxShadow: {
				small: "0 5px 10px rgba(0, 0, 0, 0.12)",
				medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},

			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.900"),
            p : {
              marginTop: ".5em",
              marginBottom: ".5em",
            },
						h2: {
							fontWeight: "700",
							letterSpacing: theme("letterSpacing.tight"),
							color: theme("colors.gray.900"),
						},
						h3: {
							fontWeight: "600",
							color: theme("colors.gray.900"),
						},
						"ol li:before": {
							fontWeight: "600",
							color: theme("colors.gray.500"),
						},
						"ul li:before": {
							backgroundColor: theme("colors.gray.400"),
						},
						code: {
							color: theme("colors.gray.900"),
						},
						a: {
							color: theme("colors.gray.900"),
							fontWeight: 400,
						},
						pre: {
							color: theme("colors.white"),
							backgroundColor: theme("colors.gray.800"),
						},
						blockquote: {
							color: theme("colors.gray.900"),
							borderLeftColor: theme("colors.gray.200"),
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
	presets: [
		require('tw-utils/font/satoshi')
	]
}
