
// some DOM manipulation functions are...
// text(), html(), attr(), css()

$(document).ready(()=>{

    // get text
    $('#btnGetText').click(()=>{
        alert($('#p1').text());
    });

    // get html
    $('#btnGetHtml').click(()=>{
        alert($('#p1').html());
    });

    /*
        html() method also returns the text of the element.
        Difference is that it do not remove ant <tags> from the text.
        i.e)
            <div> 
                hello <b>Username</b>
            </div>  

        .text() => hello Username
        .html() => hello <b>Username</b>

        .html() is more useful while setting the text so we can use tags in there.
    */

    // set text .text('value')
    $('#btnSetText').click(()=>{
        $('#p1').text($('#text').val());
    });

    // set html .html('value')
    $('#btnSetHtml').click(()=>{
        $('#p1').html($('#text').val());
    });

    // get attributes of element .attr('attribute')
    $('#btnGetClass').click(()=>{
        alert("Class: "+$('#target').attr('class'));
    });

    // we can set attributes as well as css by adding one more parameter as a new value.

    // set attribute of element attr('attribute','newValue')
    $('#btnSetClass').click(()=>{
        $('#target').attr('class','red');
    });

    // get css values of element .css('property')
    $('#btnGetCSS').click(()=>{
        alert(
            "padding: "+$('#target').css('padding')+"\nborder: "+$('#target').css('border')
            +"\nmargin: "+$('#target').css('margin')
        );
    });

    // set css values of element css('property','newValue')
    $('#btnSetCSS').click(()=>{
        let property = $('#cssProperty').val();
        let value = $('#cssValue').val();

        if(property.trim()!="" && value.trim()!="")
            $('#target').css(property, value);
        else
            alert("invalid input");
    });
});