
var tasks = {
    time: [],
    text: []
};

var createTask = function () {
    $("textarea").blur(funtion() {
    time = $(this("task-time")),
    text = $(this("text-area"))
    tasks.push({
        time: time,
        text: text
    })
    });
    saveTasks();
};


    // $(".input-group").on("click", ".btn", function() {
    
    //     var text = $(this)
    //     .text()
    //     .trim();
    //     var textInput = $("textarea")
    //         .val(text);
    //         $(this).replaceWith(textInput);
    //         tasks.push({
    //             text: textInput
    //         });
    //         saveTasks();
    //         });
       




// $(".btn").on("click", function() {
//     var taskText = $("this")
//         .text()
//         .trim();
//     var textInput = $("<textarea>")
//         .addClass("form-control")
//         .text();
//         $(this).replaceWith(textInput);
        
//         saveTasks();
// });

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}


loadTasks();