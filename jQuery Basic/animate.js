var flag = true;
$(document).ready( ()=>{

    $('#btnAnimate').click( ()=>{
        // syntax of animate function is..
        // it takes 3 parameters
        // 1) in {} braces, we apply CSS changes to be made
        // 2) milliseconds for smooth transition
        // 3) callback [optional]
        if(flag){
            $('#cube').animate({
                left: '40%',
                width: '200px',
            }, 700);
            flag = false;
        }
        else{
            $('#cube').animate({
                left: '8px',
                width: '100px',
            }, 700);
            flag = true;
        }
    });
});