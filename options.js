// Saves options to browser.storage
function save_options() {
    var ProgramAuto = document.getElementById('ProgramAuto').checked;
    var ProgramDate = document.getElementById('ProgramDate').value;
    var tselect = document.getElementById('TicketNumber');
    var TicketNumber = tselect.options[tselect.selectedIndex].value;

    browser.storage.local.set({
        ProgramAuto,
        ProgramDate,
        TicketNumber
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
    browser.storage.local.get({
        ProgramAuto: false,
        ProgramDate: '2018-06-01',
        TicketNumber: 0
    }).then(items => {
        console.log(items);
        document.getElementById('ProgramAuto').checked = items.ProgramAuto;
        document.getElementById('ProgramDate').value = items.ProgramDate;
        document.getElementById('TicketNumber').selectedIndex = items.TicketNumber;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('ver').textContent = " v" + browser.runtime.getManifest().version;

// show program information
let AreaInfo = browser.extension.getBackgroundPage().AreaInfo;
console.log(AreaInfo);

if (AreaInfo) {
  document.getElementById('ProgramTitle').textContent += AreaInfo.title;

  let AreaList = "";
  for (var i = 0; i < AreaInfo.list.length; i++) {
    let text = AreaInfo.list[i].text;
    let url = AreaInfo.url + AreaInfo.list[i].url;

    url = url.link(url);

    AreaList += "<div>" + text + " --- "+ url + "</div>";
  }

  document.getElementById('AreaList').innerHTML = AreaList;
}
