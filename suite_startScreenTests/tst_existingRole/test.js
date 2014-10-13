function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    roleCardTests();
}

function roleCardTests() {
    /*
    sendEvent("QMouseEvent", waitForObject(":Navigation.Role: *_QToolButton"), QEvent.MouseButtonPress, 109, 9, Qt.LeftButton, 1, 0);
    activateItem(waitForObjectItem(":SocietyPro v*.Message Log_QMenu", "Professional"));
    sendEvent("QMouseEvent", waitForObject(":Navigation.Role: *_QToolButton"), QEvent.MouseButtonPress, 140, 12, Qt.LeftButton, 1, 0);
    activateItem(waitForObjectItem(":SocietyPro v*.Message Log_QMenu", "voodoo"));
    */

    test.compare(object.exists(':qt_splithandle_.Role Card_HTML_Object'), true);
    test.compare(object.exists(':qt_splithandle_.Role Name_HTML_Object'), true);
    waitFor("object.exists(':qt_splithandle_.Role Name_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.Role Name_HTML_Object").visible, true); 
    test.compare(findObject(":qt_splithandle_.Role Name_HTML_Object").innerText, "VOODOO");
    test.compare(object.exists(':qt_splithandle_.Role Avatar_HTML_Object'), true);
    waitFor("object.exists(':qt_splithandle_.Role Avatar_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.Role Avatar_HTML_Object").visible, true);   
    
}
