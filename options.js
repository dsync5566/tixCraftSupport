// Saves options to browser.storage
function save_options() {
    var ProgramAuto = document.getElementById('ProgramAuto').checked;
    var ProgramAuto2 = document.getElementById('ProgramAuto2').checked;
    var ProgramAuto3 = document.getElementById('ProgramAuto3').checked;
    var ProgramAuto4 = document.getElementById('ProgramAuto4').checked;
    var ProgramDate = document.getElementById('ProgramDate').value;
    var ProgramOnly = document.getElementById('ProgramOnly').checked;
    var tselect = document.getElementById('TicketNumber');
    var TicketNumber = tselect.options[tselect.selectedIndex].value;
    var HideBadArea = document.getElementById('HideBadArea').checked;
    var ShowOnlyArea = document.getElementById('ShowOnlyArea').checked;
    var AreaName = document.getElementById('AreaName').value;

    chrome.storage.local.set({
        ProgramAuto,
        ProgramAuto2,
        ProgramAuto3,
        ProgramAuto4,
        ProgramDate,
        ProgramOnly,
        TicketNumber,
        HideBadArea,
        ShowOnlyArea,
        AreaName
    }).then(() => {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
}
// Restores select box and checkbox state using the preferences stored in browser.storage.
function restore_options() {
    chrome.storage.local.get({
        ProgramAuto: false,
        ProgramAuto2: false,
        ProgramAuto3: false,
        ProgramAuto4: false,
        ProgramDate: '2023-12-08',
        ProgramOnly: false,
        TicketNumber: 0,
        HideBadArea: false,
        ShowOnlyArea: false,
        AreaName: ""
    }).then(items => {
        // console.log(items);
        document.getElementById('ProgramAuto').checked = items.ProgramAuto;
        document.getElementById('ProgramAuto2').checked = items.ProgramAuto2;
        document.getElementById('ProgramAuto3').checked = items.ProgramAuto3;
        document.getElementById('ProgramAuto4').checked = items.ProgramAuto4;
        document.getElementById('ProgramDate').value = items.ProgramDate;
        document.getElementById('ProgramOnly').checked = items.ProgramOnly;
        document.getElementById('TicketNumber').selectedIndex = items.TicketNumber;
        document.getElementById('HideBadArea').checked = items.HideBadArea;
        document.getElementById('ShowOnlyArea').checked = items.ShowOnlyArea;
        document.getElementById('AreaName').value = items.AreaName;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('ver').textContent = " v" + chrome.runtime.getManifest().version;

// show program information
//let AreaInfo = browser.extension.getBackgroundPage().AreaInfo;
//console.log(AreaInfo);
/*
let AreaInfo2 = chrome.runtime.getBackgroundPage().AreaInfo2;
console.log(AreaInfo2);

if (AreaInfo2 && AreaInfo2.title) {
    document.getElementById('ProgramTitle').textContent += AreaInfo2.title;

    let AreaList = "";

    Object.entries(AreaInfo2).forEach(([key, value]) => {
        if (key == 'title' || key == 'url') return;

        AreaList += key + "<br>";

        for (var i = 0; i < value.length; i++) {
          let text = value[i].text;
          let url = AreaInfo2.url + value[i].url;

          url = url.link(url);

          AreaList += "<div>" + text + " --- "+ url + "</div>";
        }
        AreaList += "<br>";
    });

    document.getElementById('AreaList').innerHTML = AreaList;
}
*/

/*
if (AreaInfo && AreaInfo.list) {
  document.getElementById('ProgramTitle').textContent += AreaInfo.title;

  let AreaList = AreaInfo.date + "<br>";

  for (var i = 0; i < AreaInfo.list.length; i++) {
    let text = AreaInfo.list[i].text;
    let url = AreaInfo.url + AreaInfo.list[i].url;

    url = url.link(url);

    AreaList += "<div>" + text + " --- "+ url + "</div>";
  }

  document.getElementById('AreaList').innerHTML = AreaList;
}
*/
