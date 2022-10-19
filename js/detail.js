// login check
let loginText = $(".account-login").text();
// console.log("LOGIN TEXT = "+loginText);
if (loginText.includes("會員登入")) {
  let todayDate = new Date().toISOString().slice(0, 10);

  chrome.storage.local.get({
      AlertDate: ''
  }, items => {
    if (items.AlertDate != todayDate) {
      alert("!!! === !!!!\n\n加速購買流程\n請先登入\n\n!!! === !!!!");

      var AlertDate = todayDate;
      chrome.storage.local.set({AlertDate});
    }
  });

  let $loginImage = $(".login-notice img");
  $loginImage.width($loginImage.width()*2);
}

// find link
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
            ProgramDate: '2022-12-23'
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
