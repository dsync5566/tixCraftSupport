// ticket

if ($("#ticketPriceList select").length > 0) {
  let $ticket_options = $("#ticketPriceList select:first option");
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
}

// scale 2x
let $verifyImage = $("#TicketForm_verifyCode-image");
if ($verifyImage.width() == 0) {
  console.log("image width is zero!");
  $verifyImage.width(240);
  $verifyImage.height(200);
} else {
  console.log($verifyImage.width())
  console.log($verifyImage.height())
  $verifyImage.width($verifyImage.width()*2);
}

// ticket agree mode 1
$("#TicketForm_agree").prop('checked', true)

// please input verify code
$("#TicketForm_verifyCode").focus();

/* old method
let data = document.getElementsByTagName('html')[0].innerHTML;
let agree = data.substr(data.indexOf("TicketForm[agree][", 4000), 63);
$("#TicketForm_agree").prop('checked', true).prop('name', agree);
let data2 = data.substr(data.indexOf("#TicketForm_checked", 4000), 1000);
let ticketPrice = data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69);
$("#TicketForm_checked").prop('name', ticketPrice);
*/

//console.log( data.substr(data.indexOf("TicketForm[agree][", 4000), 63) );
//console.log( data.substr(data.indexOf("#TicketForm_checked", 4000)+36, 69) );
//console.log( data2 );
//console.log( data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69) );

/* ticket agree mode 2
let scripts = document.getElementsByTagName('script');
for (let i = 0; i < scripts.length; i++) {
  let data = scripts[i].innerHTML;
  if (data.includes("TicketForm") && data.includes("mousedown")) {
    console.log("total " + scripts.length + ", hit script " + i);

    if ($("#TicketForm_agree").length) {
      let agree_regexp = /TicketForm\[agree]\[(.{44})]/;
      let agree = agree_regexp.exec(data)[0];

      console.log("agree: " + agree);
      $("#TicketForm_agree").prop('checked', true).prop('name', agree);
    }

    // the field deleted by tix
    if ($("#TicketForm_checked").length) {
      let ticketPrice_regexp = /TicketForm\[ticketPrice]\[(.{44})]/;
      let ticketPrice = ticketPrice_regexp.exec(data)[0];

      console.log("ticketPrice: " + ticketPrice);
      $("#TicketForm_checked").prop('name', ticketPrice);
    }
    break;
  }
}
*/
