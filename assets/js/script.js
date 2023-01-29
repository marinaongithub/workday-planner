var current = $("#currentDay");
var hours = $(".hour");
var buttons = $("button");

var today;
var time;
var currTimeBlock;
var planned;
var timePlanned;


// Display the current day at the top of the calendar when a user opens the planner.
today = moment().format("dddd, MMMM DD");
current.text(today);


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
colorBlock();

// Save the event in local storage when the save button is clicked in that timeblock.
save();


function colorBlock() {

    // current hour
    time = moment(moment(), "hour");

    hours.each(function () {

        // current time block
        currTimeBlock = $(this).text().trim();

        // retrieve text from local storage
        currPlanned = localStorage.getItem($(this).text());

        // populate the corresponding text area
        $(this).siblings("textarea").val(currPlanned);

        // color code when time block is in the past
        if (moment(currTimeBlock, "hour").isBefore(time)) {
            $(this).parent().addClass("past");
        }

        // color code when time block is in the current hour
        else if (time === currTimeBlock) {
            $(this).parent().addClass("present");
        }
        // color code when time block is in the future
        else {
            $(this).parent().addClass("future");
        }
    })
}

function save() {
    buttons.on("click", function() {
        planned = $(this).siblings("textarea").val();
        timePlanned = $(this).siblings(".hour").text();

        localStorage.setItem(timePlanned, planned)
    })
}