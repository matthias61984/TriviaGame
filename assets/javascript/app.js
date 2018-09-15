$(document).ready(function() {

// Define question and answer combinations as objects
    var q1 = {
        question: "question number 1?",
        answers: {
            wAnswer1: "Wrong",
            wAnswer2: "Wrong",
            wAnswer3: "Wrong",
            rAnswer: "Right"
        },
    };
    var q2 = {
        question: "question number 2?",
        answers: {
            wAnswer1: "Wrong",
            wAnswer2: "Wrong",
            wAnswer3: "Wrong",
            rAnswer: "Right"
        },
    };
    var q3 = {
        question: "question number 3?",
        answers: {
            wAnswer1: "Wrong",
            wAnswer2: "Wrong",
            wAnswer3: "Wrong",
            rAnswer: "Right"
        },
    }; 
    var q4 = {
        question: "question number 4?",
        answers: {
            wAnswer1: "Wrong",
            wAnswer2: "Wrong",
            wAnswer3: "Wrong",
            rAnswer: "Right"
        },
    };
    var q5 = {
        question: "question number 5?",
        answers: {
            wAnswer1: "Wrong",
            wAnswer2: "Wrong",
            wAnswer3: "Wrong",
            rAnswer: "Right"
        },
    };
    
// Place all the question objects into an array for indexing
    var qArray = [q1, q2, q3, q4, q5];
// Set variables for tracking questions answered
    var answeredQ = 0;
    var correctQ = 0;
    var incorrectQ = 0;
    
// Randomly shuffle question array
    function shuffle (array) {
        var i = 0, j = 0, temp = null;
        for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
        }
    };
    shuffle(qArray);

// Loop through object to present each question
    function buildQuestion(index) {
        var newQueDiv = $("<div>").text(qArray[index].question);
        $("#questionDiv").html(newQueDiv);
        var newAnsDiv1 = $("<div>").text(qArray[index].answers.wAnswer1).addClass("answer incorrect");
        $("#answersDiv1").html(newAnsDiv1);
        var newAnsDiv2 = $("<div>").text(qArray[index].answers.wAnswer2).addClass("answer incorrect");
        $("#answersDiv2").html(newAnsDiv2);
        var newAnsDiv3 = $("<div>").text(qArray[index].answers.wAnswer3).addClass("answer incorrect");
        $("#answersDiv3").html(newAnsDiv3);
        var newAnsDiv4 = $("<div>").text(qArray[index].answers.rAnswer).addClass("answer");
        $("#answersDiv4").html(newAnsDiv4);
    // Shuffle the order of the div elements in the answer row

    // On click functions for answering questions
        $(".answer").click(function() {
            answeredQ++;
        // If incorrect choice is chosen
            if ($(this).hasClass("incorrect")) {
            // Increment incorrectly answered question 
                incorrectQ++;
                console.log("Wrong!");
                console.log(incorrectQ);
            } else {
            // Increment correctly answered question
                correctQ++;
                console.log("Correct!");
                console.log(correctQ);
            }
        // After each answer, reset timer value and run build question on the next question in the array
            timeLeft = 15;
            index = index + 1;
            buildQuestion(index);
        });
    };
// Start game by building question at index 0 in the array
    buildQuestion(0);
// Set timer equal to 15 seconds and...
    var timeLeft = 15;
// ...define the countdown timer function
    var timer = setInterval(function() {
        $("#timerDiv").text("Time left: " + timeLeft);
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
        };
    }, 1000);
});