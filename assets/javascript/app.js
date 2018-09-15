$(document).ready(function() {
// Hide body except for start button

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
        buildQuestion();
// Loop through object to present each question
    function buildQuestion() {
        timeLeft = 15;
        index++;
        if (index < qArray.length) {
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
        } else {
            console.log("Game over!");
            timeLeft = 0;
            $("#timerDiv").text("Time left: " + timeLeft);
            clearInterval(timer);
        }
    // Shuffle the order of the div elements in the answer row
    
    // On click functions for answering questions
        $(".answer").click(function() {
        // If incorrect choice is chosen
            if ($(this).hasClass("incorrect")) {
            // Increment incorrectly answered question 
                incorrectQ++;
                console.log("Wrong!");
            } else {
            // Increment correctly answered question
                correctQ++;
                console.log("Correct!");
            };
            buildQuestion();
        });
    }
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