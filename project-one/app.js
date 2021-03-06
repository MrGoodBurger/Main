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

//Variables
const main = () => {
const question = document.getElementById('question');
choice = Array.from(document.getElementsByClassName('choice-text'));
console.log(choice)
;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0 ;
let questionCounter = 0;

//Create array to store questions
let availalbeQuestions = [];


//Rayya
const rayyaQuestions = [
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

//Functions
const startGame = () => {
    questionCounter = 0;
    score = 0;
    //Use the spread operater to separate this arrays elements into new arrays
    availalbeQuestions = [...rayyaQuestions];
    // console.log(availalbeQuestions)
    getNewQuestion();
}
const checkWin = () => { 
    if(score >= 70){
        alert("You won! You passed with an " + score + "% score!")
    }
    else{
        alert("Unfortunately you lost! You had a score of " + score + "%.")
    }
}
//Get New Question
 const getNewQuestion = () => {
     if(availalbeQuestions.length === 0) {
         alert('The Game is Over!!!')
         acceptingAnswers = false;
         checkWin();
     };
     questionCounter++;
    const questionIndex = Math.floor(Math.random() * availalbeQuestions.length);
    currentQuestion = availalbeQuestions[questionIndex]; 
    question.innerHTML = currentQuestion.question;
   
   //Remove Current Question From Pool
    // console.log(availalbeQuestions)
    availalbeQuestions.splice(questionIndex, 1);
    // console.log(availalbeQuestions);
    
    //Display questions to page
    let answerOne = document.getElementById('answerOne');
    answerOne.innerHTML = currentQuestion.choice1;
    answerOne.addEventListener("click", eventHandler)
    let answerTwo = document.getElementById('answerTwo');
    answerTwo.innerHTML = currentQuestion.choice2;
    answerTwo.addEventListener('click', eventHandler)
    let answerThree = document.getElementById('answerThree');
    answerThree.innerHTML = currentQuestion.choice3;
    answerThree.addEventListener('click', eventHandler)
    let answerFour = document.getElementById('answerFour');
    answerFour.innerHTML = currentQuestion.choice4;
    answerFour.addEventListener('click', eventHandler);

     


 };
 //Event Handler Function
 const eventHandler = (e) => {
    const userChoice = e.target;
    const userAnswer = userChoice.dataset['number']
    console.log(userAnswer == currentQuestion.answer)
    if(userAnswer == currentQuestion.answer) {
        score+=10;
    }
    getNewQuestion();
}
startGame();
}

main();
