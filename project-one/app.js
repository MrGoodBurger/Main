//Project Name: Shadows of Cherenko Campaign Trivia
//Project Owner: MrGoodBurger

//Project Requirements:
//Project uses HTML, CSS, and Javascript for game solution
//Project uses CSS to style DOM Elements
//Consistent codeIndentation and naming conventions
//Game must be functional, allow for at least a single play through, user can win and lose if respective conditions are met.
//Need at least 30 commits this week.


//Story
//As a User I want to play a web based trivia game

//Requirements
//Questions must be text based and neatly separated
//When clicked, the user can visually see the incorrect and correct answers
//Game win condition is user get 70% of the question correct
//Game Has a You Win Message
//Game is multiple choice

//Extra:
//There are more than one set of questions, preferablly one per character.
//Characters have their own containers(cards or collapsable divs??)

//Things I learned
//What Javascript REM is, and how it functions in comparison to px and/or %
//

//Variable

//Functions
const createQuestionDiv = (charactername) => {
    let newDiv = document.createElement('div');
    charactername.appendChild(newDiv)
    
}

//Rayya
const questionOneArray = ['Geldenreich', 'Kingdom of Borsneia', 'Freisen Confederacy', 'Elven Homeland'],
const questionOne = "What nation does Rayya originate from?"

const questionTwo = "What was Rayya's pet's name?"
const questionTwoArray = ['Creme', 'Cream', 'Creme', 'Demon Dog']

const questionThree = "What was Rayya's Original Class"
const questionThreeArray = ["Shadow Sorcerer", "Hexblade Warlock", "Gold Draconic Sorcerer", "Swashbuckler Rogue"]

const questionFour = "Where does Rayya get her power from?"
const questionFourArray = ["Feywild", "Shawdowfell", "Her Family", "Who Knows"]

const questionFive = ""