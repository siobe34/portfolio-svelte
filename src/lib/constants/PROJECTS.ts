import ledgerImg from '$lib/images/ledger.png';
import landmarksImg from '$lib/images/landmarks.png';
import chessImg from '$lib/images/10kchess.png';
import todoImg from '$lib/images/todo.png';
import alarmImg from '$lib/images/alarm.png';
import portfolioV1 from '$lib/images/portfoliov1.png';

export const PROJECTS = [
	{
		name: 'Ledger',
		description:
			'A tool to manage your budget on a transactional level with helpful charts to see historical net worth, monthly categorical spending, and search personal transactions with a user-friendly interface.',
		imgSrc: ledgerImg,
		url: 'https://ledgerr.vercel.app/demo',
		action: 'Try the Demo',
		stack: ['typescript', 'react', 'nextjs', 'tailwind', 'postgresql', 'supabase', 'vercel']
	},
	{
		name: 'Landmarks',
		description:
			"Landmarks is a world map of various points of interest with a brief description about each point. It's an interactive way to learn about interesting geography, archeological finds, and occasionally some random history.",
		imgSrc: landmarksImg,
		url: 'https://landmarkss.vercel.app',
		action: 'Check out the Map',
		stack: ['typescript', 'react', 'nextjs', 'tailwind', 'mongodb', 'google', 'vercel']
	},
	{
		name: '10K Chess',
		description:
			'Practice chess puzzles taken from the public Lichess API. The idea is that memorizing positions from games played by humans improves intuition in your own games.',
		imgSrc: chessImg,
		url: 'https://10kchess.vercel.app',
		action: 'Get better at Chess',
		stack: ['typescript', 'react', 'tailwind', 'chessjs', 'vercel']
	},
	{
		name: 'Alarm Mobile Application',
		description:
			'A cross platform mobile alarm app that forces you to wake up with a variety of challenges to turn off the alarm.',
		imgSrc: alarmImg,
		url: 'https://github.com/siobe34/alarm-app',
		action: 'View source code',
		stack: ['typescript', 'reactNative', 'expo']
	},
	{
		name: 'To-do Mobile Application',
		description:
			'A minimal to-do list made with Flutter. Add To-do Items on the main page with the option to mark Items as complete, delete them, or move them to Archives.',
		imgSrc: todoImg,
		url: 'https://github.com/siobe34/todo-flutter',
		action: 'View source code',
		stack: ['flutter', 'dart', 'material', 'android']
	},
	{
		name: 'Portfolio v1',
		description: 'The first version of my personal portfolio.',
		imgSrc: portfolioV1,
		url: 'https://v1ibadrashid.vercel.app',
		action: 'See older version of my portfolio',
		stack: ['typescript', 'react', 'styled', 'reactrouter', 'vercel']
	}
] as const;

export const brandInfo = {
	javascript: {
		name: 'JavaScript',
		color: '#000',
		backgroundColor: '#f7e018'
	},
	typescript: {
		name: 'TypeScript',
		color: '#fff',
		backgroundColor: '#2d79c7'
	},
	react: {
		name: 'react',
		color: '#000',
		backgroundColor: '#61dafb'
	},
	reactNative: {
		name: 'react native',
		color: '#000',
		backgroundColor: '#61dafb'
	},
	nextjs: {
		name: 'Next JS',
		color: '#fff',
		backgroundColor: '#000'
	},
	nodejs: {
		name: 'Node JS',
		color: '#000',
		backgroundColor: '#68a063'
	},
	mongodb: {
		name: 'MongoDB',
		color: '#000',
		backgroundColor: '#449945'
	},
	postgresql: {
		name: 'PostgreSQL',
		color: '#fff',
		backgroundColor: '#336791'
	},
	nginx: {
		name: 'NGINX',
		color: '#000',
		backgroundColor: '#01992b'
	},
	aws: {
		name: 'AWS',
		color: '#000',
		backgroundColor: '#ff7e00'
	},
	python: {
		name: 'Python',
		color: '#fff',
		backgroundColor: '#414bb2'
	},
	flask: {
		name: 'Flask',
		color: '#fff',
		backgroundColor: '#414bb2'
	},
	mysql: {
		name: 'MySQL',
		color: '#000',
		backgroundColor: '#f0902d'
	},
	mariadb: {
		name: 'MariaDB',
		color: '#fff',
		backgroundColor: '#8a4810'
	},
	github: {
		name: 'GitHub Pages',
		color: '#fff',
		backgroundColor: '#000'
	},
	tailwind: {
		name: 'Tailwind CSS',
		color: '#000',
		backgroundColor: '#38bdf8'
	},
	chessjs: {
		name: 'Chess.js',
		color: '#fff',
		backgroundColor: '#009981'
	},
	styled: {
		name: 'Styled Components',
		color: '#fff',
		backgroundColor: '#ff69b4'
	},
	google: {
		name: 'Google Maps',
		color: '#fff',
		backgroundColor: '#00b757'
	},
	reactrouter: {
		name: 'react Router',
		color: '#fff',
		backgroundColor: '#ff0000'
	},
	expo: {
		name: 'expo',
		color: '#fff',
		backgroundColor: '#000'
	},
	vercel: {
		name: 'Vercel',
		color: '#fff',
		backgroundColor: '#000'
	},
	dart: {
		name: 'Dart',
		color: '#fff',
		backgroundColor: '#00499F'
	},
	flutter: {
		name: 'Flutter',
		color: '#000',
		backgroundColor: '#00C0FD'
	},
	material: {
		name: 'Material UI',
		color: '#fff',
		backgroundColor: '#007FFF'
	},
	android: {
		name: 'Android Studio',
		color: '#000',
		backgroundColor: '#3ddc84'
	},
	supabase: {
		name: 'supabase',
		color: '#fff',
		backgroundColor: '#08A46F'
	}
};
