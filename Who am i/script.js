const questions = [
    "What is your greatest passion?",
    "What are your top three values in life?",
"  What could you give a 40-minute presentation on with absolutely no preparation?",
"What question would you most like to know the answer to?",
"If you didn’t have to sleep, what would you do with the extra time?","What could you give a 40-minute presentation on with absolutely no preparation?",
"What question would you most like to know the answer to?",
"If you didn’t have to sleep, what would you do with the extra time?",
"Why did you decide to do what you are doing now in your life?",
"What’s the best and worst piece of advice you’ve ever received?",
"What’s the most impactful ‘no’ you’ve said recently?",
"What was the most stressful experience of your life?"
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const questionCountElement = document.getElementById("questionCount");

function showQuestion() {
    questionElement.textContent = questions[currentQuestion];
    questionCountElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    answerElement.value = "";
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Congratulations! You've completed all questions. we hope you had fun gitting to know yourself💫";
    answerElement.style.display = "none";
    nextBtn.style.display = "none";
    questionCountElement.textContent = "All questions completed! ";
}

nextBtn.addEventListener("click", showNextQuestion);

showQuestion();
