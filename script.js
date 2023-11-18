//SaveBtn id's added to each save button  **future use?
// const $saveBtn9 = $("#saveBtn9");
// const $saveBtn10 = $("#saveBtn10");
// const $saveBtn11 = $("#saveBtn11");
// const $saveBtn12 = $("#saveBtn12");
// const $saveBtn13 = $("#saveBtn13");
// const $saveBtn14 = $("#saveBtn14");
// const $saveBtn15 = $("#saveBtn15");
// const $saveBtn16 = $("#saveBtn16");
// const $saveBtn17 = $("#saveBtn17");



$(document).ready(function() {

    function displayCurrentDate() {
        $("#currentDay").text(dayjs().format('dddd, MMMM, D, YYYY' + "  |  "  + dayjs().format('HH:mm [a] ')));
    }



//update the time blocks
    function updateTimeBlocks() {
        // Get the current hour using dayjs
        var currentHour = dayjs().hour();

        // Iterate over each time-block
        $(".time-block").each(function() {
            var blockHour = parseInt(this.id.split("-")[1]);

            // Select the textarea and remove any time-related classes
            var textarea = $(this).find("textarea");
            textarea.removeClass("past present future");

            // Determine and add the appropriate class based on time comparison
            if (blockHour < currentHour) {
                textarea.addClass("past");
            } else if (blockHour === currentHour) {
                textarea.addClass("present");
            } else {
                textarea.addClass("future");
            }
        });
    }


    // Initialize event listeners on save buttons
    $('.saveBtn').click(function() {
        // Find the parent time-block div and get its ID
        var timeBlockId = $(this).closest('.time-block').attr('id');

        // Get the user input from the textarea
        var userInput = $(this).siblings('.description').val();

        // Save the data in local storage
        localStorage.setItem(timeBlockId, userInput);
        console.log(timeBlockId, userInput);
    });



// Retrieving storage
function loadStorage() {
    var value = localStorage.getItem('id'); // 'myValue'


    var storedObject = localStorage.getItem('userInput');
    if (storedObject) {
        storedObject = JSON.parse(storedObject); // { name: 'John', age: 30 }
    }
}




displayCurrentDate();
loadStorage();
updateTimeBlocks();
});

