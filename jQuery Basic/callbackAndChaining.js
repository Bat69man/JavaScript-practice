$(document).ready( ()=>{

    // CallBack method
    $("#btnCallback").click( ()=>{

        // #target will be faded in 2 seconds and after that we want to display a message that 'element is faded'

        // But it will display the message before element is faded completely.

        /*
            $('#target').fadeToggle(2000);
            alert("element is faded");

            We can fix it by callback method.
            Callback methods is a method we pass as the last parameter of the function.
            It is called automatically when the effect is 100% completed. So we write code inside it.

            i.e)
        */
        $('#target').fadeToggle(2000, ()=>alert("effect is over"));
    });

    // Chaining
    $('#btnChaining').click(()=>{
        // we can make chainnig of effects like this by concatinating effects using (.)
        $('#target').slideUp(1000).slideDown(1000).fadeOut(1000).fadeIn(1000);
    });
});