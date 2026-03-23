console.log("script.js connected!");

//let total_points = 0;
let points_one = 0;
let points_two = 0;
let points_three = 0;

let points = 0;

let one = document.querySelectorAll("#question-1 button");
let two = document.querySelectorAll("#question-2 button");
let three = document.querySelectorAll("#question-3 button");
// console.log(buttons);

points_one = question(one);
points_two = question(two);
points_three = question(three);


//const total_points = point_one + point_two;
//console.log(total_points);

let result = document.getElementById("show-result");

result.addEventListener("click", displayResult());

function question(buttons) {
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // ensures the previously clicked button remains highlighted and stored
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            let answer = button.getAttribute("data-answer");

            if (answer === "pop") { // plus 4 points
                points = 4;
            } else if (answer === "classical") { // plus 3 points
                points = 3;
            } else if (answer === "rock") { // plus 2 points
                points = 2;
            } else if (answer === "country") { // plus 1 point
                points = 1;
            }
        });
    });

    return points;
}

function displayResult() {
    let container = document.getElementById("result-container");
    let total_points = points_one + points_two + points_three;
    console.log(total_points);
}