// once the HTML document is loaded then run code...
// we can use it instead of 'defer' attribute

$(document).ready( ()=>{

    // adding onclick event to element with id 'btnClick'
    $('#btnClick').click( ()=>{
        $('#target').slideToggle(200);
    });
});