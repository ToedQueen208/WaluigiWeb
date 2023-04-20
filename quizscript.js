console.log("hello");

function finishFunction(){
    alert("Thank you for completing the quiz");

}

function checkAnswers(){
    var score = 0;

    //assign the quiz elements to the quiz variable    
    quiz = document.forms.Quiz.elements;
    
    //"growth is the label we assigned to the questions"
    answer1 = quiz.growth.value;
    if (answer1 == "70%") {
                score += 1;
    }
    answer2 = quiz.talent.value;
    if (answer2 == "50") {
        score = score + 1;

    }
    userName= quiz.name.value;

    alert("well done " +  userName + " your score was " + score);

}