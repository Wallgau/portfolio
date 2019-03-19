import bubblegame from './images/bubblegame.jpg';
import trigame from './images/trigame1.jpg';
import triviagame from './images/triviagame.jpg';
import babyname from './images/babyname.jpg';
import boxoffice from './images/boxoffice.jpg';
import beachhouse from './images/beachouse.jpg';

const projectsData = [
	{
		name: 'bubblegame',
		imgSrc: bubblegame,
		imgAlt: 'my first game in javascript',
		header: 'Bubble Game',
		sentence: 'Are you fast enough!',
		buttonLink: 'https://wallgau.github.io/project_js/',
		buttonText: 'Play',
		description: 'Try to turn yellow to blue as fast as possible. This game is build in JS, A decount of 20sec allows the users to change color of balls (by changing class) and turn a blue one to yellow randomly,more fast you are more your score will be high but be careful each time you click on the wrong ball you lost 1point. Be fast and focus'
	},
	{
		name: 'trigame',
		imgSrc: trigame,
		imgAlt: 'memory game',
		header: 'TrigoGame',
		sentence: 'Test your memory!',
		buttonLink: 'https://wallgau.github.io/olfa-maslah-trigo-game-project3/',
		buttonText: 'Play',
		description: 'This jquery game is organise in 2 part, first part you can take your time to memorise the Unit circle, when you ready press play. One value will be remove randomly, and a multiple choice is propose to you, a feedback will confirm if your answer is right or wrong, press play to continue to practice your memory'
	},
	{
		name: 'triviagame',
		imgSrc: triviagame,
		imgAlt: 'maths & computer test',
		header: 'Triviagame',
		sentence: 'Test your knowledge!',
		buttonLink: ' https://markcortejosolfamaslah-cryptoteam.github.io/apiProject4TriviaFun/',
		buttonText: 'Play',
		description: 'This game is build with jquery to test your knowledge in Computer and Maths. It uses an API to display question randomly, 10 questions will be ask, you have 50% chance to get the correct answer because is a true or false option, at the end you get your score and you can play again. The next play will display differents questions from the previous one.'

	},
	{
		name: 'babyName',
		imgSrc: babyname,
		imgAlt: 'Find your Baby Name',
		header: 'Baby Name',
		sentence: 'Test your knowledge!',
		buttonLink: 'https://wallgau.github.io/API_BabyNames/',
		buttonText: 'Test it',
		description: 'This site uses an API to provide Baby Names suggestions by gender, you choose boy or girl and click to get a random suggestion, if you are not convience by this name, click again to get another one. Also you can check if a name is traditional, timeless or original '

	},
	{
		name: 'boxoffice',
		imgSrc: boxoffice,
		imgAlt: 'Find the top 10 of the summer',
		header: 'Box Office',
		sentence: `Predict the summer's top 10`,
		buttonLink: 'https://auth-test-d2fa2.firebaseapp.com/',
		buttonText: 'Predict',
		description: `The Box Office Boffo is a React app, using API and firebase. Movies from the API are display on the page, you can create your list of the summer's movies top 10 and compare your list to others. Firebase store the lists and used to display them on the page.`

	},
	{
		name: 'beachhouse',
		imgSrc: beachhouse,
		imgAlt: 'Find the top 10 of the summer',
		header: 'Beach House',
		sentence: 'You are looking for a Beach House',
		buttonLink: 'https://wallgau.github.io/olfaMaslahBootCampProject2/',
		buttonText: 'Beach',
		description: 'The site is build with html and CSS using SASS, a beautiful site design by Fatima Gueye. multiples pages are provide here.'

	},
]
export default projectsData;


