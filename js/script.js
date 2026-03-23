console.log("script.js connected!");

//had to do objects so that they could carry on out of functions
let points_one = { points: 0 };
let points_two = { points: 0 };
let points_three = { points: 0 };

let one = document.querySelectorAll("#question-1 button");
let two = document.querySelectorAll("#question-2 button");
let three = document.querySelectorAll("#question-3 button");
// console.log(buttons);

question(one, points_one);
question(two, points_two);
question(three, points_three);

let result = document.getElementById("show-result");

// when the result button is pressed the function runs
result.addEventListener("click", displayResult);

function question(buttons, p) {
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // ensures the previously clicked button remains highlighted and stored
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            let answer = button.getAttribute("data-answer");

            if (answer === "pop") { // plus 4 points
                // change the object's value so it carries on after the function is finished
                p.points = 4;
            } else if (answer === "classical") { // plus 3 points
                p.points = 3;
            } else if (answer === "rock") { // plus 2 points
                p.points = 2;
            } else if (answer === "country") { // plus 1 point
                p.points = 1;
            }
        });
    });
}

function displayResult() {
    let total_points = points_one.points + points_two.points + points_three.points;

    container = document.getElementById("result-text");

    if (points_one.points === 0 || points_two.points == 0 || points_three.points === 0) { // failsafe for if the user tries to display result before the quiz is over
        container.textContent = "Do the quiz first to find out what music genre you are!";
    } else if (total_points >= 11) { // points between 12 - 11 means you're pop
        container.textContent = "You are Pop!";
    } else if (total_points >= 8) { // points between 10 - 8 means you're classical
        container.textContent = "You are Classical!";
    } else if (total_points >= 5) { // points between 7 - 5 means you're rock
        container.textContent = "You are Rock!";
    } else if (total_points >= 3) { // points between 4 - 3 means you're country
        container.textContent = "You are Country!";
    }

    //container.textContent = total_points;
    console.log(total_points); // just to make sure I can ensure the total is correct

    document.getElementById("result-container").style.display = "block";
}