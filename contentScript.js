//
$(".activityContent ul.list-inline a").each(function() {
  if ($(this).attr("href").match(/activity\/game\//)) {
    console.log("find activity game !!")

    $.get($(this).attr("href"), function(response) {
        $("#gameListContainer").html(response);

        $(".normal input:button").each(function() {
            console.log("find " + $(this).attr("data-href"));
        });

        chrome.storage.local.get({
            ProgramAuto: false,
            ProgramDate: '2018-06-01'
        }, items => {
            if (items.ProgramAuto) {
              let dstr = items.ProgramDate.replace(/-/g, "/")            
              let target = $(".normal td:contains('" + dstr + "')").first(); 
              console.log("date 1: " + dstr);

              if (target.length) {
                console.log("date 2: " + target.text());
                let link = target.parent().find("input:button").attr("data-href");
                if (link) {
                  console.log("link: " + link);
                  window.location.href = link;
                } else {
                  console.log("not found link!");
                }
              } else {
                console.log("not found program!");
              }
            }
        });
    });
  }
});

// credit check
$("#checkCode").val("524255");

// area
$("ul.area-list > li.select_form_b a, ul.area-list > li.select_form_a a").each(function() {
  console.log("find area id " + $(this).attr("id"));
});
$("ul.area-list > li:not(:has(a))").hide();

// ticket
var data = document.getElementsByTagName('html')[0].innerHTML;
$("#TicketForm_agree").prop('checked', true).prop('name', data.substr(data.indexOf("TicketForm[agree][", 10000), 63));

var data2 = data.substr(data.indexOf("#TicketForm_checked", 10000), 1000);
$("#TicketForm_checked").prop('name', data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69));

//$("#TicketForm select option:last-child").prop("selected", true);
var $ticket_options = $("#TicketForm select option");
if ($ticket_options.length) {
  chrome.storage.local.get({
      TicketNumber: 0
  }, items => {
      let doSelect = false;
      //console.log(items);
      if (items.TicketNumber == 0) {
        console.log("hit last");
        $ticket_options.last().prop("selected", true);
        doSelect = true;
      } else {
        $ticket_options.each(function() {
          if ($(this).val() == items.TicketNumber) {
            console.log("hit " + items.TicketNumber);
            $(this).prop("selected", true);
            doSelect = true;
            return false;
          }
        });
      }
      // if ticket number can't find
      if (doSelect == false) {
        $ticket_options.last().prop("selected", true);
        console.log("hit failed");
      }
  });
}

$("#TicketForm_verifyCode").focus();

//console.log( data.substr(data.indexOf("TicketForm[agree][", 10000), 63) );
//console.log( data.substr(data.indexOf("#TicketForm_checked", 10000)+36, 69) );
//console.log( data2 );
//console.log( data2.substr(data2.indexOf("TicketForm[ticketPrice][", 100), 69) );
