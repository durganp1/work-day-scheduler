
var tasks = {
    text: "",
    date: ""
};

var tasksObj = JSON.parse(localStorage.getItem("tasksObj")) || [];


    

$("#task-wrapper").on("click", "span",function() {
    var taskText = $("textarea")
        .val();
    var taskDate = $("#task-time")
        .text();
        console.log(taskText);
        console.log(taskDate);
        tasks.push({
            text: taskText,
            date: taskDate
        });
        saveTasks();
      });




var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasksj));
};

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasksObj"));
//     if (!tasks) {
//         tasks = {
//             toDo: []
//     };
// }
// $.each(tasks, function(list,array))

// loadTasks();