
// console.log($.fn.jquery);

if ($("#gameList button").length) {
  chrome.storage.local.get({
    ProgramAuto: false,
    ProgramAuto2: false,
    ProgramAuto3: false,
    ProgramAuto4: false,
    ProgramDate: '2023-12-08'
  }, items => {
    if (items.ProgramAuto || items.ProgramAuto2 || items.ProgramAuto3 || items.ProgramAuto4) {
      var myInterval = setInterval(() => {
        let dstr = items.ProgramDate.replace(/-/g, "/");
        let target;
        if (items.ProgramAuto) {
          target = $("#gameList td:contains('" + dstr + "')").first();
        } else if (items.ProgramAuto2) {
          target = $("#gameList td:contains('" + dstr + "'):eq(1)");
        } else if (items.ProgramAuto3) {
          target = $("#gameList td:contains('" + dstr + "'):eq(2)");
        } else if (items.ProgramAuto4) {
          target = $("#gameList td:contains('" + dstr + "'):eq(3)");
        }

        if (target.length) {
          let link = target.parent().find("button").attr("data-href");
          if (link) {
            console.log("link: " + link);
            window.location.href = link;
          } else {
            console.log("not found link!");
          }
        } else {
          console.log("not found program!");
        }
      }, 300);
    }
  });
}
