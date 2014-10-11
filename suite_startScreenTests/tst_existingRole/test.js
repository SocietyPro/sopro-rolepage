// file:///home/voodoo/cprojects/sopro-rolepage/index.html

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
    var htmlAppRoot = "file:///home/voodoo/cprojects/sopro-rolepage/index.html";
    getHtmlApp(htmlAppRoot);
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    roleCardTests();
}

function roleCardTests() {
    test.compare(object.exists(':qt_splithandle_.Role Card_HTML_Object'), true);
    test.compare(object.exists(':qt_splithandle_.Role Name_HTML_Object'), true);
    waitFor("object.exists(':qt_splithandle_.Role Name_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.Role Name_HTML_Object").visible, true);  
    test.compare(findObject(":qt_splithandle_.Role Name_HTML_Object").innerText, "VOODOO");
    test.compare(object.exists(':qt_splithandle_.Role Avatar_HTML_Object'), true);
    waitFor("object.exists(':qt_splithandle_.Role Avatar_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.Role Avatar_HTML_Object").visible, true);   
}
