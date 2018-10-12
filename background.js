// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.create({
    url: chrome.extension.getURL("options.html")
  })
});

// global
var AreaInfo;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //const tabId = sender.tab.id
  //console.log(message, tabId)
  AreaInfo = message;
});
