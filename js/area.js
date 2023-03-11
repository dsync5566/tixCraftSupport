// area

const badAreaArray = ["遮擋", "護網", "鐵網", "不完整"];

chrome.storage.local.get({
  HideBadArea: false,
  ShowOnlyArea: false,
  AreaName: ""
}, items => {
  if (items.ShowOnlyArea && items.AreaName.length) {
    var AreaNameArray = items.AreaName.split(',');
    console.log(AreaNameArray);
    $("ul.area-list > li").each(function(index) {
        if (AreaNameArray.some(el => $(this).text().includes(el))) {
            // $(this).show();
        } else {
            $(this).hide();
        }
    });
  }

  if (items.HideBadArea) {
    $("ul.area-list > li").each(function( index ) {
      if (badAreaArray.some(el => $(this).text().includes(el))) {
          $(this).hide();
      }
    });
  }
});

// hide no link area
$("ul.area-list > li:not(:has(a))").hide();

// let actualCode = `
// setTimeout(function() {
//   document.dispatchEvent(new CustomEvent('connectExtension', {detail: areaUrlList}));
// }, 0);
// `;
// let script = document.createElement('script');
// script.textContent = actualCode;
// (document.head||document.documentElement).appendChild(script);
// script.remove();

// Event listener
// document.addEventListener('connectExtension', function(e) {
//   let msg = {
//     title: $(".activityT.title").text(),
//     date: $(".select01 :selected").text().substr(0, 14),
//     url: location.origin,
//     list: []
//   };
//   //console.log(e.detail);
//   $("ul.area-list > li.select_form_b a, ul.area-list > li.select_form_a a").each(function(index) {
//     let id = $(this).attr("id");
//     let text = $(this).text();
//     let url = e.detail[id];
//     msg.list.push({text, url, id});
//     console.log("find area info " + text + " - " + url);
//   });

//   chrome.runtime.sendMessage(msg);
// });


/*
let scripts = document.getElementsByTagName('script');
console.log("scripts number " + scripts.length);
for (let i = 0; i < scripts.length; i++) {
  let data = scripts[i].innerHTML;
  if (data.includes("areaUrlList")) {
    console.log("hit script " + i);
    data = data.substr(data.indexOf("areaUrlList"), 300);
    console.log(data);
    break;
  }
}
*/
