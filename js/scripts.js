$(document).ready(function() {
  var blanks = ["coffee", "vanilla", "chocolate",
 "strawberry"];

  blanks.forEach(function(blank) {
    $("ul#flavors").append("<li>" + blank + "</li>")
  });
});
