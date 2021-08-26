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
const question = document.getElementById('question');
const choice = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0 ;

//Rayya
let rayyaQuestions = [
    {
        question: "What nation does Rayya originate from?",
        choice1: 'Geldenreich',
        choice2: 'Kingdom of Borsneia',
        choice3: 'Freisen Confederacy',
        choice4: 'Elven Homeland',
        answer: 3,
    },
    {
        question:"What was Rayya's pet's name?",
        choice1: 'Creme',
        choice2: 'Cream',
        choice3: 'Demon Dog',
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: "What was Rayya's Original Class",
        choice1:"Shadow Sorcerer",
        choice2: "Hexblade Warlock",
        choice3: "Gold Draconic Sorcerer",
        choice4: "Swashbuckler Rogue",
        answer: 3,
    },
    {
        question: "Where does Rayya get her power from?",
        choice1: "Feywild",
        choice2: "Shadowfell",
        choice3: "Her Family",
        choice4: "Who Knows",
        answer: 2,
    },
    {
        question: "What weapon does Rayya use in melee combat?",
        choice1: "Glaive",
        choice2: "Boot Dagger",
        choice3: "Censer",
        choice4: "Rapier",
        answer: 4,
        
    },
    {
        question: "Who are Rayya's NPCs?",
        choice1: "Moore and Shurer",
        choice2: "Moore, Shurer, and 'The Toymaker'",
        choice3: "Moore, Shurer and Brakovitch",
        choice4: "Moore, Shurer and 'Mother'",
        answer: 4,
        
    },
    {
        question: "What language did Rayya speak with the Xayacoatl fiend in the jungle?",
        choice1: "Abyssal",
        choice2: "Infernal",
        choice3: "Common",
        choice4: "Elvish",
        answer: 2,
        
    },
    {
        question: "How did Rayya die the first time?",
        choice1: "She and her husband were murdered by dwarven bandits.",
        choice2: "She was poisoned by a family rival.",
        choice3: "She doesn't remember.",
        choice4: "She was sacrificed by her father for eldritch power.",
        answer: 1,
        
    },
    {
        question: "What is Rayya's male Elven alias name?",
        choice1: "Roland Blackspire",
        choice2: "Ravinder Blackthorn",
        choice3: "Ramsey Bolton",
        choice4: "Rupert Bloomdale",
        answer: 2,
        
    },
    {
        question: "What is Rayya's favorite stress release?" ,
        choice1: "Playing the Violin",
        choice2: "Taking A Bath",
        choice3: "Plotting Murder",
        choice4: "Jewler Work",
        answer: 1,
        
    }
];

