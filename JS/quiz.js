
Swal.fire("1: You have 30 minutes. <br> 2: You cant exit the quiz while you're playing. <br> 3: You'll get points on the basis of Correct Question. " );


// HTML QUIZ OBJECT
var htmlCssQuiz = [
  {
    que: "What does HTML stand for?",
    ans1: "Hyper Text Markup Language",
    ans2: "How to meet Ladies",
    ans3: "Hyperlink and Text Markup Language",
    ans4: "Home Tool Markup Language",
    anskey: "Hyper Text Markup Language",
  },
{
  que: "  Represents the last section of the page?",
  ans1: "< header >",
  ans2: "< last >",
  ans3: "< footer >",
  ans4: "< navbar >",
  anskey: "< footer >",
},
{
  que: " In which section or part of an HTML document is the meta tag typically located? ",
  ans1: "The Last Page",
  ans2: "Any Page",
  ans3: "Second page",
  ans4: "Third Page",
  anskey: "Any Page",
},

{
  que: "How many sizes of headers are available in HTML by default?",
  ans1: "2",
  ans2: "3",
  ans3: "6",
  ans4: "4",
  anskey: "6",
},


{
  que: "We enclose HTML tags within?  ",
  ans1: "<>",
  ans2: "{}",
  ans3: "[]",
  ans4: "!!",
  anskey: "<>",
},
{
  que: "Which of the following tags doesn’t require a closing tag? ",
  ans1: "< br >",
  ans2: "< hr >",
  ans3: "Both A and B",
  ans4: "None of the above",
  anskey: "Both A and B",
},
  {
    que: "Who is Making the Web Standards?",
    ans1: "The World Wide Web Consortium",
    ans2: "Google",
    ans3: "Microsoft",
    ans4: "IBM",
    anskey: "The World Wide Web Consortium",
  },

  {
    que: "What is div element?",
    ans1: "its called box",
    ans2: "its heading",
    ans3: "its called border",
    ans4: " its called container",
    anskey: "its called container",
  },
    
    {
      que: "How do you insert a comment in a CSS file?",
      ans1: "'this is comment",
      ans2: "//this is a comment",
      ans3: "......this is a comment",
      ans4: "/* this is a comment */ ",
      anskey: "/* this is a comment */ ",
    },
    {
      que: "What is the correct HTML Element for inserting a line Break",
      ans1: "break",
      ans2: "< Ib >",
      ans3: "< break >",
      ans4: "< br > ",
      anskey: "< br > ",
    },
    {
      que: "How can you make a numbered list ?",
      ans1: "< list >",
      ans2: "< ol >",
      ans3: "< dl >",
      ans4: "< ul >",
      anskey: "< ol >",
    },
    {
      que: "What is the difference between HTML and CSS?",
      ans1: "CSS is one type of HTML",
      ans2: "HTML gives a webpage structure. CSS provides styling.",
      ans3: "There is no difference.",
      ans4: "CSS structures a webpage. HTML strictly provides styling.",
      anskey: "HTML gives a webpage structure. CSS provides styling.",
    },
    {
      que: "Which of the following property is used to set the text direction?",
      ans1: "color",
      ans2: "direction",
      ans3: "letter-spacing",
      ans4: "word-spacing",
      anskey: "direction",
    },
    {
      que: "Which of the following property changes the color of bottom border?",
      ans1: "border-color",
      ans2: "border-width",
      ans3: "border-style",
      ans4: "border-bottom-color",
      anskey: "border-bottom-color",
    },
    {
      que: "Which of the following property is used to set the width of an image border?",
      ans1: "border",
      ans2: "height",
      ans3: "width",
      ans4: "moz-opacity",
      anskey: "width",
    },

    {
      que: "How to resize a background image using CSS3?",
      ans1: "bg-dimensions: 80px 60px;",
      ans2: "background-size: 80px 60px;",
      ans3: "background-proportion: 80px 60px;",
      ans4: "alpha-effect: bg-resize 80px 60px;",
      anskey: "background-size: 80px 60px;",
    },
    {
      que: "What is used to signify a closing tag?",
      ans1: ":",
      ans2: "/",
      ans3: "*",
      ans4: "$",
      anskey: "/",
    },
    {
      que: "Which tag makes bold text ?",
      ans1: "< bold >",
      ans2: "< strong >",
      ans3: "< bigtext > ",
      ans4: "< big >",
      anskey: "< strong >",
    },
    {
      que: "What does CSS Stand for",
      ans1: "Creative Style Sheets",
      ans2: "Computer Style Spread",
      ans3: "Colorful Style Spread",
      ans4: "Cascading Style Sheets",
      anskey:"Cascading Style Sheets"
    },
    {
      que: "    Which attribute is used to provide a unique name to an HTML element?",
      ans1: "id",
      ans2: "class",
      ans3: "type",
      ans4: "None of above",
      anskey:"id",
    },
];

// target my question and input elements

var question = document.getElementById("question");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var answer = document.getElementsByClassName("answer");
var time = document.getElementById('time');

//     target result div elements
var resultTag = document.getElementById("announcement");
var totalQuestion = document.getElementById("totalQuestionResult");
var correctQuestion = document.getElementById("correctQuestionResult");
var resultSection = document.getElementById("result");
var quizContainer = document.getElementById("quiz");

// question count and score count
var questionCount = 0;
var score = 0;

// initiate queston function
function initiateQuize() {
  question.innerHTML = ` Q :${htmlCssQuiz[questionCount].que}`;
  option1.innerHTML = htmlCssQuiz[questionCount].ans1;
  option2.innerHTML = htmlCssQuiz[questionCount].ans2;
  option3.innerHTML = htmlCssQuiz[questionCount].ans3;
  option4.innerHTML = htmlCssQuiz[questionCount].ans4;

  ans1.value = htmlCssQuiz[questionCount].ans1;
  ans2.value = htmlCssQuiz[questionCount].ans2;
  ans3.value = htmlCssQuiz[questionCount].ans3;
  ans4.value = htmlCssQuiz[questionCount].ans4;
}

// initiate question as window load
window.onload = initiateQuize();

function deSelect() {
  for (var i = 0; i < answer.length; i++) {
    answer[i].checked = false;
  }
}

// Next Function to check the current answer and change the question
function nextQuestion() {
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      // checking the checked /selected option by the user
      if (answer[i].value === htmlCssQuiz[questionCount].anskey) {
        score++; // if answer is okay so score will be plus 1
      }
    }
  }

  //  next question to display
  questionCount++;

  // checking the questions length in provided data above in array
  if (questionCount < htmlCssQuiz.length) {
    deSelect();
    initiateQuize();
  } else {
       showResult()
   
}

 
  }

  function showResult(){
    var percentage = (score / htmlCssQuiz.length) * 100; // calculating percentage
    console.log(
      "Your final score is " + score + " and percentage is " + percentage
    );

    // hiding quiz container and display result container
    time.style.display ="none"
    quizContainer.style.display = "none";
    resultSection.style.display = "block";
    totalQuestion.innerHTML = htmlCssQuiz.length;
    correctQuestion.innerHTML = score;

    // result css based on percentage
    if (percentage < 70) {
      resultTag.innerHTML = `You Failed <br> Better Luck Next Time <br> Your Percentage is : ${percentage.toFixed(0)}% `;
      resultTag.classList.add("text-danger");
    } else {
      resultTag.innerHTML = `Congratulations <br>You Passed <br> Your Percentage is : ${percentage.toFixed(0)}%`;
      resultTag.classList.add("text-success");
    }
  }
  

  
var timer = 30*60;


setInterval(showTime, 1000);

function showTime() {
    var min = Math.floor(timer / 60);
    var seconds = timer % 60;


    time.innerHTML = `${min}:${seconds}`;
    timer--
    if (timer < 0){
        clearInterval(setInterval)
        showResult()
    }
}
