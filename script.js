//GIVEN I am taking a code quiz
var timerEl = document.getElementById('timer');
// var time = questions.length * 15;
var myTimer = 1000 * 120;


// WHEN I click the start button, (eventListener)
var start = document.querySelector('#quiz')
var mode = 'end quiz'
//120 sec. timer starts setTimer() (in code drills)
start.addEventListener('click', function startQuiz() {

    var x = setInterval(function() {

        
    }
    timerEl.textContent = myTimer
    // setTimeout(timer, 1000 * 120);
    // document.getElementById('#timer')

    // function timer(timeStart){
    //     var timeStart = 12000
    //     for (var i = 120000, i =< timeStart.length; i--)
    // } timer[i]
    //questions become visible(hidden numbered card activity) for loop array of questions
    // function question1(str) {
    //     document.getElementById("#question").innerHTML = "What does 'getElementByID' do?"
    //     document.getElementById('#answer1')
    // }
    // div.append(div)
    // //if question is answered correctly (for loop + if else)
    // //present next question
    // //else subtract time from the clock 
    // setTimeout(quiz, 1000 * 120);
})

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


    // loop through your questions and check for right 
currentQ.choices.forEach(function(choice, i){

})

}


//when timer runs out game over || all answers true (end of function or timer?)
//else log in local storage score(time left) + initials (formSubmission activity)

// startButton.onclick = startQuiz