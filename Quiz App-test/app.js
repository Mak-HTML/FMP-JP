// ======= Firebase Config =======
var firebaseConfig = {
  apiKey: "AIzaSyAoIS84mC7GsKdST1nN6EvYtQNlgZ8j8lU",
  authDomain: "todoapp-23b52.firebaseapp.com",
  databaseURL: "https://todoapp-23b52-default-rtdb.firebaseio.com",
  projectId: "todoapp-23b52",
  storageBucket: "todoapp-23b52.appspot.com",
  messagingSenderId: "815803323559",
  appId: "1:815803323559:web:6f3f86153a02b257e4b782"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// ======= Quiz Data =======
var quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
    correct: 2
  },
  {
    question: "Which HTML tag is used to make text bold?",
    options: ["<b>", "<strong>", "<i>", "<em>"],
    correct: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-style", "font-style", "text-size", "font-size"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 2
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["src", "alt", "title", "longdesc"],
    correct: 1
  },
  {
    question: "Which property is used to change background color?",
    options: ["color", "background-color", "bgcolor", "background"],
    correct: 1
  },
  {
    question: "How do you make a list that lists the items with numbers?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: 1
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: 2
  },
  {
    question: "Which CSS property is used for controlling the layout?",
    options: ["display", "position", "float", "All of these"],
    correct: 3
  },
  {
    question: "How do you write a comment in CSS?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "' comment"],
    correct: 2
  }
];

// ======= Variables =======
var currentQuestion = 0;
var score = 0;
var timer;
var timeLeft = 30;
var userName = "";

// ======= Start Quiz =======
function startQuiz() {
  var input = document.getElementById("username");
  var name = input.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  userName = name;

  document.getElementById("start-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  loadQuestion();
  startTimer();
}

// ======= Timer =======
function startTimer() {
  clearInterval(timer);
  timeLeft = 30;

  timer = setInterval(function () {
    timeLeft--;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById("timer").innerText = "Time Left: " + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// ======= Load Question =======
function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    showResult();
    return;
  }

  document.getElementById("nextBtn").disabled = true;

  var questionData = quizData[currentQuestion];
  document.getElementById("question-number").innerText = "Question " + (currentQuestion + 1) + " of " + quizData.length;
  document.getElementById("question").innerText = questionData.question;

  var optionsForm = document.getElementById("optionsForm");
  optionsForm.innerHTML = "";

  for (var i = 0; i < questionData.options.length; i++) {
    var option = questionData.options[i];

    var optionWrapper = document.createElement("div");

    var input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = i;
    input.id = "option" + i;

    input.onclick = function () {
      document.getElementById("nextBtn").disabled = false;
    };

    var label = document.createElement("label");
    label.htmlFor = "option" + i;
    label.innerText = option;
    label.className = "option-label";

    optionWrapper.appendChild(input);
    optionWrapper.appendChild(label);
    optionsForm.appendChild(optionWrapper);
  }
}

// ======= Next Question =======
function nextQuestion() {
  var selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    if (parseInt(selected.value) === quizData[currentQuestion].correct) {
      score++;
    }
  }

  currentQuestion++;
  loadQuestion();
  startTimer();
}

// ======= Show Result =======
function showResult() {
  clearInterval(timer);
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "flex";
  document.getElementById("scoreText").innerText = "Hi " + userName + ", you scored " + score + " out of " + quizData.length + "!";

  var resultData = {
    name: userName,
    score: score,
    total: quizData.length,
    timestamp: new Date().toISOString()
  };

  database.ref('quizResults').push(resultData)
    .then(function () {
      console.log("Result saved successfully.");
      fetchAndLogResults();
    })
    .catch(function (error) {
      console.error("Error saving result:", error);
    });
}

// ======= Restart Quiz =======
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuestion();
  startTimer();
}

// ======= Fetch and Log All Results =======
function fetchAndLogResults() {
  database.ref('quizResults').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var result = childSnapshot.val();
      console.log("User:", result.name, "| Score:", result.score + "/" + result.total);
    });
  });
}
