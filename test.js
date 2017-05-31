$(document).ready(function () {
    
    $('[data-transition-fade-in-and-out]').each(setUpTransitionChildWidth);
    
    $('[data-transition-fade-in-and-out]').click(transitionInOrOut);

});

$(window).resize(function () {
    $('[data-transition-fade-in-and-out]').each(setUpTransitionChildWidth);
});

// update 30% width on page resize
function setUpTransitionChildWidth () {
    var transitionAttribute = 'data-transition-fade-in-and-out';
    var transitionElementName = $('[' + transitionAttribute + ']').attr(transitionAttribute);
    var transitionChildElementName = transitionElementName + '-content';// all child elements must be id='PARENT_ID-content'
    $('#' + transitionChildElementName).attr('style', 'width:' + $('#' + transitionElementName).outerWidth() + 'px;');
}

// transition the sidebar in or out of the page
function transitionInOrOut(event) {
    var transitionAttribute = 'data-transition-fade-in-and-out';
    var transitionElementName = $('[' + transitionAttribute + ']').attr(transitionAttribute);
    $('#' + transitionElementName).toggleClass("width-transition").toggleClass("width-transition-hidden");
    event.preventDefault();
}
