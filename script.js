// Resizable html-panel
$(function() {
    $('#html-panel').resizable();
});

// Toggles colors on buttons when hovering
$('.toggle-button').hover(function() {
    $(this).addClass('highlighted-button');
}, function () {
    $(this).removeClass('highlighted-button');
});

// When buttons are clicked, add/remove active class
$('.toggle-button').click(function() {
    $(this).toggleClass('active');
})

// Sets the height of the panels
$('#html-panel').height($('window').height() - $('#navbar').height());

// Capture changes in html-panel
$('textarea').on('change keyup paste', function() {
    // Change html of output-panel iframe
    $("#output-panel").contents().find("html").html($('#html-panel').val());
});