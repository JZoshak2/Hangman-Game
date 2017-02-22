/* Some Needed Variables and Functions */

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
	var wrongGuessCounter = 0;
	
	for (i=0; i < wordSplit.length; i++) {
		if(userInput === wordSplit[i]) {
			wordBlankResults[i] = userInput
			document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" ");
			iHasUnderScores(wordBlankResults);
			
				if (iHasUnderScores(wordBlankResults) === false) {
					guesses = 15;
					document.getElementById("remaining").innerHTML = guesses;
					currentWord = wordbank[Math.floor(Math.random()*wordbank.length)];
					wordBlankResults = wordblanks(currentWord);
					wordSplit = currentWord.split("");
					document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" ");
					guessed = [];
					document.getElementById("guessed_letters").innerHTML = guessed.join(" ");
					wins = wins + 1;
					document.getElementById("win_count").innerHTML = wins;
			}
		}


		else if (userInput != wordSplit[i] && userInput != guessed[i]) { //checks if the letter is in the current word or in the guessed array
			wrongGuessCounter = wrongGuessCounter + 1; //uses a counter to see if the entire array contains a match.

		}  

		if (wrongGuessCounter === wordSplit.length) { //if it checks the entire array and no match, run this code.
			guessed.push(userInput);
			guesses = guesses - 1;
			document.getElementById("guessed_letters").innerHTML = guessed.join(" ");
			document.getElementById("remaining").innerHTML = guesses;
			
		}

	}

	if (guesses === 0) {
	guesses = 15;
	document.getElementById("remaining").innerHTML = guesses;
	currentWord = wordbank[Math.floor(Math.random()*wordbank.length)];
	wordBlankResults = wordblanks(currentWord);
	wordSplit = currentWord.split("");
	document.getElementById("word_spaces").innerHTML = wordBlankResults.join(" ");
	guessed = [];
	document.getElementById("guessed_letters").innerHTML = guessed.join(" ");
}

}





// Need to add win message. 
