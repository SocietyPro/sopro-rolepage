// file:///C:/Users/Tomas/Desktop/sopro-rolepage/index.html

// open the application in the current browser tab
function getHtmlApp (htmlAppRoot) {
    while (findObject(":Container_QTabBar").count > 2) {
        clickButton(waitForObject(":Container_CloseButton"));
    }
    if (findObject(":_QLineEdit").displayText == "") {
        mouseClick(waitForObject(":_QLineEdit"), 294, 15, 0, Qt.LeftButton); 
    } else {
        openContextMenu(waitForObject(":_QLineEdit"), 275, 12, 0);
        activateItem(waitForObjectItem(":SocietyPro v*.qt_edit_menu_QMenu", "Select All"));
    }; 
    type(waitForObject(":_QLineEdit"), htmlAppRoot);
    type(waitForObject(":_QLineEdit"), "<Return>");
}

function init () {
    startApplication("SocietyPro");
    waitForObjectItem(":Navigation_QTreeWidget", "Web Browser");
    clickItem(":Navigation_QTreeWidget", "Web Browser", 71, 9, 0, Qt.LeftButton);
    var htmlAppRoot = "file:///C:/Users/Tomas/Desktop/sopro-rolepage/index.html";
    getHtmlApp(htmlAppRoot);
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main() {
    
    toolbarTests();
    logoTests();    
       
}

function toolbarTests () {
    // Start Screen tab matches the application title
    waitFor("object.exists(':TabItem')", 20000);
    test.compare(findObject(":TabItem").text, "Choose a Role");
    
    // Start Screen has an application toolbar
    waitFor("object.exists(':qt_splithandle_.appToolbar_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.appToolbar_HTML_Object").visible, true);
    
    // Start Screen toolbar has a menu drawer button
    waitFor("object.exists(':qt_splithandle_.menu-drawer-button_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.menu-drawer-button_HTML_Object").visible, true);
    
    // Start Screen toolbar has a title
    waitFor("object.exists(':qt_splithandle_.appTitle_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.appTitle_HTML_Object").innerText, "Choose a Role");
}

function logoTests () {
    // A big pantheon log exists
    waitFor("object.exists(':qt_splithandle_.bigLogo_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.bigLogo_HTML_Object").visible, true);
}

