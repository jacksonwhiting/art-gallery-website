/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			textColor: {
				skin: {
					"hdg-pri": "#151515",
					"content-pri": "#444444",
					"content-invert": "#ffffff",
					"accent-pri": "#D5966C",
				},
			},
			backgroundColor: {
				skin: {
					"canvas-pri": "#ffffff",
					"fill-pri": "#151515",
					"fill-sec": "#D5966C",
				},
			},
			fontFamily: {
				fontFamilyShoulders: ["Big Shoulders Dispaly", cursive],
				fontFamilyOutfit: ["outfit", sans - serif],
			},
			fontSize: {
				hdgXL: ["96px", "88px"],
				hdgL: ["70px", "70px"],
				hdgM: ["60", "50px"],
				hdgS: ["36", "36"],
				bodyM: ["22px", "32px"],
				bodyS: ["18px", "28px"],
			},
		},
	},
	plugins: [],
};
