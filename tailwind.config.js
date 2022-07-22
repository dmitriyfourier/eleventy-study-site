module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Open Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		extend: {
			colors: {
				'ws-link': {
					main:'#0877db',
					main_u: 'rgba(43, 154, 255, 0.25)',
					hover: '#2b9aff',
					hover_u: 'rgba(43, 154, 255, 0.25)',
					focus: '#2b9aff',
					focus_u: 'rgba(43, 154, 255, 0.25);',
					active: '#bc4df8',
					active_u: 'rgba(188, 77, 248, 0.25)',
					visited:'#9108db',
					visited_u:'rgba(145, 8, 219, 0.25)',

				},
			}
		},
	},
	plugins: [],
	content: ['src/**/*.njk', 'src/**/*.js']
}
