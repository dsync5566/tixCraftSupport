
// console.log($.fn.jquery);

if ($("#gameList button").length) {
  chrome.storage.local.get({
    ProgramAuto: false,
    ProgramDate: '2023-03-01'
  }, items => {
    if (items.ProgramAuto) {
      let dstr = items.ProgramDate.replace(/-/g, "/");
      let target = $("#gameList td:contains('" + dstr + "')").first();

      if (target.length) {
        let link = target.parent().find("button").attr("data-href");
        if (link) {
          console.log("link: " + link);
          window.location.href = link;
        }
      }
    }
  });
}
