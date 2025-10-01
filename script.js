// 2. JavaScript Functionality:
// ● Display Question:
// ○ Use an array of question objects, each containing:
// ■ A question string.
// ■ An array of four answer choices.
// ■ The index of the correct answer.
// ● Handle Answer Selection:
// ○ Add click event listeners to the answer buttons.
// ○ When a button is clicked, check if the selected answer is correct and
// update the feedback element accordingly.
// ○ Disable all answer buttons after a selection to prevent further clicks.
// ● Next Question:
// ○ Attach an event listener to the "Next Question" button.
// ○ When clicked, load the next question and re-enable the answer
// buttons

// hard data
const questions = [
    {
        question : "What is 5 + 3?",
        answers : [ "10", "8", "14", "53" ],
        correctAnswer : 1
    },
    {
        question : "What is 10 - 4?",
        answers : [ "20", "9", "6", "14" ],
        correctAnswer : 2
    },
    {
        question : "What animal makes the sound 'moo'?",
        answers : [ "tiger", "lion", "shark", "cow" ],
        correctAnswer : 3
    },
    {
        question : "If a square has a perimeter of 36cm, what is the length of one side?",
        answers : [ "9cm", "10cm", "12cm", "15cm" ],
        correctAnswer : 0
    }
];

// set up variables
const question1Text = document.getElementById("question1-text");
const answer1Button = document.getElementById("answer1");
const answer2Button = document.getElementById("answer2");
const answer3Button = document.getElementById("answer3");
const answer4Button = document.getElementById("answer4");
const feedbackP = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
let currentQuestion = 0; // start on question 1 (index 0 = question 1)
let score = 0; // score counter

// display question and its associated answers as values in HTML elements
function showQuestion(questionNum) {
    question1Text.innerText = questions[questionNum].question;
    answer1Button.innerText = questions[questionNum].answers[0];
    answer2Button.innerText = questions[questionNum].answers[1];
    answer3Button.innerText = questions[questionNum].answers[2];
    answer4Button.innerText = questions[questionNum].answers[3];
}

// add event listeners to buttons
function buttonListeners(currentQuestion) {
    answer1Button.addEventListener("click", () => {
        feedbackP.style.visibility = "visible"; // shows feedback text
        displayFeedback(currentQuestion, 0); // confirms answer correctness
        answer2Button.style.visibility = "hidden"; // hides other answer buttons
        answer3Button.style.visibility = "hidden";
        answer4Button.style.visibility = "hidden";
    });
    answer2Button.addEventListener("click", () => {
        feedbackP.style.visibility = "visible";
        displayFeedback(currentQuestion, 1);
        answer1Button.style.visibility = "hidden";
        answer3Button.style.visibility = "hidden";
        answer4Button.style.visibility = "hidden";
    });
    answer3Button.addEventListener("click", () => {
        feedbackP.style.visibility = "visible";
        displayFeedback(currentQuestion, 2);
        answer1Button.style.visibility = "hidden";
        answer2Button.style.visibility = "hidden";
        answer4Button.style.visibility = "hidden";
    });
    answer4Button.addEventListener("click", () => {
        feedbackP.style.visibility = "visible";
        displayFeedback(currentQuestion, 3);
        answer1Button.style.visibility = "hidden";
        answer2Button.style.visibility = "hidden";
        answer3Button.style.visibility = "hidden";
    });
    nextButton.addEventListener("click", () => { // on click, shows next question or quiz completion
        currentQuestion++;
        if (currentQuestion >= questions.length) { // shows quiz completion if past final question
            let finalText = `Congrats! You made it through the quiz. \nYour score is ${score} / 4.`;
            nextButton.style.visibility = "hidden";
            return feedbackP.innerText = finalText;
        }
        showQuestion(currentQuestion);
        answer1Button.style.visibility = "visible";
        answer2Button.style.visibility = "visible";
        answer3Button.style.visibility = "visible";
        answer4Button.style.visibility = "visible";
    });
}

// confirm if answer is correct, displays feedback
function displayFeedback(questionNum, answerNum) { 
    let feedback = "";
    let correctAnswerKey = questions[questionNum].correctAnswer;
    if (answerNum === correctAnswerKey) {
        feedback = "Your answer is correct!";
        score++;
    } else {
        feedback = "Sorry, your answer is incorrect.";
    }
    return feedbackP.innerText = feedback;
}

// on page load
feedbackP.style.visibility = "hidden";
showQuestion(currentQuestion); // display 1st question
buttonListeners(currentQuestion); // adds event listeners 