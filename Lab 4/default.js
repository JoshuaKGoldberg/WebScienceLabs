$(document).ready(function() {
  // Start collecting info from the search input
  var input   = $("#search_input"),
      req_num = 0,
      val_old = input.val(),
      val_cur = val_old;
  
  // Whenever the input is changed, AJAX a search
  function results_search() {
    var val = val_cur = input.val(),
        my_req_num = req_num += 1;
    if(!val || val.length < 2) return;
    $.ajax({ url: "https://graph.facebook.com/" + val })
      .done(function(results) { results_parse(results, val, my_req_num); });
  }
  
  // With results from the Facebook Graph, give them to the results container
  function results_parse(results, val, my_req_num) {
    if(val == val_old) return;
    if(my_req_num < req_num) return;
    $("#search_results")
      .fadeOut(0)
      .html(results_htmlize(results))
      .linkify()
      .fadeIn(350);
    val_old = val;
  }
  
  input
    .change(results_search)
    .keypress(results_search)
    .keyup(results_search);
  
  results_search();
});

// Turns the results into an ordering in HTML
function results_htmlize(results) {
  var output = "", i;
  for(i in results) {
    if( i.indexOf("_") >= 0 
     || i.length <= 2
     || results[i].toString() == "[object Object]")
      continue;
    output += "<div class='gridout ui-grid-a'>";
    output += "  <h3 class='gridder ui-block-a'>" + i + "</h3>";
    output += "  <div class='gridder ui-block-b'>" + results[i] + "</div>";
    output += "</div>";
  }
  return output + "";
}

   