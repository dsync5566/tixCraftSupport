// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.create({
    url: browser.extension.getURL("options.html")
  })
});

// global
var AreaInfo;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //const tabId = sender.tab.id
  //console.log(message, tabId)
  AreaInfo = message;
});
