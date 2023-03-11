// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(tab => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("options.html")
  })
});

// global
var checkCode = "";

// var AreaInfo = {};
/*
var AreaInfo2 = {};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // const tabId = sender.tab.id
  // console.log(message, tabId)
  if (AreaInfo2.title == message.title) {
    // AreaInfo2[message.date].concat(message.list);
    // message.list.forEach(element => AreaInfo2[message.date].push(element));
    if (AreaInfo2[message.date]) {
        message.list.forEach(function(element) {
            var oldList = AreaInfo2[message.date];
            for (var i = 0; i < oldList.length; i++) {
                if (element.id == oldList[i].id) {
                    oldList[i] = element;
                    return;
                }
            }
            oldList.push(element);
        });
        AreaInfo2[message.date].sort(areaCompare);
    } else {
        AreaInfo2[message.date] = message.list.sort(areaCompare);
    }
  } else {
    AreaInfo2 = {};
    AreaInfo2.title = message.title;
    AreaInfo2.url = message.url;
    AreaInfo2[message.date] = message.list.sort(areaCompare);
  }

  // AreaInfo = message;
});

function areaCompare(a, b) {
  if (a.id.length == b.id.length) {
    return a.id.localeCompare(b.id)
  } else {
    return a.id.length - b.id.length;
  }
}
*/

// title: $(".activityT.title").text(),
// date: $(".select01 :selected").text().substr(0, 14),
// url: location.origin,
// list: []
