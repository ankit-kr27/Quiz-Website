// first we're gonna decide the workflow of our game
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.querySelector("#question-container");
const questionElement = document.querySelector('.question');
const answerButtonsElement = document.querySelector("#answer-buttons")

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    // console.log("Started");
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=>{
        return Math.random()-0.5;
        // the sort function sorts the array in a certain way depending upon the sign of the number that the function returns.
    })
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        answerButtonsElement.appendChild(button)
        button.addEventListener('click', selectAnswer)
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){ // this returns either none or the first child if it exists.
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;    // it returns the element where the event occurred.
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = 'Restart'
        nextButton.classList.add('hide');
        startButton.classList.remove('hide')
        
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Which is the best Domain?',
      answers: [
        { text: 'Web Development', correct: true },
        { text: 'Artificial Intelligence', correct: true },
        { text: 'Blockchain', correct: true },
        { text: 'App Development', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]

  // these are some of the changes that I made to practice github
  console.log("Version 2")
  console.log("Made by Ankit Kumar")
  // Hehe some more changes ....