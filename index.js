var readlineSync = require('readline-sync')
var chalk = require('chalk')

console.log(chalk.bgBlue.bold("Welcome to the HARRY POTTER QUIZ!"));
var userName = readlineSync.question(chalk.bgBlue.bold("Enter your name to begin playing: "))
console.log(chalk.bgBlue.bold("Let's get started ",userName,"\n Select the correct option for the questions ahead \n You gain a point for correct answer & lose a point for wrong answer\n"))


var questions =[
  {
    question: "Who is the author of Harry Potter?",
    options:["J.K.Rowling","Steve","Henry","Goldilocks"],
    answer: "J.K.Rowling"
  },
  {
    question: "How many total Harry Potter books are there? ",
    options:["3","2","4","7"],
    answer: "7"
  },
   {
    question: "Who killed Nagini? ",
    options:["Ron","Harry","Hermione","Neville"],
    answer: "Neville"
  },
  {
    question: "Snape was the headmaster of which house? ",
    options:["Griffindor","Slytherin","Hufflepuff","Ravenclaw"],
    answer: "Slytherin"
  },
  {
    question: "How many Weasely Brothers were there in total?",
    options:["5","4","6","7","3"],
    answer: "6"
  },
  {
    question: "What was the first horcrux that was destroyed?",
    options:["Riddle's Diary","Phiilosopher's stone","Diadem","Salazar Slytherine's ring"],
    answer: "Riddle's Diary"
  },
  {
    question: "In which book does Professor Snape teach Defence Against the Dark Arts",
    options:["3","1","5","6"],
    answer: "6"
  },
  {
    question: "Who died as a free elf",
    options:["Toby","Doby","Winky","Tinky"],
    answer: "Doby"
  },
  {
    question: "Who betrayed James Potter?",
    options:["Snape","Peter Pettigrew","Remus Lupin","Sirius"],
    answer: "Peter Pettigrew"
  },
  {
    question: "in the 5th book, Who's charachter is more detested than Snape & Voldemort?",
    options:["Grubby Plank","Hagrid","Minerva","Dolores Umbridge"],
    answer: "Dolores Umbridge"

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
    console.log(chalk.bgRed.bold("That's incorrect!!"))
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
  console.log(chalk.bgGreen.bold("Congratulations! \nYou are the highest Scorer!"))
}