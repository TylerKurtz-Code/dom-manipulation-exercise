// Task 1
document.getElementById("task1").innerText = "Changed using 'innerText'.";

// Task 2
document.getElementById("task2").innerHTML = "<button>Submit</button>";

// Task 3
document.body.style.backgroundColor = "#232323";

// Task 4
const items = document.querySelectorAll(".item");

items.forEach(function(item) {
    item.style.border = "1px solid black";
});

// Task 5
document.getElementById("task5").href = "https://www.springboard.com/";

// Task 6
document.getElementById("task6").value = "DOM Master";

// Task 7
document.getElementById("task7").classList.add("new-class");

// Task 8
const button = document.createElement("button");
button.innerText = "Click Me";
document.getElementById("task8").appendChild(button);

// Task 9
document.getElementById("task9").remove();