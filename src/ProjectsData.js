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
		description: 'This game is built in JS. Try to turn the yellow balls to blue as fast as possible. Users have 20 seconds to change all the yellow balls to blue. The faster you are, the higher your score will be. But be careful, each time you click on the wrong ball, you lose one point. Be fast and focus!'
	},
	{
		name: 'trigame',
		imgSrc: trigame,
		imgAlt: 'memory game',
		header: 'TrigoGame',
		sentence: 'Test your memory!',
		buttonLink: 'https://wallgau.github.io/olfa-maslah-trigo-game-project3/',
		buttonText: 'Play',
		description: 'This jQuery game is organised in two parts. In the first part you can take your time to memorise the unit circle, and when you are ready you press play. One value will be removed randomly, and a multiple choice will be proposed to you. A response will confirm if your answer is right or wrong. Press play to continue to test your memory!'
	},
	{
		name: 'triviagame',
		imgSrc: triviagame,
		imgAlt: 'maths & computer test',
		header: 'Triviagame',
		sentence: 'Test your knowledge!',
		buttonLink: ' https://markcortejosolfamaslah-cryptoteam.github.io/apiProject4TriviaFun/',
		buttonText: 'Play',
		description: 'This game is built with jQuery to test your knowledge of computers and maths. It uses an API to display questions randomly. Ten true or false questions will be asked, and you have a 50% chance to get the correct answer., At the end you get your score and you can play again. The next round will display different questions from the previous one.'

	},
	{
		name: 'babyName',
		imgSrc: babyname,
		imgAlt: 'Find your Baby Name',
		header: 'Baby Name',
		sentence: 'Test your knowledge!',
		buttonLink: 'https://wallgau.github.io/API_BabyNames/',
		buttonText: 'Test it',
		description: 'This site uses an API to provide baby name suggestions by gender. You can choose boy or girl and click to get a random suggestion. If you are not satisfied by this name, click again to get another one. You can also check if a name is traditional, timeless, or original.  '

	},
	{
		name: 'boxoffice',
		imgSrc: boxoffice,
		imgAlt: 'Find the top 10 of the summer',
		header: 'Box Office',
		sentence: `Predict the summer's top 10`,
		buttonLink: 'https://auth-test-d2fa2.firebaseapp.com/',
		buttonText: 'Predict',
		description: `The Box Office Boffo is a React app, using API and Firebase. Movies from the API are displayed on the page. You can create your list of the top 10 summers movies and compare your list to others. Firebase stores the lists and is used to display them on the page.`

	},
	{
		name: 'beachhouse',
		imgSrc: beachhouse,
		imgAlt: 'Find the top 10 of the summer',
		header: 'Beach House',
		sentence: 'You are looking for a Beach House',
		buttonLink: 'https://wallgau.github.io/olfaMaslahBootCampProject2/',
		buttonText: 'Beach',
		description: 'This site is built with HTML and CSS using Sass, a beautiful multi-page site designed by Fatima Gueye.'

	},
]
export default projectsData;


