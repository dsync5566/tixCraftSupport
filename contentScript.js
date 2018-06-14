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
                let link = target.next().next().next().find("input:button").attr("data-href");
                console.log("link: " +  link);
                window.location.href = link;
              } else {
                console.log("not found!");
              }
            }
        });
    });
  }
});
//

// area
$("ul.area-list > li.select_form_b a, ul.area-list > li.select_form_a a").each(function() {
  console.log("find area id " + $(this).attr("id"));
});
$("ul.area-list > li:not(:has(a))").hide();

// ticket
var data = document.getElementsByTagName('html')[0].innerHTML;
$("#TicketForm_agree").prop('checked', true).prop('name', data.substr(data.indexOf("TicketForm[agree][", 10000), 63));
$("#TicketForm select option:last-child").prop("selected", true)
$("#TicketForm_checked").prop('name', data.substr(data.indexOf("#TicketForm_checked", 10000)+36, 69));
$("#TicketForm_verifyCode").focus();
//console.log( data.substr(data.indexOf("TicketForm[agree][", 10000), 63) );
//console.log( data.substr(data.indexOf("#TicketForm_checked", 10000)+36, 69) );

