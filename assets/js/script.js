// Open the modal
$(document).ready(function(){
  $('.modal').modal({
    'dismissible': true,
    'opacity': 0.5
  });
  $('.modal').modal('open');
});

// For the sharing button
document.getElementById("share_button").addEventListener("click", sharePage);
function sharePage() {
	$('.modal').modal({
    'dismissible': true,
    'opacity': 0.5
  });
  $('.modal').modal('open');
}