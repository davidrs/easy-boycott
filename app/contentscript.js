// Sources: https://docs.google.com/spreadsheets/d/1qLCwqBs6-7eLP8OL_9B4f5dXTy_QaRRDlpnxPNTC5MQ/edit#gid=0
// Please don't hesitate to  add comments to suggest updates to the list.
var COMPANIES = ["Victoria's Secret", "Victoria Secret", "IBM", "McDonald", "JCPenney"];


$(document).ready(function() {

  COMPANIES.forEach((company) => {
    $(function() {
        var foundin = $('h1:contains(' + company + '),h2:contains(' + company + '),a:contains(' + company + '),p:contains(' + company + '),li:contains(' + company + ')');
        foundin.css("background-color", "black");
        foundin.css("color", "white");
        foundin.css("text-decoration", "line-through");
        // console.log(foundin);
        // console.log(company);
    });
  });
  // Loading an image code was not working and crashing extension.
  //var icon = chrome.extension.getURL("icon.png");
  // $('.a-row img').each(function(index, image){
  //   $(image).attr('src', icon);
  // });
});
