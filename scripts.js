//final grade equation interpreted from:
//https://www.rapidtables.com/calc/grade/final-grade-calculation.html

function calculate(){
  //get values from input boxes and converts them to number
  var currentGrade = Number(document.getElementById("currentgrade").value);
  var desiredGrade = Number(document.getElementById("desiredgrade").value);
  var finalWeight = Number(document.getElementById("finalweight").value);
  // percentage needed calculation
  var gradeNeeded = ((1*(desiredGrade/100)-(1-(finalWeight/100))*(currentGrade/100))/(finalWeight/100))*100;
  //if the variables do not result in NaN, display reult
  if(!isNaN(gradeNeeded)){
    //rounds number to whole percentage
    var rounded = Math.round(gradeNeeded)
    //display result in a pop up and then label
    document.getElementById("result").innerHTML = "Your grade needed is " + rounded + "%";
    alert("Your grade needed is " + rounded + "%");
  }
}

function save(){
  var currentGrade = Number(document.getElementById("currentgrade").value);
  var desiredGrade = Number(document.getElementById("desiredgrade").value);
  var finalWeight = Number(document.getElementById("finalweight").value);
  var gradeNeeded = ((1*(desiredGrade/100)-(1-(finalWeight/100))*(currentGrade/100))/(finalWeight/100))*100;
  if(!isNaN(gradeNeeded)){
    var rounded = Math.round(gradeNeeded)
  }
  var query = {
    current: currentGrade,
    desired: desiredGrade,
    weight: finalWeight,
    result: rounded,
  }
  //gets user input to name query and saves it into localstorage 
  var subject = prompt("What would you like to name this query?", "Subject Code");
  window.localStorage.setItem(subject, JSON.stringify(query));

  var retrievedQuery = JSON.parse(localStorage.getItem("saveresult"));
}
