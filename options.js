// Saves options to chrome.storage
function save_options() {
    var ProgramAuto = document.getElementById('ProgramAuto').checked;
    var ProgramDate = document.getElementById('ProgramDate').value;
    var tselect = document.getElementById('TicketNumber');
    var TicketNumber = tselect.options[tselect.selectedIndex].value;

    chrome.storage.local.set({
        ProgramAuto,
        ProgramDate,
        TicketNumber
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}
// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restore_options() {
    chrome.storage.local.get({
        ProgramAuto: false,
        ProgramDate: '2018-06-01',
        TicketNumber: 0
    }, items => {
        console.log(items);
        document.getElementById('ProgramAuto').checked = items.ProgramAuto;
        document.getElementById('ProgramDate').value = items.ProgramDate;
        document.getElementById('TicketNumber').selectedIndex = items.TicketNumber;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('ver').textContent = " v" + chrome.runtime.getManifest().version;
