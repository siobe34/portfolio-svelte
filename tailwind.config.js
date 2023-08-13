/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: 'rgb(var(--bg) / <alpha-value>)',
				border: 'rgb(var(--border) / <alpha-value>)',
				onBg: 'rgb(var(--onBg) / <alpha-value>)',
				primary: 'rgb(var(--primary) / <alpha-value>)',
				onPrim: 'rgb(var(--onPrim) / <alpha-value>)',
				secondary: 'rgb(var(--secondary) / <alpha-value>)',
				onSec: 'rgb(var(--onSec) / <alpha-value>)'
			}
		}
	},
	plugins: []
};
