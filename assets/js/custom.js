/*
	JavaScript introduced by Marcel Moosbrugger additionally to the theme's JS
*/

$('.mail-me').click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    let location = 'mailto:' + X[0] + '@' + X[1];
    window.location.href = location;
});