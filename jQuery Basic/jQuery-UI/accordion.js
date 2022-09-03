$(document).ready(()=>{

    $('#accordion').accordion({
        collapsible: true,
        //event: "mouseenter",
        animate:200,
        heightStyle: true,
        //https://api.jqueryui.com/theming/icons/
        icons:{header:"ui-icon-plus",activeHeader:"ui-icon-minus"},
    });

});