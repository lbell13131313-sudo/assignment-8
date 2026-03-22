console.log("script.js connected!");

//let total_points = 0;
let points_one = 0;
let points_two = 0;

let one = document.querySelectorAll("#question-1 button");
let two = document.querySelectorAll("#question-2 button");
// console.log(buttons);

points_one = question(one);
points_two = question(two);


//const total_points = point_one + point_two;
//console.log(total_points);

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
                return 4;
            } else if (answer === "classical") { // plus 3 points
                return 3;
            } else if (answer === "rock") { // plus 2 points
                return 2;
            } else if (answer === "country") { // plus 1 point
                return 1;
            }
        });
    });
}
