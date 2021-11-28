// The original array of students.
const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
];

// An array containing the students that didnt publish pictures. I left it inside the document even though it was never used.
const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];

// Setting the amount of guesses, right answers, time passed and the highscore to zero.
let amountOfGuessesMade = 0;
let amountOfTotalGuesses = students.length;
let rightAnswers = 0;
let highScore = 0;
let bestTime = 0;
let timePassed = 1;

// Calculating how many minutes and seconds it has took for the user to get through the round.
let minutes = Math.floor(timePassed / 60);
let seconds = timePassed % 60;

// Declaring variables for storage of the best result.
let bestMinutes = Math.floor(bestTime / 60);
let bestSeconds = bestTime % 60;

// Setting an empty array that contains all given answers.
let givenAnswersArr = [];

// Connection to the DOM through queryselection.
const startButtonContainer = document.querySelector('#startButtonContainer');
const heroTxt = document.querySelector('.hero-txt');
const playingSectionContainer = document.querySelector('.playingSectionContainer');
const gameInstructions = document.querySelector('.gameInstructions');
const studentImage = document.querySelector('#studentImage');
const guessingSection = document.querySelector('#guessingSection');
const highScoreContainer = document.querySelector('#highScoreContainer');
const resultDisplay = document.querySelector('#resultDisplay');
const correctionInstructions = document.querySelector('.correctionInstructions');
const correctionContainer = document.querySelector('.correctionContainer');
const winningMessage = document.querySelector('.winningMessage');

// Creating paragraphs and appending them to the results display.
const scoreParagraph = document.createElement('P');
resultDisplay.appendChild(scoreParagraph);
const highScoreParagraph = document.createElement('P');
resultDisplay.appendChild(highScoreParagraph);
const timeParagraph = document.createElement('P');
resultDisplay.appendChild(timeParagraph);
const bestTimeParagraph = document.createElement('P');
resultDisplay.appendChild(bestTimeParagraph);

// Function that adds 1 to the seconds variable.
function incrementSeconds() {
	timePassed += 1;
}

// Using the setInterval method and passing in the incrementSeconds function aswell as 1000ms in interval, so that a 1 is added to the seconds variable, every 1000ms.
let interval = setInterval(incrementSeconds, 1000);

// Giving the highscore container a bootstrap class of d-none so that it wont be present at the start.
highScoreContainer.classList.add('d-none');
// Giving the highscore paragraph & score paragraph text-align-center through bootstrap class text-center.
highScoreParagraph.classList.add('text-center');
scoreParagraph.classList.add('text-center');
timeParagraph.classList.add('text-center');
bestTimeParagraph.classList.add('text-center');

// Creating element 'button' and appending it to the startbutton container.
const startButton = document.createElement("BUTTON");
startButtonContainer.appendChild(startButton);
// Setting classes to the startbutton for both aesthetic and functional purposes.
startButton.setAttribute('class', 'startButton btn btn-lg btn-light w-50');
// Adding the button-text instructing the user.
startButton.innerHTML = 'Start The Game By Clicking The Button!';

// Adding event listener to the start button in order to initialize the game.
startButton.addEventListener('click', e => {
	// if the click-target contains the class startButton.
	if (e.target.classList.contains('startButton')) {
		// Remove the button container by adding the built in bootstrap class 'd-none'.
		startButtonContainer.setAttribute('class', 'd-none');
		// Making sure the Hero text is displayed when the button is clicked.
		heroTxt.classList.remove('d-none');
		// Remove the already previously set class of d-none off of the gameDisplayContainer.
		playingSectionContainer.classList.remove("d-none");
		// Remove the already previously set class of d-none off of the highScoreContainer.
		highScoreContainer.classList.remove('d-none');
		// Remove the already previously set class of d-none off of the result section.
		resultDisplay.classList.remove("d-none");
		// Initializing the game.
		startRound();
	}
})

// Fischer-Yates Shuffle - used for shuffling arrays.
const shuffleArrayFunction = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

	// Initially shuffling the students array so that the first game of every new session doesnt look exactly the same.
	shuffleArrayFunction(students);

	// Function containing the game sequence logic.
	const startRound = () => {
	// Taking the first 4 students out of the students array and placing them into variable studentRound.
	let studentRound = students.slice(0, 4);
	// Extracting the first student of the students array every round, and inserting him/her to the end of the students array.
	s = students.shift();
	students.push(s);
	// Assigning the student at index 0 of the students array to being the current student in question.
	currentStudent = students[0];
	// Extracting the URL from the current student and placing it into the student image's src.
	studentImage.setAttribute('src', currentStudent.image);
	// Shuffling the order that the 4 students come in so that the right answer isn't always in the same spot.
	shuffleArrayFunction(studentRound);
	// Resetting the contents of the buttons so that 4 new buttons are created at every click event and in turn REPLACING the 4 old buttons instead of 4 buttons just being added to the pile making it 8, 12, 16 etc...
	guessingSection.innerHTML = "";
	// Mapping out the names of the chosen 4 students and placing them in 'studentRoundNames'.
	let studentRoundNames = studentRound.map((student => student.name));
	// Iterating through each student name and adding a button for each one, with classes to make them look better.
	studentRoundNames.forEach(studentName => {
		guessingSection.innerHTML += `<button class = "guessButton btn btn-lg btn-light">${studentName}</button>`
	})
}

// Adding an event listener for the whole guessing section.
guessingSection.addEventListener('click', e => {
	// Making sure that the code only executes by hitting the intented target (the button), and not anything else within the container.
	if (e.target.tagName === ('BUTTON')) {
		// Pushing the current student object into the given answers array.
		givenAnswersArr.push(currentStudent);
		// Adding a conditional which checks if the user gets the answer right.
		if (e.target.innerText === currentStudent.name) {
			currentStudent.answer = true;
			// Initializing new round.
			startRound();
			// Increasing the amount of right answers by 1.
			rightAnswers++;
			// Increasing the amount of total guesses by 1.
			amountOfGuessesMade++;
		} 
		// Adding a conditional which checks if the user gets the answer wrong.
		else {
			currentStudent.answer = false;
			// Initializing new round.
			startRound();
			// Increasing the amount of total guesses by 1.
			amountOfGuessesMade++;
		}
	}

	// Filtering out the wrong answers found in the given answers array and putting them in the empty 'filteredArray' array.
	let filteredArray = givenAnswersArr.filter((studentObject) => {
		if (studentObject.answer === false)
		return studentObject;
	})

	// Checking for when the game is supposed to finish
	if (amountOfGuessesMade === students.length) {
	// Stopping the setInterval from counting.
	clearInterval(interval);
	// Removing the margin from in between the image and the buttons, when the game is over, in order to match the stats menu with the image. 
	guessingSection.classList.remove('mt-3');
	// Printing out the filtered out wrong answers to the DOM and styling the containers.
	filteredArray.forEach(wrongAnswer => {
	correctionContainer.innerHTML += 
		`<div class="correctionContainer d-flex flex-column mt-2">
		<h5 class="text-center" style="color:green">${wrongAnswer.name}</h5>
		<i class="fas fa-arrow-down text-center"></i>
		<img src='${wrongAnswer.image}' height="200px" style='border: 10px solid red; margin: 10px; display:inline;'>
		</img>
		</div>`
	}) 

	// Making it so that the correctionInstructions and correctioncontainer appear.
	correctionInstructions.classList.remove('d-none')
	correctionContainer.classList.remove('d-none');
	// Making so that the buttons dissapear.
	guessingSection.innerHTML = '';
	// Changing the picture to an image that says game over.
	studentImage.removeAttribute('src', currentStudent);
	studentImage.setAttribute('src', 'assets/images/gameOverImage.jpg');
	// Removing the image header once the first game is finished.
	gameInstructions.classList.add('d-none');

	// Adding a conditional that checks if the amount of right answers is larger than the current highscore.
	if (rightAnswers > highScore) {
		// Each time the amount of right answers exceed the highscore number, reassigns the highscore to the new amount of right answers.
		highScore = rightAnswers;
		// Replacing the old highscore paragraph with the new one.
		highScoreParagraph.innerHTML = "";
		highScoreParagraph.innerHTML += `Nice! New highscore: ${highScore}/${amountOfGuessesMade} correct answers!`;
	} 
	// Checking for every time that a new highscore isn't reached.
	else if (rightAnswers < highScore){
		// Telling the user that their highscore is still the same as their previous one.
		highScoreParagraph.innerHTML = "";
		highScoreParagraph.innerHTML += `Highscore is still: ${highScore}/${amountOfGuessesMade} correct answers.`;
	}
	// if the user gets all of the guesses right, display a winning message instead of a correction instruction.
	if (rightAnswers === amountOfGuessesMade){
		winningMessage.classList.remove('d-none');
		correctionInstructions.classList.add('d-none');

		minutes = Math.floor(timePassed / 60);
		seconds = timePassed % 60;
		console.log(timePassed)

		console.log(timePassed)
		timeParagraph.innerHTML = `Time: ${minutes}m ${seconds}s`;
		if (timePassed > 0 & bestTime === 0) {
			bestMinutes = minutes;
			bestSeconds = seconds;
			bestTime = timePassed;
			bestTimeParagraph.innerHTML = ``;
			bestTimeParagraph.innerHTML = `New highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s!`	

		}
		if (bestTime > timePassed) {
			bestMinutes = minutes;
			bestSeconds = seconds;		
			bestTime = timePassed;
			bestTimeParagraph.innerHTML = ``;
			bestTimeParagraph.innerHTML = `New highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s!`	
		}
	}
	if (rightAnswers === amountOfGuessesMade & highScore === amountOfGuessesMade){
		highScoreParagraph.innerHTML = '';
	}
	// Telling the user how many points he/she scored.
	scoreParagraph.innerHTML = (`Result: ${rightAnswers}/${amountOfGuessesMade} correct answers!`);
}
})

// Adding a click-event listener for the button in the results section.
resultDisplay.addEventListener('click', e => {
	// Checking if the click-target is on the button.
	if (e.target.tagName === ('BUTTON')) {
	// Creating more generic best time message, while the new game is running.
	// bestTimeParagraph.innerHTML = `Best time: ${bestMinutes}m ${bestSeconds}s`;
	// Resetting the time passed so that a new count can begin.
	seconds = 0;
	minutes = 0;
	timePassed = 1;

	// Adding a clearInterval prior to starting the count again. This fixed a bug which entailed there being a possibility for interval counters to stack, if user mistakenly clicked the new game button twice. Adding a clearInterval before initializing a new count fixed this problem.
	clearInterval(interval);
	// Function that adds a 1 to the seconds variable and prints a paragraph out into the results section.
	function incrementSeconds() {
		console.log(timePassed)
		timePassed += 1;
	}

	// Using the setInterval method and passing in the incrementSeconds function aswell as 1000ms in interval, so that a 1 is added to the seconds variable, every 1000ms.
	interval = setInterval(incrementSeconds, 1000);

	// Clearing the timeParagraph & bestTimeParagraph on reset.
	timeParagraph.innerHTML = '';
	bestTimeParagraph.innerHTML = '';

	// Returning the display:none to the winningMessage and therefore resetting it.
	winningMessage.classList.add('d-none');
	// Adding the margin back from in between buttons and image.
	guessingSection.classList.add('mt-3');
	// Removing both the answers title and the answers container when the reset button is clicked.
	correctionInstructions.classList.add('d-none');
	correctionContainer.classList.add('d-none');
	// Removing the HTML of the correctioncontainer.
	correctionContainer.innerHTML = "";
	// Resetting the given answers array so that it can fill up from scratch in the next round.
	givenAnswersArr = [];
	// Shuffling students array so that the order is once again randomised.
	shuffleArrayFunction(students);
	if (highScore === amountOfGuessesMade) {
		highScoreParagraph.innerHTML = `Highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s`
	} else {
		// Replacing the highscore paragraph with a more generic one to look at during the new game.
		highScoreParagraph.innerHTML = `Highscore: ${highScore}/${amountOfTotalGuesses} correct answers`;
	}
	// Removing the paragraph that details the score, since we are in the process of generating a new one.
	scoreParagraph.innerHTML = "";
	// Setting the amount of guesses to 0.
	amountOfGuessesMade = 0;
	// Setting the amount of right answers to 0.
	rightAnswers = 0;
	// Initializing the start round function and all of its included code.
	startRound();
}
})