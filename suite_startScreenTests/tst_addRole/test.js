function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    addRoleTests();
}

function addRoleTests() {
    
    // clicking the add card opens the add role dialog
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);
    mouseClick(waitForObject(":qt_splithandle_.roleCard_HTML_Object"));
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object")); 
    
    // clicking the fab opens the add role dialog
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);
    mouseClick(waitForObject(":qt_splithandle_.fab_HTML_Object"));
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object"));    
    
    // add role dialog has a close button
    mouseClick(waitForObject(":qt_splithandle_.roleCard_HTML_Object"));
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object")); 
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);     
    
    // add role dialog has a save button
    mouseClick(waitForObject(":qt_splithandle_.roleCard_HTML_Object"));
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.saveButton_HTML_Object")); 
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);      

    startApplication("SocietyPro");
    waitForObjectItem(":Navigation_QTreeWidget", "Web Browser");
    clickItem(":Navigation_QTreeWidget", "Web Browser", 64, 7, 0, Qt.LeftButton);
    mouseClick(waitForObject(":{aboveWidget=':qt_splithandle__QSplitterHandle' container=':qt_tabwidget_stackedwidget_WWebViewTabbed' type='QWebView' unnamed='1' visible='1'}.DOCUMENT.HTML1.BODY1.DIV1.DIV1.DIV1.DIV1.DIV2.DIV1.IMG1"), 99, 105, 0, Qt.LeftButton);
    
}
