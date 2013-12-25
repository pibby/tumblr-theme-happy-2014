$(document).ready(function() {
    
    // Toggle mobile navigation
    $('#mobilenav').on('click', function (e) {
        e.preventDefault();
        $('#nav').toggle('fast');
        $(this).toggleClass('expanded');
        return false;
    });

});