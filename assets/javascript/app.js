$(document).ready(function() {

// Define question and answer combinations as objects
    var q1 = {
        question: "Which of these restaurant name are fake?",
        wAnswer1: "Alinea",
        wAnswer2: "Johnny Garlic's",
        wAnswer3: "Taco Bell",
        rAnswer: "Shama-lama ding-dong's Gyro Hut"
    };

    var q2 = {
        question: "Which of these restaurant name are fake?",
        wAnswer1: "Alinea",
        wAnswer2: "Johnny Garlic's",
        wAnswer3: "Taco Bell",
        rAnswer: "Shama-lama ding-dong's Gyro Hut"
    };

    var q3 = {
        question: "Which of these restaurant name are fake?",
        wAnswer1: "Alinea",
        wAnswer2: "Johnny Garlic's",
        wAnswer3: "Taco Bell",
        rAnswer: "Shama-lama ding-dong's Gyro Hut"
    };

    var q4 = {
        question: "Which of these restaurant name are fake?",
        wAnswer1: "Alinea",
        wAnswer2: "Johnny Garlic's",
        wAnswer3: "Taco Bell",
        rAnswer: "Shama-lama ding-dong's Gyro Hut"
    };

    var q5 = {
        question: "Which of these restaurant name are fake?",
        wAnswer1: "Alinea",
        wAnswer2: "Johnny Garlic's",
        wAnswer3: "Taco Bell",
        rAnswer: "Shama-lama ding-dong's Gyro Hut"
    };

// Place all the question objects into an array for indexing
    var qArray = [q1, q2, q3, q4, q5];

// Set timer equal to 15 seconds and...
    var timeLeft = 15;
// ...define the countdown timer function
    var timer = setInterval(function() {
        $("#timerDiv").text("Time left: " + timeLeft);
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
        };
    }, 1000);

});