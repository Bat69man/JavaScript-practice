
// some DOM manipulation functions are...
// append(), prepend(), after(), before()

$(document).ready(()=>{

    // append() - inserts content at the end of the selected element
    $('#btnAppend').click(()=>{ 
        $('#target').append("<p>Do you bleed...?</p>");
    });

    // prepend() - inserts content at the begining of the selected element
    $('#btnPrepend').click(()=>{ 
        $('#target').prepend("<p>Why so serious ?</p>");
    });

    // after() - inserts content after end(outside) of the selected element.
    $('#btnAfter').click(()=>{ 
        $('#target').after("<p>Why i am outside the box ?</p>");
    });

    // before() - inserts content before start(outside) of the selected element.
    $('#btnBefore').click(()=>{ 
        $('#target').before("<p>I am at the top..</p>");
    });

    // empty() - removes whole content from inside selected element.
    $('#btnEmpty').click(()=>{ 
        $('#target').empty();
    });

    // remove() - removes whole element.
    $('#btnRemove').click(()=>{ 
        $('#target').remove();
    });

    // $('tag_name').remove('#id, #id...') - removes specific elements using css selectors
    $('#btnRemoveElement').click(()=>{
        let tag = $('#tagName').val();
        let selector = $('#selector').val();
        alert(tag+"\n"+selector);
        $(tag).remove(selector);
    });
});