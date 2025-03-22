let questions = [
    {
        question: "What is the capital of India?",
        answer: [
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
       question: "Who wrote the national anthem of India?",
        answer: [
            { text: "Rahul Gandhi", correct: false },
            { text: "Mother Teresa", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Mohandas Karamchand Gandhi", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answer: [
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answer: [
            { text: "7", correct: true },
            { text: "3", correct: false },
            { text: "9", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question:  "Which is the longest river in the world?",
        answer: [
            { text: "Ganga", correct: false },
            { text: "Yamuna", correct: false },
            { text: "Nile", correct: true },
            { text: "Kaveri", correct: false }
        ]
    },
    {
        question:  "Who was the first man to walk on the moon?",
        answer: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question:  "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "Bhutan", correct: false },
            { text: "Australia", correct: false },
            { text: "China", correct: false },
            { text: "Japan", correct: true }
        ]
    },
    {
        question:  "Which is the smallest country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "Maldives", correct: false },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "Who discovered gravity?",
        answer: [
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galili", correct: false },
            { text: "Nicola tesla", correct: false },
            { text: "Aryabhatta", correct: false }
        ]
    },
];

let QuestionElement = document.getElementById("question");
let Option = document.getElementById("options");
let Next = document.getElementById("next");
let QuestionIndex = 0;
let score = 0;

function startQuiz() {
    QuestionIndex = 0;
    score = 0;
    Next.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion() {
    let currentQuestion = questions[QuestionIndex];
    let QuestionNo = QuestionIndex + 1;
    QuestionElement.innerHTML = QuestionNo + ". " + currentQuestion.question;

    
    Option.innerHTML = "";

   
    currentQuestion.answer.forEach((Answer) => {
        let Button = document.createElement("button");
        Button.innerHTML = Answer.text;
        Button.classList.add("btn");
        Option.appendChild(Button);

        
        Button.addEventListener("click", () => selectAnswer(Answer.correct));
    });
}

function selectAnswer(isCorrect) {
    
    if (isCorrect) {
        score++;
    }
    QuestionIndex++;

    if (QuestionIndex < questions.length) {
        ShowQuestion();
    } else {
        endQuiz();
    }
   
    
}

function endQuiz() {
    QuestionElement.innerHTML = `Quiz Finished! Your Score: ${score} / ${questions.length}`;
    Option.innerHTML = "";
    Next.innerHTML = "Restart";
    Next.addEventListener("click", startQuiz);
    
}

startQuiz();
