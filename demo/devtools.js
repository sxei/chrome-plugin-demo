
chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "devtools.html",
    function(panel) {
      console.log(222);
    }
);