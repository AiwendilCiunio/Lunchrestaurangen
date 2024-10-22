// TODO choose at random a weekday from an array. Display day name
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let number = Math.floor(Math.random() * 5)
let currentDay = days[number];
let root = document.getElementById("root");
let displayDay = document.createElement("h3");
displayDay.textContent = ("It is " + currentDay + " today.");
root.appendChild(displayDay);
// TODO switch to check which day it is. Display meal accordingly
let courses = ["Monday's soup", "Tuesday's lasagne", "Wednesday's pasta", "Thursday's pizza", "Friday's curry"];
let currentCourse = courses[number];
let displayCourse = document.createElement("h4");
displayCourse.textContent = ("Today's course is: " + currentCourse + ".");
root.appendChild(displayCourse);
