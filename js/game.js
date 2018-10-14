
if ($(".normal input:button").length) {
  chrome.storage.local.get({
      ProgramDate: '2018-06-01'
  }, items => {
      let dstr = items.ProgramDate.replace(/-/g, "/");
      let target = $(".normal td:contains('" + dstr + "')").first();
  
      if (target.length) {
        let link = target.parent().find("input:button").attr("data-href");
        if (link) {
          console.log("link: " + link);
          window.location.href = link;
        }
      }
  });
}
