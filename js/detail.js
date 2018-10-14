//
$(".activityContent ul.list-inline a").each(function() {
  if ($(this).attr("href").match(/activity\/game\//)) {
    console.log("find activity game !!");

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
              let dstr = items.ProgramDate.replace(/-/g, "/");
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
