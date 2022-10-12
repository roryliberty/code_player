// Change html of output-panel iframe
function updateOutput() {
    $("#output-panel").contents().find("html").html("<html><head><style type='text/css'>" +
        $('#css-panel').val() + "</style></head><body>" + $('#html-panel').val() +
        "</body></html>");

    document.getElementById('output-panel').contentWindow.eval($('#js-panel').val());
}

// Update the output-panel on load
updateOutput();

// Toggles colors on buttons when hovering
$('.toggle-button').hover(function() {
    $(this).addClass('highlighted-button');
}, function () {
    $(this).removeClass('highlighted-button');
});

// When buttons are clicked, add/remove active class
$('.toggle-button').click(function() {
    let panelId = $(this).attr('id') + '-panel';

    $(this).toggleClass('active-btn');
    $(this).removeClass('highlighted-button');
    $('#' + panelId).toggleClass('active-panel');
    $('#' + panelId).toggle();
})

// Sets the height of the panels
$('#html-panel').height($('window').height() - $('#navbar').height());

// Capture changes in panels
$('textarea').on('change keyup paste', function() {
    updateOutput();
});