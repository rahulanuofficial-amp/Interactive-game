const questions = [

{
question:"What does CPU stand for?",
options:["Central Processing Unit","Computer Processing Unit","Central Program Unit","Computer Program Unit"],
answer:0
},

{
question:"Which language is used to structure web pages?",
options:["CSS","HTML","JavaScript","Python"],
answer:1
},

{
question:"Which CSS property changes text color?",
options:["font-color","text-style","color","background"],
answer:2
},

{
question:"Which symbol is used for comments in JavaScript?",
options:["<!-- -->","#","//","**"],
answer:2
},

{
question:"Which company developed JavaScript?",
options:["Google","Microsoft","Netscape","Apple"],
answer:2
},

{
question:"Which data structure follows FIFO?",
options:["Stack","Queue","Tree","Array"],
answer:1
},

{
question:"Which data structure follows LIFO?",
options:["Queue","Stack","Array","Graph"],
answer:1
},

{
question:"What does RAM stand for?",
options:["Random Access Memory","Read Access Memory","Rapid Access Memory","Run Access Memory"],
answer:0
},

{
question:"Which HTML tag defines the largest heading?",
options:["<h6>","<head>","<heading>","<h1>"],
answer:3
},

{
question:"Which operator is used for strict equality?",
options:["=","==","===","!="],
answer:2
},

{
question:"What does DBMS stand for?",
options:["Database Management System","Data Backup Management System","Database Memory System","Digital Base Management System"],
answer:0
},

{
question:"Which protocol is secure?",
options:["HTTP","FTP","SMTP","HTTPS"],
answer:3
},

{
question:"Which keyword declares a variable in JavaScript?",
options:["var","int","float","string"],
answer:0
},

{
question:"Which sorting algorithm has average complexity O(n log n)?",
options:["Bubble Sort","Quick Sort","Selection Sort","Linear Sort"],
answer:1
},

{
question:"Which of these is an Operating System?",
options:["Python","HTML","Linux","MySQL"],
answer:2
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const questionNumberEl = document.getElementById("question-number");
const nextBtn = document.getElementById("next-btn");

const resultContainer =
document.getElementById("result-container");

const quizContainer =
document.getElementById("quiz-container");

const finalScore =
document.getElementById("final-score");

const performance =
document.getElementById("performance");

const restartBtn =
document.getElementById("restart-btn");

function loadQuestion(){

    const q = questions[currentQuestion];

    questionNumberEl.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach((option,index)=>{

        const button =
        document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        button.addEventListener("click",()=>checkAnswer(index));

        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected){

    const correctAnswer =
    questions[currentQuestion].answer;

    const optionButtons =
    document.querySelectorAll(".option");

    optionButtons.forEach(btn=>{
        btn.disabled = true;
    });

    if(selected === correctAnswer){

        score++;

        optionButtons[selected]
        .classList.add("correct");

    }else{

        optionButtons[selected]
        .classList.add("wrong");

        optionButtons[correctAnswer]
        .classList.add("correct");
    }

    scoreEl.textContent =
    `Score: ${score}`;
}

function showResult(){

    quizContainer.classList.add("hidden");

    resultContainer.classList.remove("hidden");

    finalScore.textContent =
    `Final Score: ${score}/${questions.length}`;

    if(score >= 13){

        performance.textContent =
        "🏆 Excellent! Outstanding Performance";

    }
    else if(score >= 8){

        performance.textContent =
        "👍 Good Job! Keep Learning";

    }
    else{

        performance.textContent =
        "📚 Keep Practicing and Improve";
    }
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }else{

        showResult();
    }
}

function restartQuiz(){

    currentQuestion = 0;
    score = 0;

    scoreEl.textContent = "Score: 0";

    resultContainer.classList.add("hidden");

    quizContainer.classList.remove("hidden");

    loadQuestion();
}

nextBtn.addEventListener("click",nextQuestion);

restartBtn.addEventListener("click",restartQuiz);

loadQuestion();