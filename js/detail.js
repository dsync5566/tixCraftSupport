
// console.log($.fn.jquery);

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

  // let $loginImage = $(".login-notice img");
  // $loginImage.width($loginImage.width()*2);
}

// find link
$(".activityContent ul.list-inline a").each(function() {console.log($(this).attr("href"))})
$(".activityContent ul.list-inline a").each(function() {
  if ($(this).attr("href").match(/activity\/game\//)) {
    console.log("find activity game !!");

    chrome.storage.local.get({
      ProgramOnly: false
    }, items => {
      if (items.ProgramOnly) {
        let link = $(this).attr("href");
        if (link) {
          console.log("link: " + link);
          window.location.href = link;
        }
      }
    });

    // $.get($(this).attr("href"), function(response) {
    //   console.log(response);
    //   $("#gameListContainer").html(response);
    // });

    $(this)[0].click();   

    chrome.storage.local.get({
        ProgramAuto: false,
        ProgramDate: '2023-03-01'
    }, items => {
        if (items.ProgramAuto) {
          var myInterval = setInterval(() => {
            let dstr = items.ProgramDate.replace(/-/g, "/");
            let target = $("#gameList td:contains('" + dstr + "')").first();
            console.log("date 1: " + dstr);

            if (target.length) {
              console.log("date 2: " + target.text());
              let link = target.parent().find("button").attr("data-href");
              if (link) {
                console.log("link: " + link);
                clearInterval(myInterval);
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

    // fetch($(this).attr("href"), {
        // credentials : "same-origin",
        // headers : {
         // 'x-requested-with' : 'XMLHttpRequest'
        // }
      // })
      // .then(response => response.text())
      // .then(html => {
        // console.log(html);

        // var parser = new DOMParser();
        // var parsedDocument = parser.parseFromString(html, 'text/html');
        // console.log(parsedDocument);

        // set the current page's <html> contents to the newly parsed <html> content
        // document.getElementById('gameListContainer').innerHTML = parsedDocument;
        // document.getElementById('gameListContainer').innerHTML = html;
/*
// get a list of all <script> tags in the new page
var tmpScripts = document.getElementsByTagName('script');
if (tmpScripts.length > 0) {
    // push all of the document's script tags into an array
    // (to prevent dom manipulation while iterating over dom nodes)
    var scripts = [];
    for (var i = 0; i < tmpScripts.length; i++) {
        scripts.push(tmpScripts[i]);
    }

    // iterate over all script tags and create a duplicate tags for each
    for (var i = 0; i < scripts.length; i++) {
        var s = document.createElement('script');
        s.innerHTML = scripts[i].innerHTML;

        // add the new node to the page
        scripts[i].parentNode.appendChild(s);

        // remove the original (non-executing) node from the page
        scripts[i].parentNode.removeChild(scripts[i]);
    }
}
*/

        // $("#gameListContainer")[0].innerHTML = html;
        // $("#gameListContainer").html(html);
        // console.log("done");

      // })
      // .catch(err => console.log(err))

      // $(".normal input:button").each(function() {
          // console.log("find " + $(this).attr("data-href"));
      // });
/*
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
*/
    // });

  }
});
