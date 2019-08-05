/*********************************

TechDegree Project 3 - Interactive form
Javascript file mostly implemented using jQuery

*********************************/

/*
Web page loads with focus on the Name input field
Initially hides:
  Other Job Role Text Field
  Colors Select Options
*/
$(document).ready(function() {
  $('#name').focus();
  $('#other-title').hide();
  $('#colors-js-puns').hide();
});

/*Javascript to show other Job Role text input when selected, or rehide it if it is de-selected.
Code adapted from https://stackoverflow.com/questions/15566999/how-to-show-form-input-fields-based-on-select-value
*/
$('#title').on('change', function(event){
  if ($(this).val() === "other") {
    $('#other-title').show();
    $('#other-title').focus();
  }
  else {
    $('#other-title').hide()
  }
});

/*
Highlight T-shirt color options based on which T-shirt style is selected.
Code adapted from:
https://www.websparrow.org/web/add-and-remove-options-in-select-using-jquery

*/
$('#design').on('change', function(event){
  $('#colors-js-puns').show();
  if ($(this).val() === "js puns" ) {
    $("#colors-js-puns option[value='cornflowerblue']").show();
    $("#colors-js-puns option[value='darkslategrey']").show();
    $("#colors-js-puns option[value='gold']").show();
    $("#colors-js-puns option[value='tomato']").hide();
    $("#colors-js-puns option[value='steelblue']").hide();
    $("#colors-js-puns option[value='dimgrey']").hide();
  }
  if ($(this).val() === "heart js" ) {
    $("#colors-js-puns option[value='tomato']").show();
    $("#colors-js-puns option[value='steelblue']").show();
    $("#colors-js-puns option[value='dimgrey']").show();
    $("#colors-js-puns option[value='cornflowerblue']").hide();
    $("#colors-js-puns option[value='darkslategrey']").hide();
    $("#colors-js-puns option[value='gold']").hide();
  }
});

/*

  Activities Checkboxes

*/