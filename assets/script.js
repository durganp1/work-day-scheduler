
$(document).ready(function() {

    $("#container").on("click", "#save-button", function() {
        var task = $(this).siblings(".form-control").val();
        var time = $(this).siblings(".form-control").attr("id");

        localStorage.setItem(time, task);
        
    });

    var scheduleHandler = function() {
        var currentTime = moment().hours();
        $(".form-control").each(function() {
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

   
    $("#8").val(localStorage.getItem("8"));
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));



$("#currentDay").text(moment().format("dddd, MMMM Do"));

});

