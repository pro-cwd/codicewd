/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		colors: {
			brand: '#3590D0',
			black: '#000',
			white: '#fff',
			gray: '#7C7C7C',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			'gray-light': '#d3dce6',
		},
		fontFamily: {
			plus: ['Plus Jakarta Sans', ..._fontFamily.sans],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'med-partner': "url('/src/public/images/video-image.png')",
			},
		},
	},
};
