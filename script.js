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
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
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

// I wanted to add a fastest-time component to the game, so there would still be some purpose to playing it, even though you might have gotten all of the answers right.

// Setting some default values.
let amountOfGuessesMade = 0;
let amountOfTotalGuesses = students.length;
let rightAnswers = 0;
let highScore = 0;
let bestTime = 0;
let timePassed = 1;

// Calculating how many minutes and seconds it has took for the user to get through the round.
let minutes = Math.floor(timePassed / 60);
let seconds = timePassed % 60;

// Declaring variables for storage of the best time related result.
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

// Creating certain paragraphs that will belong in the stats section.
const scoreParagraph = document.createElement('P');
const timeParagraph = document.createElement('P');
const bestTimeParagraph = document.createElement('P');
const highScoreParagraph = document.createElement('P');

// Giving the highscore paragraph & score paragraph text-align-center through bootstrap class text-center.
highScoreParagraph.classList.add('text-center');
scoreParagraph.classList.add('text-center');
timeParagraph.classList.add('text-center');
bestTimeParagraph.classList.add('text-center');

// Function that adds 1 to the seconds variable.
function incrementSeconds() {
	timePassed += 1;
}

// Using the setInterval method and passing in the incrementSeconds function aswell as 1000ms in interval, so that a 1 is added to the seconds variable, every 1000ms. Storing in variable interval which i can use as a direction for clearing the interval at some point.
let interval = setInterval(incrementSeconds, 1000);

// Giving the highscore container a bootstrap class of d-none so that it wont be visible at the start.
highScoreContainer.classList.add('d-none');

// Creating element 'button' and appending it to the startbutton container.
const startButton = document.createElement("BUTTON");
startButtonContainer.appendChild(startButton);
// Setting classes to the startbutton for both aesthetic and functional purposes.
startButton.setAttribute('class', 'startButton btn btn-lg btn-light w-50');
// Adding the button-text instructing the user.
startButton.innerHTML = 'Start The Game By Clicking The Button!';

// Adding event listener to the start button in order to initialize the game.
startButton.addEventListener('click', e => {
		// Removing the button container by adding the built in bootstrap class 'd-none'.
		startButtonContainer.setAttribute('class', 'd-none');
		// Making sure the Hero text is displayed when the button is clicked.
		heroTxt.classList.remove('d-none');
		// Remove the already previously set class of d-none off of the playingSectionContainer.
		playingSectionContainer.classList.remove("d-none");
		// Remove the already previously set class of d-none off of the highScoreContainer.
		highScoreContainer.classList.remove('d-none');
		// Remove the already previously set class of d-none off of the resultDisplay.
		resultDisplay.classList.remove("d-none");
		// Initializing the game.
		startRound();
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
	// Extracting the first student of the students array every round, and inserting him/her to the end of the students array making sure that the images change at each guess but also that tbe length of the students array remains the same.
	shiftedStudent = students.shift();
	students.push(shiftedStudent);
	// Assigning the student at index 0 of the students array to being the current student in question.
	currentStudent = students[0];
	// Extracting the URL from the current student and placing it into the student image's src.
	studentImage.setAttribute('src', currentStudent.image);
	// Shuffling the order that the 4 students come in so that the right answer isn't always in the same spot.
	shuffleArrayFunction(studentRound);
	// Resetting the contents of the buttons so that 4 new buttons are created at every click event and in turn REPLACING the 4 old buttons instead of 4 buttons just being added to the pile making it 8, 12, 16 etc...
	guessingSection.innerHTML = "";
	// Mapping out the names of the chosen 4 students and placing them in variable 'studentRoundNames'.
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
		// Pushing the current student object into the initially empty given answers array.
		givenAnswersArr.push(currentStudent);
		// Adding a conditional which checks if the user gets the answer right.
		if (e.target.innerText === currentStudent.name) {
			// After modifying so that the students array doesnt change
			givenAnswersArr[givenAnswersArr.length - 1].answer = true;

			// Initializing new round.
			startRound();
			// Increasing the amount of right answers by 1.
			rightAnswers++;
			// Increasing the amount of total guesses by 1.
			amountOfGuessesMade++;
		} 
		// Adding a conditional which checks if the user gets the answer wrong.
		else {
			// After modifying so that the students array doesnt change
			givenAnswersArr[givenAnswersArr.length - 1].answer = false;

			// Initializing new round.
			startRound();
			// Increasing the amount of total guesses by 1.
			amountOfGuessesMade++;
		}
	}

	// Filtering out the wrong answers found in the given answers array and putting them in the empty 'filteredAnswersArray' array.
	let filteredAnswersArray = givenAnswersArr.filter((studentObject) => {
		if (studentObject.answer === false){
			return true;
		} else {
			return false;
		}
	})

	// Checking for when the round is over
	if (amountOfGuessesMade === students.length) {
	// Removing any highscore paragraph that might have been created.
	highScoreParagraph.innerHTML = ``;
	// Stopping the setInterval from counting the seconds.
	clearInterval(interval);
	// Removing the margin from in between the image and the buttons, when the game is over, in order to match the stats menu with the image. 
	guessingSection.classList.remove('mt-3');
	// Printing out the filtered out wrong answers to the DOM and styling the containers.
	filteredAnswersArray.forEach(wrongAnswer => {
	// Code after changes
	correctionContainer.innerHTML += 
	`<div class="correctionContainer d-flex flex-column mt-2">
	<h5 class="text-center" style="color:green">${wrongAnswer.name}</h5>
	<i class="fas fa-arrow-down text-center"></i>
	<img src='${wrongAnswer.image}'style='border: 10px solid red; margin: 10px;'>
	</img>
	</div>`
	}) 
	// Code before changes
	/*
	correctionContainer.innerHTML += 
		`<div class="correctionContainer d-flex flex-column mt-2">
		<h5 class="text-center" style="color:green">${wrongAnswer.name}</h5>
		<i class="fas fa-arrow-down text-center"></i>
		<img src='${wrongAnswer.image}' height="200px" style='border: 10px solid red; margin: 10px;'>
		</img>
		</div>`
	}) 
	*/
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

	// Adding a conditional that checks if the amount of current right answers is smaller or equal to the current highscore.
	if (highScore >= rightAnswers) {
		// Appending a score / results paragraph to the resultsDisplay that prints out the round points.
		resultDisplay.appendChild(scoreParagraph);
		scoreParagraph.innerHTML = (`Result: ${rightAnswers}/${amountOfGuessesMade} correct answers!`);
	}
	// If the highscore is greater than or equal to the amount of right answers, and the best time is greater than 0 (or if the amount of right answers is the same as the high score ) print the paragraphs into the result section.	
	if (highScore >= rightAnswers && bestTime > 0 || rightAnswers === highScore) {
		resultDisplay.appendChild(scoreParagraph);
		scoreParagraph.innerHTML = (`Result: ${rightAnswers}/${amountOfGuessesMade} correct answers!`);
		highScoreParagraph.innerHTML += `Highscore is still: ${highScore}/${amountOfGuessesMade} correct answers.`;		
	}
	// Adding a conditional that checks if the amount of right answers is greater than the high score
	if (rightAnswers > highScore) {
		// Each time the amount of right answers exceed the highscore number, reassigns the highscore to the new amount of right answers.
		highScore = rightAnswers;
		// Resetting the score paragraph.
		scoreParagraph.innerHTML = "";
		// Replacing the old highscore paragraph with the new one.
		resultDisplay.appendChild(highScoreParagraph);
		highScoreParagraph.innerHTML = "";
		highScoreParagraph.innerHTML += `Nice! New best answers: ${highScore}/${amountOfGuessesMade} correct answers!`;
	} 
	// Checking if during the game, a user has gotten every guess right once already, and executes the code (prints these paragraphs into the results section) if the current high score is greater than the amount of current right answers.
	else if (rightAnswers < highScore && highScore === amountOfTotalGuesses) {
		highScoreParagraph.innerHTML = ``;
		resultDisplay.appendChild(scoreParagraph);
		scoreParagraph.innerHTML = (`Result: ${rightAnswers}/${amountOfGuessesMade} correct answers!`);
		highScoreParagraph.innerHTML += `Highscore is still: ${highScore}/${amountOfGuessesMade} correct answers in ${bestMinutes}m ${bestSeconds}s`;	
	}
	// Checking if during the game, a user hasn't yet gotten every guess right, and executes the code (prints these paragraphs into the results section) if the current high score is greater than the amount of current right answers.
	else if (rightAnswers < highScore && highScore != amountOfGuessesMade){
		// Telling the user that their highscore is still the same as their previous one.
		resultDisplay.appendChild(highScoreParagraph);
		highScoreParagraph.innerHTML = "";
		highScoreParagraph.innerHTML += `Highscore is still: ${highScore}/${amountOfGuessesMade} correct answers.`;
	}
	// Adding a conditional to check if the user has gotten all of the answers right
	if (rightAnswers === amountOfGuessesMade){
		// displaying a winning message instead of a correction instruction.
		winningMessage.classList.remove('d-none');
		correctionInstructions.classList.add('d-none');

		// Adding the minutes and seconds logic again.
		minutes = Math.floor(timePassed / 60);
		seconds = timePassed % 60;
		// Appending the timeparagraph to the results section and printing the text.
		resultDisplay.appendChild(timeParagraph);
		timeParagraph.innerHTML = `Time: ${minutes}m ${seconds}s`;

		// If the second that passed during the last round were greater than 0 AND the best time is 0 at the same time ( or if the best time is greater than the amount of time passed):
		if (timePassed > 0 & bestTime === 0 || bestTime > timePassed) {
			// Making the current minutes and seconds the best minutes and seconds
			bestMinutes = minutes;
			bestSeconds = seconds;
			// Making the best time, the current time passed.
			bestTime = timePassed;
			// Printing out the new best score and time text
			resultDisplay.appendChild(bestTimeParagraph);
			bestTimeParagraph.innerHTML = ``;
			bestTimeParagraph.innerHTML = `New highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s!`	
		}
		// If the user has gotten all the answers right previously and the seconds it took to complete this round were higher than the best time he/she ever got - execute the code (prints these paragraphs into the results section).
		if (seconds > bestTime) {
		timeParagraph.innerHTML = `Time: ${minutes}m ${seconds}s`;
		highScoreParagraph.innerHTML = "";
		highScoreParagraph.innerHTML += `Highscore is still: ${highScore}/${amountOfGuessesMade} correct answers in: ${bestMinutes}m ${bestSeconds}s!`;
		} 
		// If the user has gotten all the answers right previously and the seconds it took to complete this round were fewer than the previous best time he/she ever got - execute the code (prints these paragraphs into the results section).
		else {
			highScoreParagraph.innerHTML = ''
			scoreParagraph.innerHTML = ''
			scoreParagraph.innerHTML = `Result: ${rightAnswers}/${amountOfGuessesMade} correct answers!`;
			timeParagraph.innerHTML = `New best time: ${minutes}m ${seconds}s`;
			bestTimeParagraph.innerHTML = ``;
			bestTimeParagraph.innerHTML = `New highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s!`				
		}
	}
}
})

// Adding a click-event listener for the button in the results section.
resultDisplay.addEventListener('click', e => {
	// Checking if the click-target is on the button.
	if (e.target.tagName === ('BUTTON')) {
	// Resetting the time passed so that a new count can begin.
	seconds = 0;
	minutes = 0;
	timePassed = 1;
	// Adding a clearInterval prior to starting the count again. This fixed a bug which entailed there being a possibility for interval counters to stack, if user mistakenly clicked the new game button twice. Adding a clearInterval before initializing a new count fixed this problem.
	clearInterval(interval);
	// Function that adds a 1 to the seconds variable and prints a paragraph out into the results section.
	function incrementSeconds() {
		timePassed += 1;
	}
	// Using the setInterval method again so that it starts the count as soon as the reset button is clicked.
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
	// Prints a more generic highscore text containing both score and time ( if the user has unlocked the time component of the game, by getting all the answers right ).
	if (highScore === amountOfGuessesMade) {
		resultDisplay.appendChild(highScoreParagraph);
		highScoreParagraph.innerHTML = `Highscore: ${highScore}/${amountOfTotalGuesses} correct answers in: ${bestMinutes}m ${bestSeconds}s`
	} 
	// Prints a more generic highscore text with only the score, because the user hasn't unlocked the time component of the game yet.
	else {
		// Replacing the highscore paragraph with a more generic one to look at during the new game.
		resultDisplay.appendChild(highScoreParagraph);
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