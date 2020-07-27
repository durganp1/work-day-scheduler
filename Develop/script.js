
$(document).ready(function() {

    $("#container").on("click", "#save-button", function() {
        var task = $(this).siblings("#textarea").val();
        var time = $(this).parent(".input-group").attr("id");

        localStorage.setItem(time, task);
        
    });

    var scheduleHandler = function() {
        var currentTime = moment().hours();
        $(".input-group").each(function() {
            var hourBlock = parseInt($(this).attr("id"));
            if (hourBlock < currentTime) {
                $(this).addClass("past")
            } else if (hourBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };
    scheduleHandler();

    var refreshTimer = setInterval(scheduleHandler, 60000);

   
    $("#8 .form-control").val(localStorage.getItem("8"));
    $("#9 .form-control").val(localStorage.getItem("9"));
    $("#10 .form-control").val(localStorage.getItem("10"));
    $("#11 .form-control").val(localStorage.getItem("11"));
    $("#12 .form-control").val(localStorage.getItem("12"));
    $("#13 .form-control").val(localStorage.getItem("13"));
    $("#14 .form-control").val(localStorage.getItem("14"));
    $("#15 .form-control").val(localStorage.getItem("15"));
    $("#16 .form-control").val(localStorage.getItem("16"));
    $("#17 .form-control").val(localStorage.getItem("17"));



$("#currentDay").text(moment().format("dddd, MMMM Do"));

});
