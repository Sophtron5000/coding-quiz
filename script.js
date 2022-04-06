//GIVEN I am taking a code quiz
var timerEl = document.getElementById('timer');
// var time = questions.length * 15;
var myTimer = 120;
var questionIndex = 1

// WHEN I click the start button, (eventListener)
var start = document.querySelector('#start')
var mode = 'end quiz'
//120 sec. timer starts setTimer() (in code drills)
start.addEventListener('click', function startQuiz() {

    setInterval(function () {
        console.log(myTimer--)


        // display timer to the page every second as well so it shows up (start with a 
        //if statement to stop timer clearInterval
    }, 1000)
//getNextQuestion()
    //questions become visible(hidden numbered card activity) for loop array of questions

    // //if question is answered correctly (for loop + if else)
    // //present next question
    // //else subtract time from the clock 

})
// function question1(str) {
//                 document.getElementById("#question").innerHTML = "What does 'getElementByID' do?"
//                 document.getElementById('#answer1')
//             }
//             div.append(div)

//questions become visible(hidden numbered card activity) for loop array of questions
function question1(str) {
    document.getElementById("#question").innerHTML = "What does 'getElementByID' do?"
    document.getElementById('#answer1')
}
// //if question is answered correctly (for loop + if else)
// //present next question
// //else subtract time from the clock 



// function that starts the quiz and then it calls it calls the next function 
function startQuiz() {

    // start screen
    // hide screen
    // show your question screen 
    // start the timer 

    getNextQuestion()
}

function getNextQuestion() {
    var currentQ = questions[questionIndex]
        //questionIndex++

    // loop through your questions and check for right 
    currentQ.choices.forEach(function (choice, i) {

    })

}


//when timer runs out game over || all answers true (end of function or timer?)
//else log in local storage score(time left) + initials (formSubmission activity)

// startButton.onclick = startQuiz