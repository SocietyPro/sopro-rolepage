function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    hoverMenuTests();
}

function hoverMenuTests() {
    
    // hover menu is not visible until the mouse hovers over the card
    test.compare(object.exists(':qt_splithandle_.roleCardHoverMenu_HTML_Object'), true);
    test.compare(findObject(':qt_splithandle_.roleCardHoverMenu_HTML_Object').visible, false);
    mouseMove(":qt_splithandle_.Role Card_HTML_Object");
    test.compare(findObject(':qt_splithandle_.roleCardHoverMenu_HTML_Object').visible, true);    
    
    // hover menu has an overflow menu button
    test.compare(object.exists(':qt_splithandle_.Overflow Menu_HTML_Object'), true);
    test.compare(findObject(':qt_splithandle_.Overflow Menu_HTML_Object').visible, true);
    
    // clicking the overflow menu button opens the overflow menu
    test.compare(object.exists(':qt_splithandle_.overflowMenu_HTML_Object'), false);
    clickButton(waitForObject(":qt_splithandle_.Overflow Menu_HTML_Object"));
    test.compare(object.exists(':qt_splithandle_.overflowMenu_HTML_Object'), false);  
    
    // overflow menu has a 'delete' action
    
}