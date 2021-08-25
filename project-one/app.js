//Project Name: Shadows of Cherenko Campaign Trivia
//Project Owner: MrGoodBurger



//Story
//As a User I want to play a web based trivia game

//Requirements
//Variables
const 



//Questions to be used in 
const rayyaQuestions = [{
    question: "What nation does Rayya hail from?",
    answers: {
        a: "Geldenreich",
        b: "Freisen Conferderacy",
        c: "Kingdom of Borsneia",
        d: "Elven Homeland",
    },
    correctAnswer: "b",
},
{
    question: "What was Rayya's pet's name?",
    answers: {
        a: "Creme",
        b: "Cream",
        c: "Demon Dog",
        d: "Creme",
    },
    correctAnswer = "b",
},
{
    question: "What was Rayya's original class?",
    answers: {
        a: "Shadow Sorcerer",
        b: "Hexblade Warlock",
        c: "Gold Draconic Sorcerer",
        d: "Swashbuckler Warlock",
    },
    correctAnswer = "c",
},
]

//Functions
// const createQuestions = () => {
//     let createdQuestions = [];

//     rayyaQuestions.forEach((currentQuestion, questionNumber) => {
//             let answersArray = [];

//             for(let answer in currentQuestion.answersArray){
//                 answersArray.push(
//                     `<label>
//                         <input type ="radio" name="question${questionNumber}"  value="${letter}">
//                         ${answer} :
//                         ${currentQuestion.answersArray[answer]}
//                     </label>`
//                 );

//             }
//     }
// }