//final grade equation interpreted from:
//https://www.rapidtables.com/calc/grade/final-grade-calculation.html

function calculate(){
  //get values from input boxes
  var currentGrade = Number(document.getElementById("currentgrade").value);
  var desiredGrade = Number(document.getElementById("desiredgrade").value);
  var finalWeight = Number(document.getElementById("finalweight").value);
  // percentage needed calculation
  var gradeNeeded = ((1*(desiredGrade/100)-(1-(finalWeight/100))*(currentGrade/100))/(finalWeight/100))*100;
  //if the variables do not result in NaN, display reult
  if(!isNaN(gradeNeeded))
  {
    //rounds number to whole percentage
    var rounded = Math.round(gradeNeeded)
    //display result in label
    document.getElementById("result").innerHTML = "Your grade needed is " + rounded + "%";
  }
}
