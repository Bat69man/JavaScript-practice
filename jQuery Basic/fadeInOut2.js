function fadeToggle(){
    
    $("#firstdiv, p, div > ol").fadeToggle(1000);

    // hides first <p> only
    // $("p:first").fadeToggle(1000);

    // hides first .class element only
    // $(".mydivs:first").fadeToggle(1000);

    /*
        more examples:
            -$("li:odd").fadeToggle(1000);
            -$("div:even").fadeToggle(1000);

        More selecctors: https://www.w3schools.com/jquery/jquery_selectors.asp
    */
}