$(document).ready(function() {
  $.get('sentence.html', function(response) {
        // Here we are getting the element on the page with the id of sentences and
        // inserting the response
        $('#sentences').html(response);
    });
});