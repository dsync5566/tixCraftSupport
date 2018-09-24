// Saves options to chrome.storage
function save_options() {
    var pauto = document.getElementById('pauto').checked;
    var pdate = document.getElementById('pdate').value;
    var tselect = document.getElementById("tnum");
    var tnum = tselect.options[tselect.selectedIndex].value;

    chrome.storage.local.set({
        ProgramAuto: pauto,
        ProgramDate: pdate,
        TicketNumber: tnum
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
        document.getElementById('pauto').checked = items.ProgramAuto;
        document.getElementById('pdate').value = items.ProgramDate;    
        document.getElementById("tnum").selectedIndex = items.TicketNumber;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById("ver").textContent = " v" + chrome.runtime.getManifest().version;
