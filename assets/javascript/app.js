$(document).ready(function() {
// Hide body except for start button

// Define question and answer combinations as objects
    var q1 = {
        question: "question number 1?",
        cQuestion: "Right",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"
        ]
    };
    var q2 = {
        question: "question number 2?",
        cQuestion: "Right",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"
        ]
    };
    var q3 = {
        question: "question number 3?",
        cQuestion: "Right",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"
        ]
    };
    var q4 = {
        question: "question number 4?",
        cQuestion: "Right",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"
        ]
    };
    var q5 = {
        question: "question number 5?",
        cQuestion: "Right",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"
        ]
    };
// Place all the question objects into an array for indexing
    var qArray = [q1, q2, q3, q4, q5];
// Set variables for tracking questions answered
    var correctQ = 0;
    var incorrectQ = 0;
    var completedQ =0;
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
// Start the game up
    function startGame() {
        var index = 0;
        var currentQ = qArray[index];
        buildQuestion();
// Loop through object to present each question
    function buildQuestion() {
    // Reset timer to 15
        timeLeft = 15;
    // Shuffle the order of the div elements in the answer row
        shuffle (currentQ.answers);
        console.log(qArray);
        if (index < qArray.length) {
            var newQueDiv = $("<div>").text(qArray[index].question);
            $("#questionDiv").html(newQueDiv);
            var newAnsDiv1 = $("<div>").text(currentQ.answers[0]).addClass("answer");
            $("#answersDiv1").html(newAnsDiv1);
            var newAnsDiv2 = $("<div>").text(currentQ.answers[1]).addClass("answer");
            $("#answersDiv2").html(newAnsDiv2);
            var newAnsDiv3 = $("<div>").text(currentQ.answers[2]).addClass("answer");
            $("#answersDiv3").html(newAnsDiv3);
            var newAnsDiv4 = $("<div>").text(currentQ.answers[3]).addClass("answer");
            $("#answersDiv4").html(newAnsDiv4);
        } else {
            console.log("Game over!");
            timeLeft = 0;
            $("#timerDiv").text("Time left: " + timeLeft);
            clearInterval(timer);
        }
        index++;
    // On click functions for answering questions
        $(".answer").click(function() {
            var choice = $(this).text();
        // Check clicked choice against correct answer
            if (choice === currentQ.cQuestion) {
            // Increment correctly answered question
                correctQ++;
                console.log("Correct!");
            } else {
            // Increment incorrectly answered question
                incorrectQ++;
                console.log("Wrong!");
            };
            buildQuestion();
            if (index > qArray.length) {
                $(".answer").off("click");
            }
        });
    };
    // Set timer equal to 15 seconds and...
        var timeLeft = 15;
    // ...define the countdown timer function
        var timer = setInterval(function() {
            $("#timerDiv").text("Time left: " + timeLeft);
            timeLeft--;
            if (timeLeft < 0) {
                incorrectQ++;
                console.log("Timeout!");
                buildQuestion();
            }
        }, 1000);
    }
// Call start game function on start button click
    $("#startBtn").click(function() {
        $(this).hide();
        startGame();
    });
});