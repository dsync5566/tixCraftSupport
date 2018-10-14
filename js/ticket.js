// ticket
let scripts = document.getElementsByTagName('script');
console.log("scripts number " + scripts.length);
for (let i = 0; i < scripts.length; i++) {
  let data = scripts[i].innerHTML;
  if (data.includes("TicketForm") && data.includes("mousedown")) {
    console.log("hit script " + i);
    let agree_regexp = /TicketForm\[agree]\[(.{44})]/;
    let agree = agree_regexp.exec(data)[0];
    let ticketPrice_regexp = /TicketForm\[ticketPrice]\[(.{44})]/;
    let ticketPrice = ticketPrice_regexp.exec(data)[0];

    $("#TicketForm_agree").prop('checked', true).prop('name', agree);
    $("#TicketForm_checked").prop('name', ticketPrice);
    break;
  }
}

//$("#TicketForm select option:last-child").prop('selected', true);
let $ticket_options = $("#TicketForm select option");
if ($ticket_options.length) {
  chrome.storage.local.get({
      TicketNumber: 0
  }, items => {
      let doSelect = false;

      if (items.TicketNumber > 0) {
        $ticket_options.each(function() {
          if ($(this).val() == items.TicketNumber) {
            console.log("hit ticket number " + items.TicketNumber);
            $(this).prop('selected', true);
            doSelect = true;
            return false;
          }
        });
      }
      // if ticket number can't find or last
      if (doSelect == false) {
        $ticket_options.last().prop('selected', true);
        if (items.TicketNumber == 0) {
          console.log("hit last");
        } else {
          console.log("hit failed");
        }
      }
  });
}

$("#TicketForm_verifyCode").focus();
 
/*
let data = document.getElementsByTagName('html')[0].innerHTML;
let agree = data.substr(data.indexOf("TicketForm[agree][", 4000), 63);
$("#TicketForm_agree").prop('checked', true).prop('name', agree);
let data2 = data.substr(data.indexOf("#TicketForm_checked", 4000), 1000);
let ticketPrice = data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69);
$("#TicketForm_checked").prop('name', ticketPrice);
*/

//console.log( data.substr(data.indexOf("TicketForm[agree][", 4000), 63) );
////console.log( data.substr(data.indexOf("#TicketForm_checked", 4000)+36, 69) );
//console.log( data2 );
//console.log( data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69) );
