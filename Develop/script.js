
var tasks = [{
    text: [],
    time: []
}];

//var tasksObj = JSON.parse(localStorage.getItem("tasksObj")) || [];

var createTasks = function(taskTime, taskText) {
    //debugger;
    var taskNumber = 0;
    for (i=0; i<(tasks.time).length; i++) {
    var taskTimeEl = $("#task-time").text();
    var taskTextEl = $("#textarea").val();
    console.log(taskTimeEl);
    console.log(taskTextEl);
    taskNumber++;
    }
};

createTasks();

// $("#container").on("click", "#textarea",function() {
//     var taskText = $("#textarea")
//         .val();
//     var taskDate = $("#task-time")
//         .text();
//         console.log(taskText);
//         console.log(taskDate);
//         tasks.push({
//             text: taskText,
//             date: taskDate
//         });
//         saveTasks();
//       });




// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasksObj"));
//     if (!tasks) {
//         tasks = {
//             toDo: []
//     };
// }
// $.each(tasks, function(list,array))

// loadTasks();