// Sources
// Please don't hesitate to send a pull request to add or remove companies from the list.
// Please include a source for any additions.
var COMPANIES = ["Victoria's Secret", "IBM", "McDonald", "JCPenney"];


$(document).ready(function() {

  COMPANIES.forEach((company) => {
    $(function() {
        var foundin = $('h1:contains(' + company + '),h2:contains(' + company + '),a:contains(' + company + '),p:contains(' + company + '),li:contains(' + company + ')');
        foundin.css("background-color", "black");
        foundin.css("color", "white");
        foundin.css("text-decoration", "line-through");
        console.log(foundin);
        console.log(company);
    });
  });
  // Loading an image code was not working and crashing extension.
  //var icon = chrome.extension.getURL("icon.png");
  // $('.a-row img').each(function(index, image){
  //   $(image).attr('src', icon);
  // });
});
