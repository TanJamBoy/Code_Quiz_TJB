const startButton = document.querySelector("#startQuiz");
const timer = document.querySelector("#time");
const mainContent = document.querySelector("#mainContent");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const quizOver = document.querySelector("#quizOver");
const score = document.querySelector("#score");
const wrong = document.querySelector("#wrong");
const right = document.querySelector("#right");
const initialsInput = document.querySelector("#initialsInput");
const sumbitButton = document.querySelector("#sumbit");
let questionWrongButtons = document.querySelectorAll(".questionWrongOptions");
let questionRightButtons = document.querySelectorAll(".questionRightOptions");

startButton.addEventListener("click", changePageContent);
questionWrongButtons.forEach((btn) => {
  btn.addEventListener("click", nextQuestionWrong);
});
questionRightButtons.forEach((btn) => {
    btn.addEventListener("click", nextQuestionRight);
});
sumbitButton.addEventListener("click", addToHighScores);

let totalSeconds = 0;
var timeCountDown;
var answer = "";

// Controls what happens when you click a wrong button
function nextQuestionWrong(){
    if(question1.style.display == "block") {
        question1.style.display = "none";
        question2.style.display = "block";
        totalSeconds = totalSeconds - 12;
        timer.innerHTML = "Time: " + totalSeconds;
        wrongAnswer();
    }else if(question2.style.display == "block") {
        question2.style.display = "none";
        question3.style.display = "block";
        console.log("wrong");
        totalSeconds = totalSeconds - 12;
        timer.innerHTML = "Time: " + totalSeconds;
        wrongAnswer();
    }else if(question3.style.display == "block") {
        question3.style.display = "none";
        question4.style.display = "block";
        console.log("wrong");
        totalSeconds = totalSeconds - 12;
        timer.innerHTML = "Time: " + totalSeconds;
        wrongAnswer();
    }else if(question4.style.display == "block") {
        question4.style.display = "none";
        question5.style.display = "block";
        console.log("wrong");
        totalSeconds = totalSeconds - 12;
        timer.innerHTML = "Time: " + totalSeconds;
        wrongAnswer();
    }else if(question5.style.display == "block") {
        question5.style.display = "none";
        quizOver.style.display = "block";
        console.log("wrong");
        totalSeconds = totalSeconds - 12;
        timer.innerHTML = "Time: " + totalSeconds;
        wrongAnswer();
        clearInterval(timeCountDown);
        if (totalSeconds < 0){
            score.textContent = ("Your score is: 0");
            timer.innerHTML = "Time: 0";
        }else{
            score.textContent = ("Your score is:" + totalSeconds);
        }
    }else{
        console.log("something went wrong")
    };
};

// Controls what happens when you click a right button
function nextQuestionRight(){
    if(question1.style.display == "block") {
        question1.style.display = "none";
        question2.style.display = "block";
        console.log("correct");
        rightAnswer();
    }else if(question2.style.display == "block") {
        question2.style.display = "none";
        question3.style.display = "block";
        console.log("correct");
        rightAnswer();
    }else if(question3.style.display == "block") {
        question3.style.display = "none";
        question4.style.display = "block";
        console.log("correct");
        rightAnswer();
    }else if(question4.style.display == "block") {
        question4.style.display = "none";
        question5.style.display = "block";
        console.log("correct");
        rightAnswer();
    }else if(question5.style.display == "block") {
        question5.style.display = "none";
        quizOver.style.display = "block";
        console.log("correct");
        rightAnswer();
        clearInterval(timeCountDown);
        score.textContent = ("Your score is:" + totalSeconds);
    }else{
        console.log("something went wrong")
    };
};

//Says wrong
function wrongAnswer(){
        wrong.style.display = "block"
    setTimeout(() => {
        wrong.style.display = "none"
    }, 1000);
};

//Says right
function rightAnswer(){
        right.style.display = "block"
    setTimeout(() => {
        right.style.display = "none"
    }, 1000);
};


//Changes the page and starts the timer when you click the start button
function changePageContent(){
    mainContent.style.display = "none";
    startTimer();
    question1.style.display = "block";
};

//The Timer
function startTimer(){
    totalSeconds = 60;
    timer.innerHTML = "Time: " + totalSeconds;
    timeCountDown = setInterval(() => {
        if (totalSeconds > 0){
            totalSeconds--;
            console.log(totalSeconds);
            timer.innerHTML = "Time: " + totalSeconds;
        }else{
            alert("times up")
            clearInterval(timeCountDown);
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            question5.style.display = "none";
            quizOver.style.display = "block";
            score.textContent = ("Your score is:" + totalSeconds);
        };
    }, 1000);
};

//Adds score and initals to local storage
function addToHighScores() {
    localStorage.setItem("initials", initialsInput.value)
    localStorage.setItem("score", totalSeconds);
    window.location = 'highscores.html';
};