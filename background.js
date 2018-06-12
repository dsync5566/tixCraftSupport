// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {  
  console.log("background!!");
});

/*
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab.id
  console.log(message, tabId)
});
*/
