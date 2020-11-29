var readlineSync = require('readline-sync')
var chalk = require('chalk')

console.log(chalk.bgBlue.bold("Welcome to the NEOGCAMP BOOTCAMP QUIZ!"));
var userName = readlineSync.question(chalk.bgBlue.bold("Enter your name to begin playing: "))
console.log(chalk.bgBlue.bold("Let's get started ",userName,"\n Select the correct option for the questions ahead \n You gain a point for correct answer & lose a point for wrong answer\n"))


var questions =[
  {
    question: "On which day did NEOGCAMP lesson 1 start?",
    options:["On Monday","On Diwali","On Wednesday","On Christmas"],
    answer: "On Diwali"
  },
  {
    question: "How many levels are there in NEOGCAMP? ",
    options:["3 levels","2 levels","4 levels","5 levels"],
    answer: "2 levels"
  },
   {
    question: "Who can participate in this BOOTCAMP? ",
    options:["Everyone","Kids","Superheroes only","Turtles"],
    answer: "Everyone"
  },
  {
    question: "What are the fees to attend level 0 lessons? ",
    options:["10 Bananas","20 Apples","1 packet cashews","Its FREE!"],
    answer: "Its FREE!"
  },
  {
    question: "What do you need to do to qualify to enter level 1?",
    options:["Complete 8 action points of the 9 point system","Simply attend the lectures","Simply follow the Instagram handle","Its FREE access to level 2"],
    answer: "Complete 8 action points of the 9 point system"
  },
  {
    question: "Where do you get all updates about the BOOTCAMP?",
    options:["Discord Channel","Instagram Handle","Telegram Channel","All of the above"],
    answer: "All of the above"
  },
  {
    question: "How many Assignments do you need to submit as part of lesson 1",
    options:["3","1","5","2"],
    answer: "2"
  },
  {
    question: "The duration of level one is for how many weeks?",
    options:["3","4","5","2"],
    answer: "4"
  },
  {
    question: "NEOGCAMP's goal is to teach?",
    options:["Marketing","Machine Learning","Maths","Basics of Programming,Javascript,Git&Github,React & Web Development"],
    answer: "Basics of Programming,Javascript,Git&Github,React & Web Development"
  },
  {
    question: "How many toy apps will you end up building as part of level 0",
    options:["8","4","5","2"],
    answer: "8"

  }

]
var highest_score = {
  name: "Radhika",
  points:"10"
}
var score=0;
function play(question,options,answer){
  var index = readlineSync.keyInSelect(options,question)
  var userAnswer = options[index]
  if(userAnswer===answer)
  {
    score=score+1
    console.log(chalk.bgGreen.bold("Correct!\n Your Score: ",score))

  }
  else{
    score=score-1
    console.log(chalk.bgRed.bold("That's incorrect! Visit https://neog.camp/ to learn more!"))
  }
}

for(var i=0;i<questions.length;i++){
  var currentquestion = questions[i]
  play(currentquestion.question,currentquestion.options,currentquestion.answer)
}
if(score<highest_score.points){
  console.log(chalk.bgPink.bold("Your Total Score: ",score," is less than the highest score: ",highest_score.points))
}
else{
  console.log(chalk.bgGreen.bold("Congratulations! \nYou are the highest Scorer & are well informed about the NEOGCAMP BOOTCAMP"))
}