document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);



function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let buttonRefresh = document.querySelector(".refresh");
  let displayResult = document.querySelector(".displayResult");
  let q1Input = document.querySelector(".q1");
  let q2Input = document.querySelector(".q2");
  let q3Input = document.querySelector(".q3");
  let q4Input = document.querySelector(".q4");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imageSrc;
  let score1;
  let score2;
  let score3;
  let score4;

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let answer1 = q1Input.value.trim();
    let answer2 = q2Input.value.toUpperCase().trim();
    let answer3 = q3Input.value.trim();
    let answer4 = q4Input.value.trim();

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (answer1 >= 0 && answer1 < 420) {
      score1 = 1;
    } else if (answer1 >= 420 && answer1 < 1200) {
      score1 = 2;
    } else if (answer1 >= 1200 && answer1 < 1800) {
      score1 = 3;
    } else {
      score1 = 4;
    }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (answer2 === "DOGS") {
      score2 = 1;
    } else if (answer2 === "CATS") {
      score2 = 2;
    } else if (answer2 === "BIRDS") {
      score2 = 3;
    } else {
      score2 = 4;
    }



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (answer3 >= 1 && answer3 < 3) {
      score3 = 1;
    } else if (answer3 >= 3 && answer3 < 5) {
      score3 = 2;
    } else if (answer3 >= 5 && answer3 < 10) {
      score3 = 3;
    } else if (answer3 >= 10) {
      score3 = 4;
    } else {
      score3 = 0;
    }



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    if (answer4 >= 0 && answer4 < 19) {
      score4 = 1;
    } else if (answer4 >= 19 && answer4 < 31) {
      score4 = 2;
    } else if (answer4 >= 31 && answer4 < 46) {
      score4 = 3;
    } else {
      score4 = 4;
    }

    let totalScore = score1 + score2 + score3 + score4;
    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore >= 4 && totalScore < 8) {
      displayResult.innerHTML = "You are a watch-clock!" + "<img src=\'./images/wall-clock-on-wrist-1024x578-1.jpg\' width=\'400px\' height=\'700px\'>";
    } else if (totalScore >= 8 && totalScore < 12) {
      displayResult.innerHTML = "You are a pocket watch!" + "<img src=\'./images/pocketwatch.jpg\' width=\'400px\' height=\'700px\'>";
    } else if (totalScore >= 12 && totalScore < 16) {
      displayResult.innerHTML = "You are a cool G-Shock!" + "<img src=\'./images/MRGG1000RT-1A.jpg\' width=\'400px\' height=\'700px\'>";
    } else if (totalScore >= 16) {
      displayResult.innerHTML = "You are a massive watch!" + "<img src=\'./images/Musk-watch.jpg\' width=\'400px\' height=\'700px\'>";
    } else {
      displayResult.innerHTML = "You should buy some shoes." + "<img src=\'./images/download.jpeg\' width=\'400px\' height=\'700px\'>";
    }
    if (totalScore >= 3) {
      buttonRefresh.style.display = "block";

    }



  };
  buttonRefresh.onclick = function() {
    window.location.reload();
  };
}