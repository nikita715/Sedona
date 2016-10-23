$(document).ready(function(){
    $('#search-opener').click(function() {
        form = $('#search-hotel-form');
        if (form.css('display') != 'flex') {
            form.css('display', 'flex');
        } else {
            form.css('display', 'none');
        }
    });
    $('#minus-adult').click(function() {
        var $i = $('#adults').attr('value') - 1;
        if ($i >= 1)
            $('#adults').attr('value', $i);
    });
    $('#plus-adult').click(function() {
        var $i = parseInt($('#adults').attr('value')) + 1;
        $('#adults').attr('value', $i);
    });
    $('#minus-child').click(function() {
        var $i = $('#children').attr('value') - 1;
        if ($i >= 0)
            $('#children').attr('value', $i);
    });
    $('#plus-child').click(function() {
        var $i = parseInt($('#children').attr('value')) + 1;
        $('#children').attr('value', $i);
    });
});
