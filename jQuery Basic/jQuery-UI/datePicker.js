$(document).ready(function () {
    
    //$('#datePicker').datepicker();

    // we can also apply predifined properties of date-picker {} braces

    $('#datePicker').datepicker({
        //numberOfMonths: 2,
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        minDate: new Date(2015,0,1), // here in the Date(), month starts form 0
        maxDate: new Date(), // current date
    });

});