/* Some Needed Variables and Functions */
function reset() {
	var guesses = 15; //resets guess counter to 15
	document.getElementById("remaining").innerHTML = guesses; //sets the HTML to show 15
	currentWord = wordbank[Math.floor(Math.random()*wordbank.length)]; //sets a new word
	wordBlankResults = wordblanks(currentWord); //sets the new blank length
	wordSplit = currentWord.split(""); //splits the current word into an array
	document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" "); //adds the blanks to the page
	guessed = []; // empties out the guessed array.
	document.getElementById("guessed_letters").innerHTML = guessed.join(" "); //displays the emptied out array. 
}

function wordblanks (word) { //function that sets the blanks in the beginning. 
		var blanks = [];
		for (i = 1; i <= word.length; i++) {
			blanks.push("_ ");
		}
		return blanks;
	}

function iHasUnderScores(arr) {
	var underscore = arr.indexOf("_ ");
	if (underscore === -1) {
		return false;
	}

	else {
		return true;
	}
}

var wins = 0;
var guesses = 15; //guess counter
var wordbank = ["themistokles", "pericles", "solon", "alkibiades", "demosthenes"]; //wordbank - extensible if desired.
var currentWord = ""; //current word variable e.g. the word being used.
var guessed = []; //empty array to hold guessed letters.
var currentWord = wordbank[Math.floor(Math.random()*wordbank.length)];
 //Uses Math floor and Math random to pick a random item out of our wordbank array.
var wordBlankResults = wordblanks(currentWord); //actually sets the blanks and holds them in a variable.
var wordSplit = currentWord.split(""); //splits the current word into an array. 

document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" "); //sets the blank spaces up based on currentWord.

/* Game Mechanics */

document.onkeyup = function(e) {  
	var userInput = e.key;
	var wrongGuessCounter = 0; //hacky counter variable i needed to implement when comparing the arrays. 
	
	for (i=0; i < wordSplit.length; i++) {
		if(userInput === wordSplit[i]) { //checks the userInput against the Wordsplit array.
			wordBlankResults[i] = userInput // adds the character to the blank array.
			document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" "); //displays the new less-blank array
			iHasUnderScores(wordBlankResults); //checks to see if the array has any underscores left.
			
				if (iHasUnderScores(wordBlankResults) === false) { // if it doesn't have underscores
					reset(); // reset function
					wins += 1; //add one to wins
					document.getElementById("win_count").innerHTML = wins; //display new wins. 
			}
		}


		else if (userInput != wordSplit[i] && userInput != guessed[i]) { //checks if the letter is in the current word or in the guessed array
			wrongGuessCounter = wrongGuessCounter + 1; //uses a counter to see if the entire array contains a match.

		}  

		if (wrongGuessCounter === wordSplit.length) { //if it checks the entire array and no match, run this code.
			guessed.push(userInput); //pushes the guessed letter to the array
			guesses -= 1; // subtracts from guesses 
			document.getElementById("guessed_letters").innerHTML = guessed.join(" "); // displays the new array
			document.getElementById("remaining").innerHTML = guesses; // displays the new guesses
			
		}

	}

	if (guesses === 0) { //if guesses equals 0 then YOU LOSE! 
	reset(); //runs the reset function. 
}

}





// Need to add win message. 
