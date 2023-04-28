var startBtn = document.getElementById("start-btn");
var startMenu = document.getElementById("start-menu");
var questionSection = document.getElementById("question-section");
var questionH2 = document.getElementById("question-h2");
var answerList = document.getElementById("answer-list");
var timerElement = document.getElementById("timer");
var timerLeft = 50;



var questions = [
    {
        question: "What is JavaScript",
        choices: [
            {answer: "it is a programming language", isCorrect: true},
            {answer: "It is a CSS Framework", isCorrect: false},
            {answer: "It is part of the Java programming language", isCorrect: false},
            {answer: "It is an internet browser", isCorrect: false}
        ]
    },

    {
        question: "What is HTML",
        choices: [
            {answer: "It is a programing language", isCorrect: false},
            {answer: "It is a CSS Framework", isCorrect: false},
            {answer: "It is the standard markup language for creating Web pages.", isCorrect: true},
            {answer: "It is an internet browser", isCorrect: false}
        ]


    },
    {
        question: "What is CSS",
        choices: [
            {answer: "It is a programing language", isCorrect: false},
            {answer: "It is the language for describing the presentation of Web pages, including colors, layout, and fonts", isCorrect: true},
            {answer: "It is a CSS Framework", isCorrect: false},
            {answer: "It is an internet browser", isCorrect: false}
        ]


    }

]

var count = 0

function nextQuestion(){
    questionH2.textContent = questions[0].question

    while(answerList.firstChild){
        answerList.firstChild.remove();
    };

    for(var i=0;i<questions[count].choices.length;i++ ){
        var answerBtn = document.createElement('button')
        answerBtn.innerText = questions[count].choices[i].answer
        answerBtn.setAttribute('data-isCorrect', questions[0].choices[i].isCorrect)
        console.log(answerBtn.getAttribute('data-isCorrect'))
        answerList.appendChild(answerBtn);
    }
    count++
}

function startGame(){
    // swap section
    questionSection.classList.remove('hide');
    startMenu.classList.add('hide');
    nextQuestion();
};

startBtn.addEventListener('click', startGame)