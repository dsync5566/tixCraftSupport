
if ($(".normal input:button").length) {
  chrome.storage.local.get({
      ProgramAuto: false,
      ProgramDate: '2022-12-23'
  }, items => {
      if (items.ProgramAuto) {
        let dstr = items.ProgramDate.replace(/-/g, "/");
        let target = $(".normal td:contains('" + dstr + "')").first();

        if (target.length) {
          let link = target.parent().find("input:button").attr("data-href");
          if (link) {
            console.log("link: " + link);
            window.location.href = link;
          }
        }
      }
  });
}
